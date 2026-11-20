# API Documentation

API documentation explains how developers can interact with an API, including available endpoints, request parameters, authentication methods, response formats, and error handling.

Good API documentation helps developers understand an API, integrate it correctly, and troubleshoot issues without unnecessary support.

This guide covers practical principles for designing, writing, and maintaining clear and useful API documentation.

## 1. Understand the API Audience

API documentation is primarily written for developers who need to integrate or interact with a service.

Before writing, identify the intended audience and their technical background.

Consider:

- **Target users:** Frontend developers, backend developers, system integrators, or API consumers.
- **Use cases:** What tasks are developers trying to accomplish?
- **Prerequisites:** What programming knowledge, tools, or account permissions are required?
- **Integration environment:** Which programming languages, platforms, or frameworks are commonly used?

Use this information to determine the appropriate level of technical detail and the examples to include.

## 2. Organize Documentation by Developer Tasks

A clear information architecture helps developers find what they need at different stages of API integration.

A typical API documentation structure includes:

| Section | Purpose |
|---|---|
| Overview | Introduces the API, its capabilities, and common use cases. |
| Getting Started | Guides developers through their first API request. |
| Authentication | Explains how to authenticate API requests. |
| API Reference | Documents endpoints, parameters, and response formats. |
| Guides and Tutorials | Explains common workflows and integration scenarios. |
| Error Handling | Describes error codes and troubleshooting methods. |
| Changelog | Records API updates, changes, and deprecations. |

Organize content around common developer tasks rather than simply following the internal structure of the API implementation.

## 3. Document Each Endpoint Consistently

Every endpoint should follow a consistent structure so developers can quickly locate essential information.

A typical endpoint reference includes:

### Endpoint Information

- **Name:** A descriptive name for the operation.
- **Description:** What the endpoint does and when to use it.
- **HTTP Method:** GET, POST, PUT, PATCH, or DELETE.
- **Endpoint URL:** The complete path or resource URL.
- **Authentication:** Whether authentication is required.

### Request Parameters

Document each parameter with the following information:

| Field | Description |
|---|---|
| Name | Parameter name. |
| Type | Data type, such as string, integer, or boolean. |
| Location | Path, query, header, or request body. |
| Required | Whether the parameter is mandatory. |
| Description | What the parameter controls. |
| Example | A valid sample value. |

Clearly distinguish required and optional parameters. Explain default values, accepted formats, constraints, and valid ranges where applicable.

### Request Body

For endpoints that accept a request body, document:

- Supported content types, such as `application/json`.
- Required and optional fields.
- Data types and validation rules.
- Nested object structures.
- A complete request example.

### Response

Describe the response structure, including:

- HTTP status codes.
- Response content type.
- Field names and data types.
- Field descriptions.
- A representative response example.

Keep examples consistent with the documented parameter definitions and actual API behavior.

## 4. Provide Practical Code Examples

Code examples help developers understand how to make API requests and process responses.

Whenever possible, provide examples that developers can copy, adapt, and run.

Include:

- A complete request URL.
- Required headers.
- Authentication information using placeholders.
- Request parameters or body.
- Expected response.

For example:

**Request**

```bash
curl -X GET "https://api.example.com/v1/devices" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Accept: application/json"
```

**Response**

```json
{
  "devices": [
    {
      "id": "device-001",
      "name": "Office Router",
      "status": "online"
    }
  ]
}
```

Use realistic sample values, but never include real API keys, passwords, personal information, or other sensitive credentials.

For APIs used across multiple development environments, consider providing examples in several programming languages.

## 5. Explain Authentication and Authorization Clearly

Authentication is often one of the first integration challenges developers encounter.

Explain the complete authentication process, including:

- Supported authentication methods, such as API keys, OAuth 2.0, or bearer tokens.
- How to obtain credentials.
- Where credentials should be included in a request.
- Token expiration and renewal.
- Required permissions or scopes.
- Common authentication errors.

For example:

```http
Authorization: Bearer YOUR_API_TOKEN
```

Clearly distinguish authentication (verifying who is making a request) from authorization (determining what the requester is allowed to access).

Include security guidance, such as storing credentials securely and avoiding exposure in client-side code or public repositories.

## 6. Document Errors and Troubleshooting

Error documentation helps developers identify and resolve integration problems.

For each common error, provide:

- HTTP status code.
- Error code, if applicable.
- Error message.
- Possible cause.
- Recommended resolution.

Example:

| HTTP Status | Error | Description | Recommended Action |
|---|---|---|---|
| 400 | Bad Request | The request contains invalid parameters. | Check the request format and parameter values. |
| 401 | Unauthorized | Authentication is missing or invalid. | Verify the API token or authentication credentials. |
| 403 | Forbidden | The requester does not have sufficient permissions. | Check the account permissions and API scopes. |
| 404 | Not Found | The requested resource does not exist. | Verify the endpoint URL and resource ID. |
| 429 | Too Many Requests | The request rate limit has been exceeded. | Reduce the request frequency and retry according to the rate-limit policy. |
| 500 | Internal Server Error | An unexpected server-side error occurred. | Retry later or contact API support if the issue persists. |

Do not rely on status codes alone. Explain API-specific error codes and response fields whenever they are available.

## 7. Use OpenAPI to Improve Consistency

The OpenAPI Specification (OAS) provides a standard, machine-readable format for describing HTTP APIs.

An OpenAPI definition can describe:

- API endpoints and HTTP methods.
- Request parameters and schemas.
- Authentication requirements.
- Request and response formats.
- Response status codes.

A simplified example:

```yaml
openapi: 3.0.3
info:
  title: Device API
  version: 1.0.0

paths:
  /devices:
    get:
      summary: List devices
      responses:
        "200":
          description: A list of devices
```

OpenAPI definitions can be used to generate API references, interactive documentation, and client SDKs.

Using a structured API specification helps reduce inconsistencies between API definitions and published documentation. However, generated documentation should still be reviewed for clarity, completeness, and usability.

## 8. Manage API Versions and Changes

APIs evolve over time. Documentation must accurately reflect the behavior of each supported version.

Establish a clear process for documenting changes, including:

- New endpoints and parameters.
- Modified request or response fields.
- Deprecated operations.
- Breaking changes.
- Migration instructions.

Maintain a changelog that identifies the affected version, the nature of the change, and any required developer action.

When an API version is deprecated, clearly communicate the deprecation date, replacement options, and migration deadline where applicable.

Keep documentation for supported API versions accessible so developers can continue working with existing integrations.

## 9. Validate and Maintain API Documentation

API documentation should be treated as part of the API development lifecycle, not as a one-time publishing task.

Use a combination of automated checks and manual reviews.

**Technical validation**

- Verify that documented endpoints and HTTP methods are correct.
- Validate OpenAPI specifications.
- Test request and response examples.
- Check parameter names, data types, and constraints.
- Confirm authentication and error-handling instructions.

**Content review**

- Check completeness and technical accuracy.
- Use consistent terminology and formatting.
- Ensure examples are easy to understand.
- Verify internal links and navigation.
- Remove outdated or duplicated information.

**Ongoing maintenance**

- Update documentation alongside API changes.
- Include documentation review in release workflows.
- Track reported issues and developer feedback.
- Review deprecated content regularly.

## 10. API Documentation Quality Checklist

Use this checklist before publishing or updating API documentation.

- [ ] The API overview explains its purpose and main capabilities.
- [ ] Getting Started instructions allow developers to make their first request.
- [ ] Authentication requirements and procedures are clear.
- [ ] Every endpoint includes its HTTP method and URL.
- [ ] Parameters include types, locations, and required status.
- [ ] Request and response examples are accurate and complete.
- [ ] HTTP status codes and API-specific errors are documented.
- [ ] Code examples are tested and contain no real credentials.
- [ ] API versions and deprecated operations are clearly identified.
- [ ] OpenAPI definitions are validated, where applicable.
- [ ] Links, navigation, and cross-references work correctly.

## Conclusion

Effective API documentation combines technical accuracy, consistent structure, practical examples, and ongoing maintenance.

By following these practices, documentation teams can make APIs easier to understand, integrate, test, and maintain.

API documentation should evolve alongside the API itself, ensuring that developers always have access to reliable and up-to-date information.

## Related Topics

- [Writing Fundamentals](../learn/writing-fundamentals.md)
- [Technical Documentation Quality Standards](./technical-documentation-quality-standards.md)
- [Docs-as-Code](../../documentation-engineering/learn/docs-as-code.md)