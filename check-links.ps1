
$patterns = @(
    "doc-reviews/",
    "projects-case-studies/",
    "../technical-writing/documentation-reviews",
    "../technical-writing/information-architecture",
    "../documentation-engineering/docs-as-code",
    "clear-technical-documentation.md"
)

Get-ChildItem docs, src -Recurse -File |
    Where-Object { $_.Extension -in ".md", ".mdx", ".tsx", ".ts" } |
    Select-String -Pattern $patterns |
    Format-Table Path, LineNumber, Line -AutoSize
