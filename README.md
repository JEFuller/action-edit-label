# Action Edit Label

[![actions-workflow-test][actions-workflow-test-badge]][actions-workflow-test]
[![release][release-badge]][release]
[![license][license-badge]][license]

This is a GitHub Action to edit a GitHub Issues label.

## Inputs

|      NAME      |                                           DESCRIPTION                                           |   TYPE   | REQUIRED |                                     DEFAULT                                     |
| -------------- | ----------------------------------------------------------------------------------------------- | -------- | -------- | ------------------------------------------------------------------------------- |
| `github_token` | A GitHub token.                                                                                 | `string` | `false`   | `${{ github.token }}`                                                                           |
| `label`       | The label name to be edited
| `new_name`    | The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup
| `color` | The hexadecimal color code for the label, without the leading #.
| `description` | A short description of the label.

## License

Copyright 2021 The Actions Ecosystem Authors.

Action Add label is released under the [Apache License 2.0](./LICENSE).

<!-- badge links -->

[actions-workflow-test]: https://github.com/actions-ecosystem/action-edit-label/actions?query=workflow%3ATest
[actions-workflow-test-badge]: https://img.shields.io/github/workflow/status/actions-ecosystem/action-edit-label/Test?label=Test&style=for-the-badge&logo=github

[release]: https://github.com/actions-ecosystem/action-edit-label/releases
[release-badge]: https://img.shields.io/github/v/release/actions-ecosystem/action-edit-label?style=for-the-badge&logo=github

[license]: LICENSE
[license-badge]: https://img.shields.io/github/license/actions-ecosystem/action-edit-label?style=for-the-badge
