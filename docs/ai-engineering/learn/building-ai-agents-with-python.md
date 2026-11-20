# Building AI Agents with Python

## 1. Introduction

AI agents combine language models with tools and application logic to perform multi-step tasks.

Python is a popular language for building AI agents because it provides libraries for API integration, data processing, automation, and external service communication.

Developers can use Python to build agents that:

- Search for information.
- Read and process files.
- Execute calculations.
- Query databases.
- Call external APIs.
- Automate repetitive tasks.
- Generate reports.

This article demonstrates how to build a basic tool-using AI agent with Python and an LLM API.

The example focuses on the underlying agent execution loop rather than a specific agent framework.

## 2. Understanding the Agent Architecture

A basic AI agent application contains several components:

```text
User Input
    |
    v
Agent Instructions
    |
    v
LLM API
    |
    v
Tool Selection
    |
    v
Python Tool Execution
    |
    v
Tool Result
    |
    v
LLM API
    |
    v
Final Response
```

The LLM decides whether a tool is needed and generates a structured tool request.

Python executes the requested function and returns the result to the model.

The application controls which tools are available and validates the model's requests.

## 3. Preparing the Development Environment

### 3.1 Create a Project

```text
python-ai-agent/
├── tools.py
├── agent.py
├── main.py
├── .env
├── .gitignore
└── requirements.txt
```

### 3.2 Create a Virtual Environment

```bash
python -m venv .venv
```

Activate it on Windows:

```bash
.venv\Scripts\activate
```

Activate it on macOS or Linux:

```bash
source .venv/bin/activate
```

### 3.3 Install Dependencies

```bash
pip install openai python-dotenv
```

Save the dependencies:

```bash
pip freeze > requirements.txt
```

### 3.4 Configure API Access

Create a `.env` file:

```text
LLM_API_KEY=your_api_key
LLM_BASE_URL=https://api.example.com/v1
LLM_MODEL=example-model
```

Use an API provider that supports the required tool-calling interface.

Add `.env` to `.gitignore` to prevent accidental credential exposure.

## 4. Step 1: Define the Agent's Tools

An agent needs tools to interact with external functionality.

For this example, create two simple tools:

- A calculator.
- A function that returns the current date.

Create `tools.py`:

```python
from datetime import date


def calculate(expression: str) -> str:
    """
    Evaluate a basic arithmetic expression.

    This example intentionally supports only
    a restricted set of arithmetic operations.
    """
    import ast
    import operator

    operations = {
        ast.Add: operator.add,
        ast.Sub: operator.sub,
        ast.Mult: operator.mul,
        ast.Div: operator.truediv,
    }

    def evaluate(node):
        if isinstance(node, ast.Expression):
            return evaluate(node.body)

        if isinstance(node, ast.Constant):
            if type(node.value) in (int, float):
                return node.value
            raise ValueError("Only numbers are allowed.")

        if isinstance(node, ast.BinOp):
            operation = operations.get(type(node.op))

            if operation is None:
                raise ValueError("Unsupported operation.")

            return operation(
                evaluate(node.left),
                evaluate(node.right)
            )

        if isinstance(node, ast.UnaryOp):
            if isinstance(node.op, ast.USub):
                return -evaluate(node.operand)

            if isinstance(node.op, ast.UAdd):
                return evaluate(node.operand)

        raise ValueError("Invalid expression.")

    try:
        tree = ast.parse(expression, mode="eval")
        return str(evaluate(tree))

    except Exception as error:
        return f"Calculation error: {error}"


def get_current_date() -> str:
    return date.today().isoformat()
```

The calculator uses Python's AST parser and an explicit operator allowlist rather than evaluating arbitrary Python code.

This is safer than using `eval()` on model-generated input.

## 5. Step 2: Define Tool Schemas

The model needs descriptions of the available tools so that it can decide when to use them.

Create `agent.py`:

```python
TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "calculate",
            "description": "Perform basic arithmetic calculations.",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "An arithmetic expression."
                    }
                },
                "required": ["expression"],
                "additionalProperties": False
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "get_current_date",
            "description": "Get the current system date.",
            "parameters": {
                "type": "object",
                "properties": {},
                "additionalProperties": False
            }
        }
    }
]
```

A tool schema defines:

- Tool name.
- Tool description.
- Input parameter names.
- Parameter types.
- Required fields.
- Additional input restrictions.

The schema helps the model produce structured tool requests.

It does not replace application-side validation.

## 6. Step 3: Initialize the LLM Client

In `agent.py`, add:

```python
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("LLM_API_KEY"),
    base_url=os.getenv("LLM_BASE_URL")
)

MODEL = os.getenv("LLM_MODEL")
```

This example uses an OpenAI-compatible API interface. Check the selected provider's documentation for supported tool-calling features and request formats.

## 7. Step 4: Implement Tool Execution

The application needs to map model-requested tool names to actual Python functions.

Add the following code to `agent.py`:

```python
import json
from tools import calculate, get_current_date


AVAILABLE_TOOLS = {
    "calculate": calculate,
    "get_current_date": get_current_date
}


def execute_tool(tool_call):
    tool_name = tool_call.function.name

    if tool_name not in AVAILABLE_TOOLS:
        raise ValueError("Tool is not available.")

    arguments = json.loads(tool_call.function.arguments)

    if tool_name == "calculate":
        if set(arguments) != {"expression"}:
            raise ValueError("Invalid calculator arguments.")

    elif tool_name == "get_current_date":
        if arguments:
            raise ValueError("This tool accepts no arguments.")

    result = AVAILABLE_TOOLS[tool_name](**arguments)

    return str(result)
```

The application executes only functions explicitly included in the allowlist.

For more complex applications, validate arguments with Pydantic or another schema validation library.

## 8. Step 5: Build the Agent Execution Loop

The execution loop connects the LLM with Python tools.

Add the following code to `agent.py`:

```python
import json

SYSTEM_PROMPT = """
You are a helpful AI assistant.

You can use the available tools to:
- Perform basic arithmetic.
- Retrieve the current date.

Use tools when they are needed.
Do not invent tool results.
Explain the result clearly.
"""


def run_agent(user_input, max_steps=5):
    messages = [
        {
            "role": "system",
            "content": SYSTEM_PROMPT
        },
        {
            "role": "user",
            "content": user_input
        }
    ]

    for _ in range(max_steps):
        response = client.chat.completions.create(
            model=MODEL,
            messages=messages,
            tools=TOOLS,
            tool_choice="auto"
        )

        message = response.choices[0].message

        messages.append(message.model_dump(exclude_none=True))

        if not message.tool_calls:
            return message.content or ""

        for tool_call in message.tool_calls:
            try:
                result = execute_tool(tool_call)

            except Exception as error:
                result = f"Tool execution failed: {error}"

            messages.append({
                "role": "tool",
                "tool_call_id": tool_call.id,
                "content": result
            })

    return "The task could not be completed within the execution limit."
```

This loop performs the following operations:

1. Sends the user request to the model.
2. Checks whether the model requested a tool.
3. Executes the requested tool.
4. Returns the tool result to the model.
5. Continues until the model provides a final response or the step limit is reached.

The exact message serialization and tool-calling format should be verified against the selected SDK and provider.

## 9. Step 6: Create the Application Entry Point

Create `main.py`:

```python
from agent import run_agent


def main():
    print("Python AI Agent")
    print("Type 'exit' to quit.")

    while True:
        user_input = input("\nYou: ").strip()

        if user_input.lower() == "exit":
            break

        if not user_input:
            continue

        try:
            answer = run_agent(user_input)
            print("\nAgent:", answer)

        except Exception as error:
            print(f"\nError: {error}")


if __name__ == "__main__":
    main()
```

Run the application:

```bash
python main.py
```

Example questions:

```text
What is 125 multiplied by 8?

What is today's date?

Calculate 450 divided by 15, then explain the result.
```

The model can decide when to call the calculator or date tool.

## 10. Understanding the Execution Flow

Consider the question:

"Calculate 450 divided by 15 and explain the result."

The process may look like this:

```text
User Request
     |
     v
LLM Interprets Task
     |
     v
Requests calculate("450 / 15")
     |
     v
Python Executes Calculator
     |
     v
Returns "30.0"
     |
     v
LLM Interprets Tool Result
     |
     v
Generates Explanation
     |
     v
Final Response
```

The LLM does not need to perform the calculation itself. It can delegate the operation to a deterministic Python function.

This combination of language understanding and conventional software functions is a fundamental pattern in agent development.

## 11. Adding More Tools

Once the basic agent works, additional tools can be introduced.

Examples include:

| Tool | Function |
|---|---|
| Web Search | Search for external information |
| File Reader | Read approved local documents |
| Database Query | Retrieve structured information |
| Weather API | Retrieve current weather |
| Email Service | Draft or send authorized emails |
| Knowledge Search | Retrieve relevant documentation |

Each tool should have a clearly defined purpose and limited permissions.

For example, a document search tool should retrieve only documents the current user is authorized to access.

## 12. Improving the Agent

A basic tool-using agent can be extended with additional capabilities.

### 12.1 Conversation Memory

Store conversation history so the agent can handle follow-up questions.

### 12.2 RAG Integration

Connect a document retrieval system so the agent can answer questions using external knowledge.

### 12.3 Structured Output

Use validated schemas to return predictable results to other application components.

### 12.4 Logging and Tracing

Record model requests, tool calls, execution results, errors, and task duration.

### 12.5 Human Approval

Require user confirmation before executing sensitive actions such as sending emails, modifying records, or changing system settings.

## 13. Security and Reliability

An agent can perform actions through tools, so security must be enforced by the application.

Important safeguards include:

- Use an explicit tool allowlist.
- Validate every tool argument.
- Restrict file and network access.
- Apply timeouts and execution limits.
- Protect API credentials.
- Separate user data and sessions.
- Treat external content as untrusted.
- Require confirmation for high-impact operations.
- Record important actions for auditing.

Never allow an LLM to execute arbitrary model-generated Python code in an unrestricted environment.

## 14. When to Use an Agent Framework

A custom Python implementation is useful for understanding agent fundamentals and building small applications.

For more complex systems, frameworks can provide additional capabilities.

| Requirement | Possible Tool |
|---|---|
| Simple tool calling | Python and an LLM SDK |
| Complex stateful workflows | LangGraph |
| Retrieval and document integration | LlamaIndex or LangChain |
| Multi-agent coordination | An agent framework with collaboration support |
| Production monitoring | Tracing and observability platforms |

Frameworks should be introduced when they solve a concrete engineering problem rather than simply adding abstraction.

## 15. Conclusion

Python provides a flexible foundation for building AI agents by connecting language models with application functions and external services.

A basic agent can be implemented with an LLM API, tool definitions, Python functions, and an execution loop.

The example in this article demonstrates how an agent interprets a request, selects a tool, executes an operation, and uses the result to generate a response.

As applications become more complex, developers can add retrieval, memory, structured workflows, monitoring, and human approval.

The key is to keep agent behavior controlled, observable, and aligned with the task requirements.