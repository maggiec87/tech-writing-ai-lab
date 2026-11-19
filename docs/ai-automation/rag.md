# Retrieval-Augmented Generation (RAG)

RAG combines information retrieval with language-model generation.

Relevant source content is retrieved and supplied as context so the
model can produce a more grounded response.

## Typical Pipeline

1. Collect and parse source documents.
2. Split content into chunks.
3. Generate embeddings.
4. Store embeddings in a vector database.
5. Retrieve relevant chunks for a query.
6. Generate an answer using retrieved context.
7. Evaluate relevance, correctness, and citations.

## Key Challenges

- Chunking strategy
- Retrieval relevance
- Context quality
- Hallucination control
- Source attribution
- Evaluation