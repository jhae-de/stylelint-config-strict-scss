import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'color-named',
  {
    name: 'Disallow named colors',
    code: 'test { color: black; }',
    expect: {
      errored: true,
      messages: ['Unexpected named color "black"'],
      severities: ['error'],
    },
  },
  {
    name: 'Allow named colors inside functions',
    code: `
      test {
        background-image: url(black);
        color: map.get($color, white);
      }
    `,
  },
);
