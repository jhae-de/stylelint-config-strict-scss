import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'selector-max-id',
  {
    name: 'Limit the number of ID selectors in a selector',
    code: '#foo #bar {}',
    expect: {
      errored: true,
      messages: ['Too many ID selectors in "#foo #bar", maximum 1'],
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
