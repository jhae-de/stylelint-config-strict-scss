import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'selector-max-id',
  {
    name: 'Limit the number of ID selectors in a selector',
    code: '#foo #bar {}',
    expect: {
      errored: true,
      messages: ['Expected "#foo #bar" to have no more than 1 ID selector'],
      severities: ['error'],
    },
  },
  {
    name: 'Limit the number of ID selectors in a selector',
    code: `
      #foo {
        & #bar {}
      }
    `,
  },
);
