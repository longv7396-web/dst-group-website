---
name: pdf-data-extraction
description: Extract factual text, tables, contacts, services, projects, pricing, and provenance from provided PDFs into structured data files. Use when website or document content must be grounded in PDF sources with page-level citations.
---

# PDF Data Extraction

Use structured extraction whenever possible. Track every accepted fact with:

```ts
{
  sourceFile: "name.pdf",
  page: 1,
  confidence: "high" | "medium" | "low"
}
```

Rules:
- Do not infer services, clients, prices, results, dates, or claims that are not visible in a source.
- Put uncertain facts in the audit file instead of the public website.
- For prices, display exact figures only when the PDF clearly states them; otherwise use "Lien he tu van" or equivalent.
- Preserve Vietnamese names and spelling from the source.
- Record extraction gaps and unreadable pages in `DATA_AUDIT.md`.
