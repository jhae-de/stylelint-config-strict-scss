import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

// This rule is disabled in favor of scss/property-no-unknown, so unknown properties should be allowed.

new ConfigVerifier('index.yaml').verify('property-no-unknown', {
  name: 'Allow unknown properties',
  code: `
    test {
      colr: black;
      my-property: 1;
      -moz-align-self: center;
      -moz-overflow-scrolling: center;
    }
  `,
});
