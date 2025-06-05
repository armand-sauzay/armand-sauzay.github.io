---
title: "Enhance Your CI Workflow with Pre-Commit Checks"
date: 2022-06-07
description: "Eliminate unclear commits and inconsistent formatting by integrating pre-commit checks into your workflow."
tags: ["CI/CD"]
---

We've all encountered commit messages like `test`, `modif`, or `reran notebook`. These vague messages make navigating the commit history unnecessarily challenging. Additionally, inconsistent file formatting can cause friction in collaborative environments, leading to wasted time resolving trivial issues after commits.

Fortunately, you can proactively address these problems with **pre-commit checks**, ensuring both commit messages and file formats are correct **before** they reach your repository.

## What are Pre-Commit Checks?

**Pre-commit checks** are automated scripts executed right before you commit code. They enforce predefined standards, such as file formatting rules (e.g., Python’s Black formatter) and structured commit messages (like Conventional Commits). By catching issues early, pre-commit checks help maintain a clean, readable, and consistent codebase.

Key benefits include:
- **Clear and informative** commit history
- **Uniform** formatting across all files
- **Reduced time** spent troubleshooting trivial issues

Let’s walk through setting up pre-commit checks in your GitHub repository.

## Setting Up Pre-Commit Checks

### Step 1: Install Pre-Commit

If you're using Homebrew on macOS, run:

```bash
brew install pre-commit
```

For other operating systems, check the [official installation guide](https://pre-commit.com/#installation).

### Step 2: Configure Your Repository

Create two essential files at the root of your repository:

* `.pre-commit-config.yaml`: Specifies the checks to run.
* `.commitlintrc.yaml`: Configures commit message formatting rules.


```yaml
#.commitlintrc.yaml
extends:
  - "@commitlint/config-conventional"
```


```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.6.0
    hooks:
      - id: check-yaml
      - id: end-of-file-fixer
      - id: trailing-whitespace

  - repo: https://github.com/alessandrojcm/commitlint-pre-commit-hook
    rev: v9.4.2
    hooks:
      - id: commitlint
        stages: [commit-msg]
        additional_dependencies: ["@commitlint/config-conventional"]
```

### Step 3: Run the checks

Now, when you commit code, these checks will automatically run, ensuring that:

* YAML files are correctly formatted.
* Files end with a newline (necessary for some systems).
* No trailing whitespace remains.
* Commit messages adhere to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Try it out with a sample commit:

```bash
git add .pre-commit-config.yaml .commitlintrc.yaml
git commit -m "feat: enable pre-commit checks for formatting and commit messages"
```

## Appendix

### Conventional Commits Format

The Conventional Commits specification ensures clear commit messaging. The structure is as follows:

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Example:

```text
feat(config): allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file now extends other config files
```

### Adding Python Formatting with Black

To integrate Python’s Black formatter, append the following to your `.pre-commit-config.yaml` file:

```yaml
- repo: https://github.com/psf/black
  rev: 21.12b0
  hooks:
    - id: black
```

---


---
title: "Pre-commit Checks to Format Your Files and Commit Messages"
date: 2022-06-07
draft: false
description: "Stop committing wrongly formatted code and start using pre-commit checks."
tags: ["CI/CD", "pre-commit"]
---

Effective commit messages and consistent file formatting greatly enhance collaboration and productivity in software projects. Instead of struggling with unclear commit messages like `test`, `modif`, or `reran notebook`, or wasting time fixing formatting issues post-commit, you can proactively ensure clarity and consistency before any code gets committed.

This is where pre-commit checks come into play. These checks automatically enforce formatting standards (such as Python's Black formatter) and commit message conventions (like Conventional Commits) at the time of committing. By catching issues early, they help prevent vague commit messages and formatting inconsistencies.

In essence, pre-commit checks streamline your development workflow, reducing unnecessary follow-up commits and improving the readability and maintainability of your project's history.

Let's explore how you can easily implement these valuable practices in your GitHub repository. (If you're unfamiliar with Conventional Commits, refer to the appendix first, then return here.)

## Get started with pre-commit checks
### Step 1: Install pre-commit
To install pre-commit, simply run
``` bash
brew install pre-commit
```
This will install pre-commit on your machine.

### Step 2: Add pre-commit checks to your repo

To be able to add pre-commit checks that make sure your files and commit messages are correctly formatted, you simply need to add __2 files__ at the root of your repo:
- __.pre-commit-config.yaml__: defines the checks you want to run
- __.commitlintrc.yaml__: defines the npm package you use for pre commits.

``` yaml
# .commitlintrc.yaml
extends:
  - "@commitlint/config-conventional"
```


``` yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v2.3.0
    hooks:
    -   id: check-yaml
    -   id: end-of-file-fixer
    -   id: trailing-whitespace
  - repo: https://github.com/alessandrojcm/commitlint-pre-commit-hook
    rev: v8.0.0
    hooks:
      - id: commitlint
        stages: [commit-msg]
        additional_dependencies: ["@commitlint/config-conventional"]
```

Once you added those files, you can try adding a commit, the pre commit checks defined will make sure that:
- yaml files are correctly formatted
- files have an extra empty line at the end (this is considered best practice as some systems fail when this condition is not met)
- get rid of trailing whitespaces
- make sure that the commits follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) format.

To see if this worked, try to commit those files to your repo with some commit message like
git commit -m 'feat: enabled pre-commit checks'


## Apendix

__Appendix 1__: A word on Conventional Commits
With conventional commits, the commit message should be structured as follows:
```
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
```
For example (from commit conventional docs):
```
feat: allow provided config object to extend other configs
BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

__Appendix 2__: adding a python code formatter to pre-commit checks. If you want to add a python code formatter, like black, you can append to the end of .pre-commit-config.yaml
``` yaml
- repo: https://github.com/psf/black
    rev: 21.12b0
    hooks:
    - id: black
```
