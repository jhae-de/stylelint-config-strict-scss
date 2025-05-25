# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0) and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [7.0.0] - 2025-05-25

### Changed

- Bumped `@jhae/stylelint-config-standard-scss` from `5.0.0` to `6.0.0`  
  Release notes: [6.0.0](https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v6.0.0)
- Enabled `report*` properties
  - `reportDescriptionlessDisables`
  - `reportInvalidScopeDisables`
  - `reportNeedlessDisables`
  - `reportUnscopedDisables`

### Removed

- `syntax-string-no-invalid` rule  
  This rule is now part of the extended `stylelint-config-recommended` configuration.

## [6.0.0] - 2025-03-30

### Changed

- Bumped `@jhae/stylelint-config-standard-scss` from `4.2.0` to `5.0.0`  
  Release notes: [5.0.0](https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v5.0.0)

## [5.0.0] - 2025-03-02

### Added

- `syntax-string-no-invalid` rule

### Changed

- Bumped `@jhae/stylelint-config-standard-scss` from `4.1.0` to `4.2.0`  
  Release notes: [4.2.0](https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v4.2.0)
- Bumped `stylelint` from `16.13.0` to `16.15.0`  
  Release notes:
  [16.13.1](https://github.com/stylelint/stylelint/releases/tag/16.13.1) |
  [16.13.2](https://github.com/stylelint/stylelint/releases/tag/16.13.2) |
  [16.14.0](https://github.com/stylelint/stylelint/releases/tag/16.14.0) |
  [16.14.1](https://github.com/stylelint/stylelint/releases/tag/16.14.1) |
  [16.15.0](https://github.com/stylelint/stylelint/releases/tag/16.15.0)

## [4.0.0] - 2025-02-23

### Added

- `scss/no-duplicate-load-rules` rule

### Changed

- Bumped `stylelint` from `16.11.0` to `16.13.0`  
  Release notes:
  [16.12.0](https://github.com/stylelint/stylelint/releases/tag/16.12.0) |
  [16.13.0](https://github.com/stylelint/stylelint/releases/tag/16.13.0)
- Bumped `stylelint-scss` from `6.8.0` to `6.11.0`  
  Release notes:
  [6.8.1](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.8.1) |
  [6.9.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.9.0) |
  [6.10.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.10.0) |
  [6.10.1](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.10.1) |
  [6.11.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.11.0)

## [3.1.0] - 2024-12-08

### Changed

- Removed custom messages from
  - `scss/at-mixin-no-risky-nesting-selector` rule
  - `scss/at-root-no-redundant` rule
  - `scss/function-calculation-no-interpolation` rule
  - `scss/no-unused-private-members` rule
- Bumped `@jhae/stylelint-config-standard-scss` from `4.0.0` to `4.1.0`  
  Release notes: [4.1.0](https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v4.1.0)
- Bumped `stylelint` from `16.10.0` to `16.11.0`  
  Release notes: [16.11.0](https://github.com/stylelint/stylelint/releases/tag/16.11.0)

## [3.0.0] - 2024-11-24

### Changed

- Bumped `@jhae/stylelint-config-standard-scss` from `3.2.1` to `4.0.0`  
  Release notes: [4.0.0](https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v4.0.0)

## [2.6.0] - 2024-11-05

### Added

- `scss/function-color-channel` rule

### Changed

- `declaration-property-value-disallowed-list` rule  
  Disallowed value `none` for `outline` property
- Bumped `stylelint` from `16.9.0` to `16.10.0`  
  Release notes: [16.10.0](https://github.com/stylelint/stylelint/releases/tag/16.10.0)
- Bumped `stylelint-scss` from `6.7.0` to `6.8.0`  
  Release notes: [6.8.0](https://github.com/stylelint-scss/stylelint-scss/releases/tag/v6.8.0)

## [2.5.0] - 2024-10-10

### Added

- `declaration-property-value-disallowed-list` rule  
  Disallowed value `none` for `border` properties

## [2.4.0] - 2024-10-09

### Removed

- `scss/dollar-variable-colon-newline-after` rule
- `scss/dollar-variable-colon-space-after` rule

## [2.3.0] - 2024-10-05

### Changed

- Allowed `@import` rule in CSS files

## [2.2.0] - 2024-09-24

### Changed

- Bumped `@jhae/stylelint-config-standard-scss` from `3.1.0` to `3.2.0`  
  Release notes: [3.2.0](https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v3.2.0)

## [2.1.0] - 2024-08-18

### Changed

- Bumped `@jhae/stylelint-config-standard-scss` from `3.0.0` to `3.1.0`  
  Release notes: [3.1.0](https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v3.1.0)

## [2.0.0] - 2024-07-14

### Added

- `selector-no-qualifying-type` rule
- `scss/at-mixin-no-risky-nesting-selector` rule
- `scss/at-root-no-redundant` rule
- `scss/no-unused-private-members` rule
- `scss/selector-no-redundant-nesting-selector` rule

### Changed

- Bumped `@jhae/stylelint-config-standard-scss` from `2.1.0` to `3.0.0`  
  Release notes: [3.0.0](https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v3.0.0)

## [1.1.0] - 2024-06-18

### Changed

- Bumped `@jhae/stylelint-config-standard-scss` from `2.0.0` to `2.1.0`  
  Release notes: [2.0.0](https://github.com/jhae-de/stylelint-config-standard-scss/releases/tag/v2.1.0)

## [1.0.0] - 2023-11-04

Initial release

### Added

- `at-rule-disallowed-list` rule
- `color-hex-length` rule
- `color-named` rule
- `declaration-block-no-duplicate-properties` rule
- `font-weight-notation` rule
- `property-no-unknown` rule
- `rule-empty-line-before` rule
- `selector-max-id` rule
- `scss/at-each-key-value-single-line` rule
- `scss/at-function-named-arguments` rule
- `scss/at-mixin-argumentless-call-parentheses` rule
- `scss/at-mixin-named-arguments` rule
- `scss/block-no-redundant-nesting` rule
- `scss/dimension-no-non-numeric-values` rule
- `scss/dollar-variable-colon-newline-after` rule
- `scss/dollar-variable-colon-space-after` rule
- `scss/function-calculation-no-interpolation` rule
- `scss/property-no-unknown` rule

[Unreleased]: https://github.com/jhae-de/stylelint-config-strict-scss/compare/v7.0.0...main
[7.0.0]: https://github.com/jhae-de/stylelint-config-strict-scss/releases/tag/v7.0.0
[6.0.0]: https://github.com/jhae-de/stylelint-config-strict-scss/releases/tag/v6.0.0
[5.0.0]: https://github.com/jhae-de/stylelint-config-strict-scss/releases/tag/v5.0.0
[4.0.0]: https://github.com/jhae-de/stylelint-config-strict-scss/releases/tag/v4.0.0
[3.1.0]: https://github.com/jhae-de/stylelint-config-strict-scss/releases/tag/v3.1.0
[3.0.0]: https://github.com/jhae-de/stylelint-config-strict-scss/releases/tag/v3.0.0
[2.6.0]: https://github.com/jhae-de/stylelint-config-strict-scss/releases/tag/v2.6.0
[2.5.0]: https://github.com/jhae-de/stylelint-config-strict-scss/releases/tag/v2.5.0
[2.4.0]: https://github.com/jhae-de/stylelint-config-strict-scss/releases/tag/v2.4.0
[2.3.0]: https://github.com/jhae-de/stylelint-config-strict-scss/releases/tag/v2.3.0
[2.2.0]: https://github.com/jhae-de/stylelint-config-strict-scss/releases/tag/v2.2.0
[2.1.0]: https://github.com/jhae-de/stylelint-config-strict-scss/releases/tag/v2.1.0
[2.0.0]: https://github.com/jhae-de/stylelint-config-strict-scss/releases/tag/v2.0.0
[1.1.0]: https://github.com/jhae-de/stylelint-config-strict-scss/releases/tag/v1.1.0
[1.0.0]: https://github.com/jhae-de/stylelint-config-strict-scss/releases/tag/v1.0.0
