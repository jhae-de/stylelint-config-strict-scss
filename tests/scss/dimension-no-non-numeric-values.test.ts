import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/dimension-no-non-numeric-values', {
  name: 'Disallow non-numeric values when interpolating a value with a unit',
  code: 'test { padding: #{test}px; }',
  expect: {
    errored: true,
    messages: ['Expected "$value * 1px" instead of "#{$value}px". Consider writing "value" in terms of px originally.'],
    severities: ['error'],
  },
});
