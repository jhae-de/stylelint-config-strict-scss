import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('color-hex-length', {
  name: 'Require long notation for hex colors',
  code: `
    test { color: #fff; }
    test { color: #fffa; }
  `,
  expect: {
    errored: true,
    messages: ['Expected "#fff" to be "#ffffff"', 'Expected "#fffa" to be "#ffffffaa"'],
    severities: ['error', 'error'],
  },
});
