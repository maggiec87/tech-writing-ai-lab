# Writing Fundamentals

Technical writing communicates technical information in a way that helps readers understand concepts, use products, and complete tasks.

Good technical writing is not simply about simplifying language. It requires understanding the subject, identifying the reader's needs, organizing information logically, and presenting it accurately.

This article introduces the fundamental principles and techniques of technical writing.

## 1. Understand the Purpose and Audience

Before writing, identify why the content is needed and who will read it.

### Define the Writing Purpose

Technical content may serve different purposes:

- **Inform:** Explain product features, concepts, or specifications.
- **Instruct:** Guide users through procedures and tasks.
- **Reference:** Provide information users need to look up.
- **Troubleshoot:** Help users identify and resolve problems.
- **Support decisions:** Present technical information for evaluation or comparison.

The purpose determines the content, level of detail, and presentation format.

### Identify the Audience

Consider the reader's technical knowledge, experience, and expectations.

For example:

| Audience | Writing Considerations |
|---|---|
| General users | Use familiar language and provide step-by-step instructions. |
| Business users | Focus on practical functions and common workflows. |
| IT administrators | Include configuration details and technical parameters. |
| Developers | Provide API specifications, code examples, and integration details. |

Avoid assuming that all readers have the same technical background.

## 2. Organize Technical Information

A logical structure helps readers understand information and find what they need.

### Establish an Information Hierarchy

Organize content from general information to specific details.

A typical hierarchy includes:

- Document title
- Main sections
- Subsections
- Individual topics
- Supporting details

Use headings consistently to show relationships between topics.

### Group Related Information

Keep related concepts, instructions, and reference information together.

For example, a network configuration topic may include:

- Configuration purpose
- Required parameters
- Configuration procedure
- Expected result
- Related limitations

Avoid scattering closely related information across unrelated sections.

### Choose an Appropriate Content Format

Different types of information require different presentation formats.

| Content Type | Recommended Format |
|---|---|
| Concepts and explanations | Paragraphs |
| Sequential procedures | Numbered lists |
| Non-sequential items | Bulleted lists |
| Parameter descriptions | Tables |
| Complex relationships | Diagrams |
| Commands and code | Code blocks |

Choose the format that makes the information easiest to understand and use.

## 3. Write Clear and Concise Sentences

Use direct language and straightforward sentence structures.

### Prefer Familiar Words

Choose commonly understood words instead of unnecessarily formal expressions.

| Avoid | Prefer |
|---|---|
| Utilize | Use |
| In the event that | If |
| Prior to | Before |
| Make an adjustment to | Adjust |
| Is capable of supporting | Supports |

Technical terms should remain when they are necessary for accuracy.

### Use Active Voice

Active voice usually makes instructions and explanations more direct.

**Less direct:**

> The settings can be modified by the administrator.

**More direct:**

> The administrator can modify the settings.

For procedural instructions, use imperative verbs when appropriate.

> Connect the Ethernet cable to the WAN port.

Passive voice is acceptable when the actor is unknown or unimportant.

### Avoid Unnecessary Words

Remove redundant expressions and explanations that do not contribute useful information.

**Before:**

> In order to configure the wireless network, users need to navigate to the wireless settings page.

**After:**

> Go to Wireless Settings to configure the network.

Concise writing should preserve essential meaning and technical detail.

## 4. Make Instructions Specific

Instructions should describe actions that readers can understand and perform.

Use precise verbs such as:

- Select
- Enter
- Connect
- Enable
- Disable
- Save
- Restart
- Verify

Avoid vague expressions such as "handle the settings," "make changes," or "check the configuration" when a more specific action is available.

For procedures, consider including:

- The action to perform
- The relevant interface element or component
- Any required value or condition
- The expected result

For example:

> Enter the IP address in the **IP Address** field, then click **Apply** to save the configuration.

## 5. Maintain Technical Accuracy

Technical writing must reflect actual product behavior and verified technical information.

Before publishing content:

- Confirm specifications with authoritative product information.
- Verify configuration procedures against the actual product when possible.
- Check default values, supported features, and limitations.
- Confirm that screenshots and examples match the documented version.
- Resolve unclear or conflicting technical information with subject-matter experts.

Do not present assumptions as confirmed product behavior.

When information is uncertain, clarify it with the responsible team before publication.

## 6. Use Consistent Terminology and Style

Consistency helps readers understand information and reduces ambiguity.

Maintain consistent use of:

- Product and feature names
- Technical terms and abbreviations
- UI labels
- Units and number formats
- Capitalization
- Heading styles
- Notes and warnings

When referring to interface elements, use the exact labels displayed in the product.

For example, if the interface uses **Wireless Settings**, use that label consistently rather than switching between "Wi-Fi Setup" and "WLAN Configuration" without a technical reason.

A documentation style guide and terminology list can help teams maintain consistency across multiple documents.

## 7. Edit and Refine Your Content

Writing is an iterative process. Review the content after the initial draft.

Consider these areas:

| Review Area | Questions |
|---|---|
| Purpose | Does the content address the intended user need? |
| Structure | Is the information organized logically? |
| Language | Are sentences clear and concise? |
| Accuracy | Are technical details verified? |
| Consistency | Are terms and formatting used consistently? |
| Completeness | Is essential information missing? |

Use feedback from technical reviewers and intended readers to improve the content.

## 8. Common Writing Mistakes

| Common Mistake | Why It Is a Problem | Better Practice |
|---|---|---|
| Using vague language | Readers may not know what action to take. | Use specific terms and action verbs. |
| Writing overly long sentences | Important information becomes difficult to follow. | Separate complex ideas into shorter sentences. |
| Mixing multiple topics | Readers may struggle to find relevant information. | Group related content under descriptive headings. |
| Using inconsistent terminology | Different terms may appear to describe different functions. | Follow a shared terminology list. |
| Making unverified assumptions | Content may not match actual product behavior. | Confirm technical details with reliable sources. |
| Including unnecessary details | Readers may lose focus on the main task. | Keep content relevant to its purpose. |

## 9. Key Takeaways

Effective technical writing combines subject knowledge, audience awareness, logical organization, and precise communication.

The fundamental practices are:

- Define the purpose and audience before writing.
- Organize information into a logical structure.
- Use direct, concise, and specific language.
- Make instructions actionable.
- Verify technical information.
- Maintain consistent terminology and style.
- Review and refine content before publication.

These principles apply across different types of technical documentation, including user guides, API documentation, troubleshooting guides, and technical specifications.

## Further Reading

- [Technical Writing Overview](./overview.md)
- [User Guides](../learn/user-guides.md)
- [User Guide Development Workflow](./user-guide-development-workflow.md)
- [Technical Documentation Quality Standards](./technical-documentation-quality-standards.md)

## References

- [Google Developer Documentation Style Guide](https://developers.google.com/style)
- [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/)
- [Write the Docs Guide](https://www.writethedocs.org/guide/)