import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/block-no-redundant-nesting',
  {
    name: 'Disallow nesting a single block if it could be merged with its parent block',
    code: `
      .foo {
        .bar {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected nesting for single child block'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow nesting a single block if it could be merged with its parent block',
    code: `
      .foo {
        &-bar {
          &-baz {
            color: black;
          }
        }
      }
    `,
    expect: {
      errored: true,
      messages: new Array(2).fill('Unexpected nesting for single child block') as string[],
      severities: new Array(2).fill('error') as Severity[],
    },
  },
);
