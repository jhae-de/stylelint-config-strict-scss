import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/at-mixin-argumentless-call-parentheses', {
  name: 'Disallow argumentless mixin calls without parentheses',
  code: '@include mixin-name;',
  expect: {
    errored: true,
    messages: ['Expected parentheses in mixin "mixin-name" call'],
    severities: ['error'],
  },
});
