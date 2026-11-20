# How Large Language Models Work

Large Language Models (LLMs) are the foundation of many modern generative AI applications. They power conversational assistants, document analysis tools, code generators, search assistants, and AI agents.

To build reliable applications with LLMs, developers need more than an understanding of how to call a model API. They should understand how text is represented, how models process context, how predictions are generated, and why model outputs can be inaccurate or inconsistent.

This article explains the core mechanisms behind LLMs from an application engineering perspective, including Transformer architecture, tokenization, embeddings, attention, inference, model parameters, and practical engineering considerations.

## 1. What Are Large Language Models?

A Large Language Model is a neural network trained on large amounts of text and other data to learn statistical patterns in language.

Most commonly used generative LLMs are based on the Transformer architecture. They process a sequence of tokens and learn to predict likely subsequent tokens based on the preceding context.

For example, given:

```text
The capital of France is
```

A language model may assign a high probability to the next token:

```text
Paris
```

The model does not retrieve a prewritten answer in the way a traditional database does. It generates an output by repeatedly estimating probability distributions over possible next tokens.

This next-token prediction process is a central part of how many generative language models work.

### 1.1 LLMs, Machine Learning, and Deep Learning

These terms describe related but different levels of technology.

- **Artificial Intelligence (AI):** The broad field of building systems that perform tasks associated with human intelligence.
- **Machine Learning (ML):** A subset of AI in which systems learn patterns from data rather than relying entirely on manually written rules.
- **Deep Learning:** A subset of machine learning that uses neural networks with multiple layers.
- **Large Language Models:** Large-scale neural language models trained to process and generate language.

LLMs are therefore one category of deep learning model, not a synonym for all AI systems.

### 1.2 Common LLM Architectures

Transformer-based models can use different architectural configurations.

| Architecture | Main Characteristics | Typical Applications |
|---|---|---|
| Encoder-only | Processes input representations for contextual understanding | Classification, embeddings, semantic analysis |
| Decoder-only | Generates tokens autoregressively | Chat, text generation, code generation |
| Encoder-decoder | Encodes input and generates an output sequence | Translation, summarization, sequence transformation |

Many widely used generative chat models use decoder-only architectures. Other model families use different configurations depending on their intended tasks.

## 2. How Text Is Represented: Tokens and Tokenization

LLMs do not directly process words as humans see them. They process numerical representations of tokens.

A token can represent:

- A complete word
- Part of a word
- A punctuation mark
- A whitespace or text fragment
- A character or byte-related unit, depending on the tokenizer

For example, a sentence such as:

```text
Building AI applications requires engineering skills.
```

might be split into multiple tokens. The exact token boundaries depend on the tokenizer used by the model.

### 2.1 Tokenization

Tokenization converts input text into a sequence of token IDs.

A simplified process is:

```text
Input text
    ↓
Tokenizer
    ↓
Token IDs
    ↓
Model
```

Each token ID maps to an entry in the model's vocabulary.

The tokenizer is part of the model's input-processing system. Different models may use different tokenizers, so the same sentence can produce different token counts.

### 2.2 Why Tokenization Matters

Tokenization affects several engineering concerns:

**Context limits**

Models have a maximum context capacity. Input messages, retrieved documents, conversation history, and generated output all consume tokens.

**API cost**

Many model providers calculate usage and billing based on input and output tokens.

**Latency**

Longer input sequences generally require more computation and can increase response time.

**Text processing**

Languages, code, numbers, and special characters may be tokenized differently. Character count is therefore not a reliable substitute for token count.

### 2.3 Inspecting Token Counts in Python

The following example uses `tiktoken`, a tokenizer library commonly used with OpenAI model families. Token counts are model-dependent; use the tokenizer recommended for the model being deployed.

Install:

```bash
pip install tiktoken
```

Example:

```python
import tiktoken

text = "Building AI applications requires engineering skills."

encoding = tiktoken.get_encoding("cl100k_base")
tokens = encoding.encode(text)

print("Token IDs:", tokens)
print("Token count:", len(tokens))
print("Decoded text:", encoding.decode(tokens))
```

For production systems, do not assume that one tokenizer is compatible with every model provider.

## 3. Embeddings: Converting Tokens into Vectors

Token IDs are discrete identifiers. Neural networks need numerical representations that can capture relationships between tokens.

An embedding is a dense numerical vector representing a token, text segment, or other input.

For example, a simplified embedding might look like:

```text
[0.12, -0.34, 0.81, 0.09, ...]
```

Real embedding dimensions are usually much larger.

### 3.1 Token Embeddings and Positional Information

A Transformer model typically converts token IDs into embedding vectors.

Because the model processes sequences, it also needs information about token positions or order.

Depending on the architecture, positional information may be added through positional embeddings, rotary positional embeddings (RoPE), or other positional mechanisms.

A simplified representation is:

```text
Token IDs
    ↓
Token Embeddings
    +
Positional Information
    ↓
Input Representations
```

Without positional information, the model would have difficulty distinguishing sequences in which the same tokens appear in different orders.

### 3.2 Contextual Representations

A token's initial embedding does not fully represent its meaning in a sentence.

Transformer layers repeatedly update token representations based on relationships with other tokens. As a result, the representation of a word can change depending on its context.

Consider:

```text
The router connects to the network.
The router in the restaurant is busy.
```

The word "router" has different meanings in these sentences. Contextual processing helps a model distinguish them.

### 3.3 Embeddings for Semantic Search

Embedding models can also convert complete text passages into vectors.

These vectors can be compared to identify semantically related content.

For example:

```text
Query: How do I reset my router?
Document: Restoring the device to factory defaults.
```

The wording is different, but the meanings are related.

This capability is important in Retrieval-Augmented Generation (RAG), where an application searches a knowledge base for passages relevant to a user's question.

Token embeddings inside a language model and document embeddings used for semantic search are related concepts, but they are not interchangeable. They may come from different models and serve different purposes.

## 4. Transformer Architecture

The Transformer architecture is the foundation of many modern LLMs.

It was introduced in the 2017 research paper *Attention Is All You Need*. Its key contribution was the use of attention mechanisms to model relationships between elements in a sequence.

A simplified decoder-only Transformer contains:

```text
Input Tokens
     ↓
Token Embeddings
     ↓
Positional Information
     ↓
Transformer Blocks
     ├── Masked Self-Attention
     ├── Feed-Forward Network
     ├── Residual Connections
     └── Normalization
     ↓
Output Projection
     ↓
Next-Token Probabilities
```

Actual implementations may differ in normalization placement, activation functions, attention variants, and other architectural details.

## 5. Self-Attention: How Tokens Use Context

Self-attention allows a token representation to incorporate information from other tokens in the same sequence.

Consider:

```text
The device stopped working because it overheated.
```

To interpret "it", the model needs to consider the surrounding words. Attention provides a mechanism for relating tokens to one another.

### 5.1 Query, Key, and Value

In a standard attention mechanism, input representations are transformed into three vectors:

- **Query (Q):** Represents what a token is looking for.
- **Key (K):** Represents information that a token can offer for matching.
- **Value (V):** Represents the information contributed when a match receives attention.

Attention scores are calculated by comparing queries with keys.

The scaled dot-product attention formula is:

$$
\operatorname{Attention}(Q,K,V)
=
\operatorname{softmax}
\left(
\frac{QK^T}{\sqrt{d_k}} + M
\right)V
$$

Where:

- \(Q\) is the query matrix.
- \(K\) is the key matrix.
- \(V\) is the value matrix.
- \(d_k\) is the key dimension.
- \(M\) is an optional attention mask.

For causal language modeling, the mask prevents a token from attending to future tokens that should not be visible during next-token prediction.

### 5.2 Multi-Head Attention

Rather than calculating only one attention relationship, Transformer models commonly use multiple attention heads.

Each head can learn different patterns of relationships. Their outputs are combined and projected into a new representation.

A simplified view:

```text
Input Representations
       ↓
 ┌─────┼─────┐
 ↓     ↓     ↓
Head 1 Head 2 Head 3
 ↓     ↓     ↓
 └─────┼─────┘
       ↓
Concatenate
       ↓
Output Projection
```

Modern architectures may use multi-query or grouped-query attention to reduce memory requirements during inference.

### 5.3 Feed-Forward Networks

After attention, Transformer blocks typically apply a feed-forward network to each token position.

This network transforms the token representations through learned linear projections and nonlinear activation functions.

Attention mixes information across token positions. Feed-forward layers transform the resulting representations.

Both are essential components of a Transformer block.

## 6. How LLMs Are Trained

Training is the process through which a model's parameters are adjusted to learn patterns from data.

The exact training pipeline varies by model, but a common high-level process includes pretraining and post-training.

### 6.1 Pretraining

During pretraining, a model learns general language patterns from a large training corpus.

For an autoregressive language model, the objective is commonly to predict the next token.

Given a sequence:

```text
AI applications can improve
```

The model learns to estimate the probability distribution of the next token.

For a sequence of tokens \(x_1, x_2, \ldots, x_T\), the autoregressive objective can be expressed as:

$$
P(x_1,\ldots,x_T)
=
\prod_{t=1}^{T}P(x_t\mid x_1,\ldots,x_{t-1})
$$

Training typically minimizes the negative log-likelihood of the target tokens.

The model adjusts its parameters through gradient-based optimization.

### 6.2 Post-Training

A pretrained model may not automatically behave like a useful assistant.

Post-training can improve its ability to follow instructions, produce structured responses, and handle conversational tasks.

Common approaches include:

- **Supervised Fine-Tuning (SFT):** Training on examples of desired inputs and outputs.
- **Preference Optimization:** Adjusting model behavior based on preferences between candidate responses.
- **Reinforcement Learning Methods:** Using reward signals to optimize selected behaviors.

Different model developers use different combinations of these techniques.

### 6.3 Training vs. Inference

These processes serve different purposes.

| Process | Purpose | What Happens |
|---|---|---|
| Training | Learn model parameters | Parameters are updated using training data |
| Inference | Generate predictions | A trained model processes input and produces output |

When an application calls an LLM API, it is generally performing inference, not training the model.

## 7. How Text Generation Works

Most autoregressive LLMs generate output one token at a time.

The process can be simplified as follows:

```text
Input Prompt
     ↓
Tokenization
     ↓
Model Forward Pass
     ↓
Next-Token Logits
     ↓
Sampling or Selection
     ↓
Selected Token
     ↓
Append to Context
     ↓
Repeat Until Stop Condition
```

The model calculates logits, which are converted into probabilities using a softmax function.

A decoding strategy then selects the next token.

### 7.1 Greedy Decoding

Greedy decoding selects the token with the highest probability at each step.

It is simple and deterministic for a fixed model and input, but may produce repetitive or less diverse outputs.

### 7.2 Temperature

Temperature adjusts the distribution used for token selection.

A lower temperature makes the distribution more concentrated around high-probability tokens. A higher temperature generally produces more varied outputs.

A simplified temperature-scaled probability is:

$$
P_i =
\frac{\exp(z_i/T)}
{\sum_j \exp(z_j/T)}
$$

Where:

- $z_i$ is a token's logit.
- $T$ is the temperature.

Temperature does not make a model more knowledgeable. It changes the randomness of token selection.

### 7.3 Top-p Sampling

Top-p sampling, also known as nucleus sampling, selects from the smallest set of tokens whose cumulative probability reaches a specified threshold.

For example, with a top-p value of 0.9, the candidate set contains tokens accounting for approximately 90% of the probability mass.

Temperature and top-p are decoding controls, not measures of factual accuracy.

### 7.4 Other Generation Controls

| Parameter | Purpose |
|---|---|
| Temperature | Controls sampling randomness |
| Top-p | Limits sampling to a probability mass |
| Max output tokens | Limits generated output length |
| Stop sequences | Stops generation when a specified sequence is reached |
| Frequency penalty | Can reduce repeated token usage |
| Presence penalty | Can encourage introducing new topics |

Not all providers expose the same parameters. Some models may ignore, restrict, or replace particular settings.

## 8. Context Windows and Conversation Memory

An LLM does not automatically remember every previous conversation.

For a stateless API request, the application generally needs to send the relevant conversation history again, unless the provider offers a separate stateful conversation feature.

The context window is the amount of tokenized information a model can process in a request.

It may include:

- System instructions
- Developer instructions
- User messages
- Assistant messages
- Tool definitions and tool results
- Retrieved documents
- The space needed for generated output

A simplified context budget is:

$$
T_{\text{input}} + T_{\text{output}} \leq T_{\text{context}}
$$

The exact accounting rules depend on the model and API.

### 8.1 Managing Long Conversations

Sending the entire conversation history indefinitely is inefficient.

Common strategies include:

- Keeping only the most recent messages.
- Summarizing older conversation history.
- Storing durable user information separately.
- Retrieving relevant past information when needed.
- Limiting retrieved context to the most useful passages.

A practical application may combine recent messages with a summary and selected external knowledge.

## 9. Why LLMs Make Mistakes

LLMs generate probable outputs based on learned patterns. They do not guarantee that every generated statement is true.

Common limitations include:

### 9.1 Hallucinations

A model may generate information that sounds plausible but is unsupported or incorrect.

For example, it may invent a product feature, a citation, or an API parameter.

### 9.2 Knowledge Limitations

A model's built-in knowledge may not include recent events, private documents, or information created after its training data was collected.

### 9.3 Context Limitations

Important details may be omitted, truncated, or overlooked when the context is too long or poorly structured.

### 9.4 Reasoning Errors

Models can make mistakes in calculations, multi-step reasoning, and complex instructions.

For important operations, use deterministic code, validated data sources, and explicit checks rather than relying entirely on generated text.

### 9.5 Prompt Sensitivity

Small changes in wording, context, or formatting can affect model outputs.

This makes prompt and output evaluation an important part of application engineering.

## 10. Practical Engineering Considerations

Understanding model internals helps developers make better application decisions.

### 10.1 Select Models Based on Workload

Do not choose a model based only on its name or advertised size.

Evaluate:

- Task accuracy
- Context capacity
- Output quality
- Latency
- Availability
- Structured-output support
- Tool-calling support
- Input and output pricing
- Data handling and deployment requirements

Use representative test cases before selecting a model for production.

### 10.2 Manage Token Usage

Token usage affects both latency and cost.

Useful techniques include:

- Remove irrelevant prompt content.
- Limit conversation history.
- Retrieve only relevant documents.
- Avoid unnecessarily large output limits.
- Use a smaller model for simpler tasks when quality remains acceptable.
- Measure actual token usage rather than estimating from character counts.

### 10.3 Separate Model Responsibilities from Application Logic

Do not use an LLM for every operation.

Use ordinary code for tasks that require deterministic behavior, such as:

- Arithmetic
- Permission checks
- Input validation
- Database transactions
- Data format conversion
- Business rules

Use the model for tasks where language understanding or generation adds value.

### 10.4 Validate Model Outputs

When an application expects structured data, validate the response against a schema.

Do not assume that a response is valid merely because it looks like JSON.

Use provider-supported structured output where available, and validate the result in application code.

### 10.5 Protect Sensitive Data

Avoid placing API keys, passwords, private customer data, or confidential documents into prompts unless the application has appropriate authorization and data-handling controls.

Review provider retention policies, access permissions, and applicable privacy requirements.

## 11. A Simplified Next-Token Prediction Example

The following example demonstrates the idea of probability-based next-token selection using Python. It is not an implementation of an LLM.

```python
import math

def softmax(logits, temperature=1.0):
    if temperature <= 0:
        raise ValueError("Temperature must be greater than zero.")

    scaled = [value / temperature for value in logits]
    max_value = max(scaled)

    exp_values = [
        math.exp(value - max_value)
        for value in scaled
    ]

    total = sum(exp_values)

    return [value / total for value in exp_values]


tokens = ["Paris", "London", "Berlin"]
logits = [3.2, 1.4, 0.8]

probabilities = softmax(logits, temperature=1.0)

for token, probability in zip(tokens, probabilities):
    print(f"{token}: {probability:.3f}")
```

This example illustrates how logits can be converted into a probability distribution. A real LLM uses a neural network with millions or billions of learned parameters to calculate logits for a vocabulary.

## 12. Key Takeaways

Understanding how LLMs work provides the foundation for designing AI-powered applications.

The essential concepts are:

- LLMs generate text by predicting tokens based on context.
- Tokenization converts text into model-readable token IDs.
- Embeddings represent tokens or text as numerical vectors.
- Transformer attention mechanisms allow tokens to incorporate contextual information.
- Training adjusts model parameters, while inference uses the trained model to generate predictions.
- Decoding parameters influence how outputs are generated.
- Context windows limit how much information a model can process in a request.
- LLM outputs are probabilistic and require application-level validation.

A reliable AI application combines model capabilities with software engineering practices, external data, deterministic logic, testing, and monitoring.

## Further Learning

- [LLM API Integration](./llm-api-integration.md)
- [Prompt Engineering](./prompt-engineering.md)
- [Building RAG Applications](./building-rag-applications.md)
- [AI Agents Fundamentals](./ai-agents-fundamentals.md)
