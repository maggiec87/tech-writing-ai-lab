# Modular User Guide PDF Exporter

**Status: In Progress**

## Problem

Some online product guides are split across modular pages, while users
may need a single, navigable PDF manual.

## Goal

Build a reusable Python tool to export modular online documentation
into structured PDF files.

## Technical Approach

- Inspect the product index page.
- Identify relevant content modules.
- Preserve the original module order.
- Render each module with a browser engine.
- Assemble pages into one PDF.
- Generate contents and bookmarks.
- Add page numbers and document metadata.

## Technology Stack

- Python
- Playwright
- Chromium
- pypdf
- ReportLab

## Validation

Check:

- Content completeness
- Page order
- Links and bookmarks
- Layout consistency
- PDF readability
- Repeatability across product guides

## Future Improvements

- Better error handling
- Cross-platform installation
- Automated regression tests
- Batch processing