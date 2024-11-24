import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/at-root-no-redundant',
  {
    name: 'Disallow redundant @at-root rule',
    code: '@at-root test {}',
    expect: {
      errored: true,
      messages: ['Unexpected @at-root rule'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow redundant @at-root rule',
    code: `
      test {
        @at-root .test & {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected @at-root rule'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow redundant @at-root rule',
    code: `
      @keyframes test {
        @at-root from {}
        to {}
      }
    `,
    expect: {
      errored: true,
      messages: ['Unexpected @at-root rule'],
      severities: ['error'],
    },
  },
);
