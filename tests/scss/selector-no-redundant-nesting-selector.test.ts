import { RuleTest } from '@jhae/stylelint-rule-tester';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'scss/selector-no-redundant-nesting-selector',
  {
    name: 'Disallow redundant nesting selectors',
    code: `
      test {
        & test {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Unnecessary nesting selector (&)'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow redundant nesting selectors',
    code: `
      test {
        & > test {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Unnecessary nesting selector (&)'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow redundant nesting selectors',
    code: `
      test {
        & test {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Unnecessary nesting selector (&)'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow redundant nesting selectors',
    code: `
      test {
        & + test {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Unnecessary nesting selector (&)'],
      severities: ['error'],
    },
  },
);
