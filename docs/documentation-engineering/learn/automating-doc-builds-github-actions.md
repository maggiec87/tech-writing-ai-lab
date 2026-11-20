# Automate with GitHub Actions

## Introduction

Documentation websites need to be rebuilt and published whenever their source content or configuration changes.

Performing these tasks manually can become inefficient, especially when documentation is updated frequently or maintained by multiple contributors.

GitHub Actions provides a way to automate documentation workflows directly within a GitHub repository.

By defining workflows in YAML files, teams can automatically validate content, build documentation websites, and deploy generated files to hosting platforms.

This article explains how to use GitHub Actions to automate documentation builds and deployments, using Docusaurus and GitHub Pages as an example.

## 1. Why Automate Documentation Builds?

A documentation build process typically involves several steps:

1. Retrieve the latest source files.
2. Install project dependencies.
3. Validate documentation content.
4. Generate the documentation website.
5. Publish the generated files.

When these steps are performed manually, teams may encounter inconsistent build environments, forgotten updates, and unnecessary publishing delays.

Automating the process provides several benefits:

- **Consistency:** Run the same build steps in a controlled environment.
- **Efficiency:** Reduce repetitive manual operations.
- **Early error detection:** Identify build and content issues before publication.
- **Reliable publishing:** Deploy approved changes through a repeatable process.
- **Traceability:** Keep workflow execution records alongside repository changes.

Automation does not replace content reviews. It handles repeatable technical tasks while writers and reviewers remain responsible for content quality and technical accuracy.

## 2. Understand GitHub Actions

GitHub Actions is a CI/CD platform integrated into GitHub.

It allows developers and documentation teams to define automated workflows that run in response to repository events or scheduled triggers.

A workflow is defined in a YAML file stored in:

```text
.github/workflows/
```

For example:

```text
my-docs/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
├── src/
├── static/
├── docusaurus.config.ts
├── sidebars.ts
└── package.json
```

GitHub Actions uses several key concepts.

| Concept | Description |
|---|---|
| Workflow | An automated process defined in a YAML file |
| Event | An action that triggers a workflow |
| Job | A group of steps executed on a runner |
| Runner | A virtual environment that executes workflow jobs |
| Step | An individual task within a job |
| Action | A reusable unit of workflow functionality |
| Artifact | A file or collection of files produced by a workflow |

Understanding these concepts makes it easier to design and troubleshoot automated documentation workflows.

## 3. Understand the Documentation CI/CD Workflow

A typical documentation CI/CD workflow includes validation, building, and deployment.

```text
Source Changes
      |
      v
GitHub Repository
      |
      v
Workflow Triggered
      |
      v
Install Dependencies
      |
      v
Run Content Checks
      |
      v
Build Documentation
      |
      v
Build Successful?
      |
   +--+--+
   |     |
  No    Yes
   |     |
   v     v
 Report  Upload Build
 Failure Artifact
         |
         v
      Deploy
         |
         v
   Documentation Site
```

Each stage has a specific responsibility.

### 3.1 Workflow Trigger

A workflow can run when specific events occur, such as:

- A push to a branch.
- A pull request.
- A manually initiated workflow.
- A scheduled event.

For documentation projects, a common approach is to run validation on pull requests and deploy the website after changes are merged into the main branch.

### 3.2 Dependency Installation

The runner needs the required environment and project dependencies.

For a Docusaurus project, this typically includes:

- A supported Node.js version.
- npm.
- Project dependencies defined in `package.json`.

### 3.3 Documentation Validation

Automated checks can identify issues before the website is built.

Examples include:

- Markdown formatting errors.
- Broken links.
- Spelling and terminology issues.
- Invalid configuration.
- Missing assets.

Not every validation tool is built into Docusaurus. Additional tools may need to be installed and configured.

### 3.4 Documentation Build

The build command generates the production website from the source files.

For Docusaurus:

```bash
npm run build
```

If the build fails, the workflow stops and reports the error.

### 3.5 Deployment

After a successful build, the generated website can be deployed to a hosting platform such as GitHub Pages.

This ensures that the published website reflects the latest successfully built source version.

## 4. Prepare the Docusaurus Project

Before configuring GitHub Actions, make sure the Docusaurus project builds successfully on your local computer.

### 4.1 Verify the Build Command

Open `package.json` and check that the build script exists.

For example:

```json
{
  "scripts": {
    "start": "docusaurus start",
    "build": "docusaurus build",
    "serve": "docusaurus serve",
    "clear": "docusaurus clear"
  }
}
```

The workflow will use the `build` script to generate the production website.

### 4.2 Configure the Production URL

Open `docusaurus.config.ts` and verify the deployment settings.

For a GitHub Pages project website, the configuration may look like this:

```ts
url: 'https://YOUR_USERNAME.github.io',
baseUrl: '/YOUR_REPOSITORY/',
organizationName: 'YOUR_USERNAME',
projectName: 'YOUR_REPOSITORY',
```

Replace the placeholders with your GitHub username and repository name.

For example, if the repository is `my-docs` and the GitHub username is `example`:

```ts
url: 'https://example.github.io',
baseUrl: '/my-docs/',
organizationName: 'example',
projectName: 'my-docs',
```

The `baseUrl` is important because GitHub Pages project websites are usually hosted under a repository-specific path.

An incorrect base URL can cause pages, images, and other assets to return 404 errors after deployment.

### 4.3 Test the Local Production Build

Run:

```bash
npm run build
```

If the build succeeds, Docusaurus generates the production files in the `build/` directory.

Resolve local build errors before introducing the automated workflow. This makes it easier to distinguish project configuration problems from GitHub Actions problems.

## 5. Create a GitHub Actions Workflow

GitHub Actions workflows are stored in the `.github/workflows/` directory.

Create the following file:

```text
.github/workflows/deploy.yml
```

The workflow below builds and deploys a Docusaurus website to GitHub Pages.

### 5.1 Configure the Workflow

```yaml
name: Deploy Documentation

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build documentation
        run: npm run build

      - name: Upload GitHub Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./build

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest
    needs: build

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

This workflow uses GitHub's Pages deployment actions.

Before using it, verify that the selected Node.js version is supported by your Docusaurus version and project dependencies. You can adjust the version if necessary.

### 5.2 Understand the Workflow Configuration

The workflow contains several important sections.

**Workflow name**

```yaml
name: Deploy Documentation
```

Defines the name displayed in the GitHub Actions interface.

**Trigger conditions**

```yaml
on:
  push:
    branches:
      - main

  workflow_dispatch:
```

The workflow runs when:

- Changes are pushed to the `main` branch.
- A user manually starts the workflow.

Other trigger events, such as `pull_request`, can be added when validation should run before changes are merged.

**Permissions**

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

These permissions allow the workflow to:

- Read repository content.
- Upload and deploy GitHub Pages content.
- Request an OIDC identity token for deployment.

Grant only the permissions required by the workflow.

**Concurrency**

```yaml
concurrency:
  group: pages
  cancel-in-progress: true
```

Prevents multiple deployment workflows in the same group from running simultaneously.

A newer workflow can cancel an older in-progress workflow.

**Build job**

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
```

Defines a job named `build` and executes it on an Ubuntu runner.

**Checkout repository**

```yaml
- name: Checkout repository
  uses: actions/checkout@v4
```

Retrieves the repository source files so that the runner can build the website.

**Set up Node.js**

```yaml
- name: Set up Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 22
    cache: npm
```

Installs the specified Node.js version and enables npm dependency caching.

**Install dependencies**

```yaml
- name: Install dependencies
  run: npm ci
```

Installs the exact dependency versions recorded in `package-lock.json`.

`npm ci` is generally preferred in CI environments because it provides a clean and reproducible installation.

**Build documentation**

```yaml
- name: Build documentation
  run: npm run build
```

Executes the Docusaurus production build.

If this command fails, subsequent steps in the job are skipped by default.

**Upload build artifact**

```yaml
- name: Upload GitHub Pages artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: ./build
```

Packages the generated website so that the deployment job can access it.

**Deploy job**

```yaml
deploy:
  needs: build
```

The `needs` property ensures that deployment starts only after the build job succeeds.

The deployment action publishes the uploaded artifact to GitHub Pages.

## 6. Configure GitHub Pages

After creating the workflow, configure the repository to use GitHub Actions for deployment.

Follow these steps:

1. Open the GitHub repository.
2. Select **Settings**.
3. Open **Pages** under the Code and automation section.
4. Find the **Build and deployment** settings.
5. Select **GitHub Actions** as the deployment source.

The workflow can now publish the generated documentation site.

Make sure the repository's Actions settings allow the required workflow permissions and that any organization-level policies permit the deployment actions.

## 7. Run and Monitor the Workflow

After pushing the workflow file to the repository, GitHub Actions can execute it automatically.

### 7.1 Push Changes to GitHub

Commit and push the workflow file:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add documentation deployment workflow"
git push origin main
```

Pushing to `main` triggers the workflow.

### 7.2 Monitor Workflow Execution

Open the repository and select the **Actions** tab.

You can view:

- Workflow runs.
- Job execution status.
- Individual step results.
- Build logs.
- Deployment results.

A successful workflow indicates that the build and deployment jobs completed.

### 7.3 Verify the Published Website

Open the GitHub Pages URL and verify that:

- The homepage loads correctly.
- Documentation pages are accessible.
- Navigation works.
- Images and assets display correctly.
- Internal links use the correct base path.
- The published content matches the latest changes.

A successful deployment should always be followed by a basic website verification.

## 8. Improve the Workflow with Automated Validation

Building the website confirms that Docusaurus can generate the site, but additional checks can improve content quality.

### 8.1 Add Markdown Linting

Markdown linting identifies formatting inconsistencies and common Markdown issues.

For example, install markdownlint-cli2:

```bash
npm install --save-dev markdownlint-cli2
```

Add a script to `package.json`:

```json
{
  "scripts": {
    "lint:md": "markdownlint-cli2 \"docs/**/*.md\""
  }
}
```

Then add a validation step before the build step:

```yaml
- name: Check Markdown
  run: npm run lint:md
```

The workflow will stop if Markdown linting fails.

The linting rules can be customized through a configuration file such as `.markdownlint-cli2.jsonc`.

### 8.2 Validate Links

Broken links reduce documentation usability.

Link checking tools can identify invalid internal references and inaccessible external links.

For example, you can introduce a link-checking tool into the workflow and configure it to scan generated HTML or source Markdown files.

When checking external links, consider network restrictions, rate limits, and websites that intentionally block automated requests.

### 8.3 Validate Documentation on Pull Requests

A useful improvement is to run validation whenever a pull request targets the main branch.

For example:

```yaml
on:
  pull_request:
    branches:
      - main
```

A pull request validation workflow can:

1. Check out the proposed changes.
2. Install dependencies.
3. Run Markdown linting.
4. Build the documentation.
5. Report the result.

This allows contributors to identify problems before their changes are merged.

For production deployment, retain the separate push-to-main workflow or configure deployment conditions so that unapproved pull requests cannot publish the website.

## 9. Separate Validation and Deployment Workflows

As documentation projects grow, it may be useful to separate pull request validation from production deployment.

A practical workflow design is:

| Workflow | Trigger | Main responsibility |
|---|---|---|
| Documentation Validation | Pull request to `main` | Check formatting, links, and build output |
| Documentation Deployment | Push to `main` | Build and publish the website |
| Scheduled Quality Check | Scheduled event | Run periodic content and link checks |

This separation provides clearer responsibilities and reduces the risk of deploying unreviewed content.

It also makes it easier to expand the documentation pipeline as project requirements evolve.

## 10. Common GitHub Actions Issues

Several issues may occur when configuring automated documentation builds.

| Issue | Possible cause | Recommended approach |
|---|---|---|
| `npm ci` fails | Missing or inconsistent lock file | Commit `package-lock.json` and verify dependency consistency |
| Build fails | MDX errors, invalid configuration, or missing dependencies | Review the build logs and fix the first reported error |
| Workflow does not run | Incorrect trigger or workflow file location | Check the YAML file under `.github/workflows/` |
| Permission denied | Insufficient workflow or repository permissions | Review workflow permissions and repository Actions settings |
| Deployment fails | GitHub Pages source or deployment configuration is incorrect | Select GitHub Actions as the Pages source |
| Website returns 404 | Incorrect Docusaurus `baseUrl` | Verify the repository-specific base path |
| Images do not display | Asset paths do not account for the base URL | Check image references and generated paths |
| Old content remains visible | Browser or CDN caching | Refresh the browser and verify the latest deployment |

When troubleshooting, open the failed workflow run and inspect the individual step logs.

The first failed step usually provides the most useful information.

## 11. Best Practices for Documentation CI/CD

A reliable documentation pipeline should be simple, secure, and maintainable.

Recommended practices include:

### 11.1 Use a Lock File

Commit `package-lock.json` and use `npm ci` in the workflow.

This helps ensure consistent dependency installation.

### 11.2 Pin and Maintain Action Versions

Use explicit action versions rather than unpinned references.

Review action release notes and update dependencies regularly. For environments with stricter supply-chain requirements, consider pinning actions to verified commit SHAs.

### 11.3 Apply Least-Privilege Permissions

Grant only the permissions required for each job.

For example, a validation job generally needs repository read access but does not need permission to deploy to GitHub Pages.

### 11.4 Validate Before Deployment

Run content checks and production builds before publishing.

This reduces the likelihood of deploying broken documentation.

### 11.5 Keep Workflows Focused

Separate validation, build, and deployment responsibilities when doing so improves clarity and maintainability.

Avoid unnecessary steps that increase workflow complexity without providing meaningful benefits.

### 11.6 Monitor Workflow Results

Review failed runs, execution times, and deployment status.

Regular monitoring helps identify recurring issues and opportunities to improve the pipeline.

## Conclusion

GitHub Actions makes it possible to automate documentation validation, building, and publishing directly within a GitHub repository.

By combining GitHub Actions with a documentation framework such as Docusaurus, teams can establish a repeatable CI/CD pipeline that reduces manual work and improves publishing reliability.

A well-designed documentation pipeline should validate changes before deployment, use appropriate permissions, and provide clear feedback when something fails.

Automation improves the technical delivery of documentation, while human review remains essential for ensuring that published content is accurate, clear, and useful.

## Related Topics

- [Documentation Engineering Overview](./overview)
- [Docs-as-Code](../../documentation-engineering/learn/docs-as-code.md)
- [Building a Documentation Site with Docusaurus](./building-doc-site-with-docusaurus)
- [Technical Documentation Quality Standards](../../technical-writing/learn/technical-documentation-quality-standards.md)