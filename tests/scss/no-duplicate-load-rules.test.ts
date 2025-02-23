import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/no-duplicate-load-rules',
  {
    name: 'Disallow duplicate @import rules',
    code: `
      @import "test.css";
      @import "test.css";
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate load rule test.css'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate @use rules',
    code: `
      @use "test.scss";
      @use "test.scss";
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate load rule test.scss'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow duplicate @forward rules',
    code: `
      @forward "test.scss";
      @forward "test.scss";
    `,
    expect: {
      errored: true,
      messages: ['Unexpected duplicate load rule test.scss'],
      severities: ['error'],
    },
  },
);
