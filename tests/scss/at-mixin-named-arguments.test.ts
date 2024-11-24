import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { type Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'scss/at-mixin-named-arguments',
  {
    name: 'Disallow unnamed arguments in mixin calls',
    code: `
      test {
        @include animation(250ms, 100ms, infinite);
        @include reset($value: 20, 'bar', $color: #FFFFFF);
      }
    `,
    expect: {
      errored: true,
      messages: new Array(4).fill('Expected a named parameter to be used in at-include call') as string[],
      severities: new Array(4).fill('error') as Severity[],
    },
  },
  {
    name: 'Allow unnamed single argument in mixin calls',
    code: `
      test {
        @include animation(250ms);
        @include animation($duration: 250ms);
        @include animation($duration: 250ms, $delay: 100ms, $direction: infinite);
      }
    `,
  },
);
