import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'at-rule-disallowed-list',
  {
    name: 'Disallow @debug rule',
    code: '@debug "Debug";',
    expect: {
      errored: true,
      messages: ['Unexpected at-rule "debug"'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow @import rule',
    code: '@import "test.css";',
    expect: {
      errored: true,
      messages: ['Unexpected at-rule "import"'],
      severities: ['error'],
    },
  },
  {
    name: 'Allow @import rule in CSS files',
    file: './tests/.resources/at-rule-disallowed-list.css',
  },
);
