
$docsPath = ".\docs"

$articles = @(
    @{
        Path = "technical-writing/overview.md"
        Title = "Technical Writing"
        Description = "Learn the principles, practices, and methods of effective technical writing."
    },
    @{
        Path = "technical-writing/writing-fundamentals.md"
        Title = "Writing Fundamentals"
        Description = "Understand the core principles of clear, accurate, and user-focused technical writing."
    },
    @{
        Path = "technical-writing/user-guides.md"
        Title = "User Guides"
        Description = "Learn how to plan, structure, write, and maintain effective user guides."
    },
    @{
        Path = "technical-writing/clear-technical-documentation.md"
        Title = "How to Write Clear and Effective Technical Documentation"
        Description = "Explore practical techniques for creating clear, consistent, and effective technical documentation."
    },
    @{
        Path = "technical-writing/api-documentation-best-practices.md"
        Title = "API Documentation: Structure and Best Practices"
        Description = "Learn how to structure API documentation and explain endpoints, parameters, responses, and errors."
    },
    @{
        Path = "technical-writing/learn/technical-writing/reviews/overview/overview.md"
        Title = "Documentation Reviews"
        Description = "Learn how to review technical documentation for accuracy, clarity, usability, and consistency."
    },
    @{
        Path = "technical-writing/learn/technical-writing/reviews/overview/review-framework.md"
        Title = "Documentation Review Framework"
        Description = "A practical framework for evaluating the quality and usability of technical documentation."
    },

    @{
        Path = "documentation-engineering/overview.md"
        Title = "Documentation Engineering"
        Description = "Explore the tools, systems, and engineering practices behind modern documentation workflows."
    },
    @{
        Path = "documentation-engineering/docs-as-code.md"
        Title = "Docs-as-Code"
        Description = "Understand how software development practices can improve documentation workflows."
    },
    @{
        Path = "documentation-engineering/what-is-docs-as-code.md"
        Title = "What Is Docs-as-Code?"
        Description = "An introduction to the Docs-as-Code approach, its workflow, tools, and benefits."
    },
    @{
        Path = "documentation-engineering/building-doc-site-with-docusaurus.md"
        Title = "Building a Documentation Site with Docusaurus"
        Description = "Learn how to build, configure, and maintain a documentation website with Docusaurus."
    },
    @{
        Path = "documentation-engineering/automating-doc-builds-github-actions.md"
        Title = "Automating Documentation Builds with GitHub Actions"
        Description = "Learn how to automate documentation builds, validation, and deployment using GitHub Actions."
    },

    @{
        Path = "ai-automation/overview.md"
        Title = "AI & Automation"
        Description = "Explore large language models, AI application development, and automation workflows."
    },
    @{
        Path = "ai-automation/llm/how-large-language-models-work.md"
        Title = "How Large Language Models Work"
        Description = "Understand how LLMs work, including tokens, context windows, training, and inference."
    },
    @{
        Path = "ai-automation/llm/rag-vs-fine-tuning.md"
        Title = "RAG vs. Fine-Tuning: What's the Difference?"
        Description = "Compare RAG and fine-tuning, their architectures, use cases, and limitations."
    },
    @{
        Path = "ai-automation/automation/building-simple-ai-assistant-python.md"
        Title = "Building a Simple AI Assistant with Python"
        Description = "Learn how to build a basic AI assistant using Python and an LLM API."
    },

    @{
        Path = "ai-product-ux/overview.md"
        Title = "AI Product & UX"
        Description = "Explore AI product evaluation, user experience, and user-centered testing methods."
    },
    @{
        Path = "ai-product-ux/evaluating-ai-products-user-perspective.md"
        Title = "How to Evaluate an AI Product from a User's Perspective"
        Description = "Learn how to evaluate AI products through practical user research and hands-on testing."
    },
    @{
        Path = "ai-product-ux/evaluating-ai-chatbots.md"
        Title = "Evaluating AI Chatbots: Accuracy, Usability, and Reliability"
        Description = "Evaluate AI chatbots based on accuracy, usability, consistency, and reliability."
    },

    @{
        Path = "projects-case-studies/overview.md"
        Title = "Projects & Case Studies"
        Description = "Explore practical projects, technical implementations, and lessons learned."
    },
    @{
        Path = "projects-case-studies/modular-user-guide-pdf-exporter.md"
        Title = "Building a Modular User Guide PDF Exporter"
        Description = "A case study on building an automated PDF exporter for modular online user guides."
    },
    @{
        Path = "projects-case-studies/ai-documentation-assistant.md"
        Title = "Building an AI Documentation Assistant"
        Description = "Explore the design and development of an AI assistant for technical documentation."
    },

    @{
        Path = "resources/overview.md"
        Title = "Resources"
        Description = "A collection of useful references, tools, and learning materials."
    },
    @{
        Path = "resources/glossary/overview.md"
        Title = "Glossary"
        Description = "A reference guide to key terms and concepts in technical writing, documentation engineering, and AI."
    }
)

$created = 0
$skipped = 0

foreach ($article in $articles) {

    $fullPath = Join-Path $docsPath $article.Path
    $directory = Split-Path $fullPath

    # Create directory if it does not exist
    if (!(Test-Path $directory)) {
        New-Item -ItemType Directory -Path $directory -Force | Out-Null
    }

    # Preserve existing files
    if (Test-Path $fullPath) {
        Write-Host "Skipped: $($article.Path)" -ForegroundColor Yellow
        $skipped++
        continue
    }

    # Create Markdown starter content
    $content = @"
---
title: "$($article.Title)"
description: "$($article.Description)"
---

## Overview

Introduce the topic and explain its purpose and scope.

## Key Concepts

Explain the essential concepts, terminology, and principles.

## Practical Guidance

Provide practical methods, workflows, examples, or implementation steps.

## Best Practices

Describe recommended practices and common pitfalls.

## Further Reading

- Official documentation
- Related technical resources
"@

    Set-Content -Path $fullPath -Value $content -Encoding UTF8

    Write-Host "Created: $($article.Path)" -ForegroundColor Green
    $created++
}

Write-Host ""
Write-Host "===================================" -ForegroundColor Cyan
Write-Host "Learn structure creation completed!" -ForegroundColor Cyan
Write-Host "Created: $created files" -ForegroundColor Green
Write-Host "Skipped: $skipped existing files" -ForegroundColor Yellow
Write-Host "Total:   $($articles.Count) files" -ForegroundColor Cyan
Write-Host "===================================" -ForegroundColor Cyan
