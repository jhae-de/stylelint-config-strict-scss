import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/at-each-key-value-single-line',
  {
    name: 'Disallow "@each $key in map-keys($map)" with "map-get($map, $key)"',
    code: `
      @each $key in map-keys($map) {
        $value: map-get($map, $key);
      }
    `,
    expect: {
      errored: true,
      messages: ['Use @each $key, $value in $map syntax instead of $value: map-get($map, $key)'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow "@each $key in map.keys($map)" with "map.get($map, $key)"',
    code: `
      @each $key in map.keys($map) {
        $value: map.get($map, $key);
      }
    `,
    expect: {
      errored: true,
      messages: ['Use @each $key, $value in $map syntax instead of $value: map-get($map, $key)'],
      severities: ['error'],
    },
  },
);
