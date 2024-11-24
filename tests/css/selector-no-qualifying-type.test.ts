import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'selector-no-qualifying-type',
  {
    name: 'Allow qualifying an attribute selector by type',
    code: 'input[type="button"] {}',
  },
  {
    name: 'Allow qualifying a class selector by type',
    code: 'div.test {}',
  },
  {
    name: 'Disallow qualifying an id selector by type',
    code: 'div#test {}',
    expect: {
      errored: true,
      messages: ['Unexpected qualifying type selector "div#test"'],
      severities: ['error'],
    },
  },
);
