import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
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
