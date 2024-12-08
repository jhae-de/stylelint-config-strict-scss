import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/no-unused-private-members',
  {
    name: 'Disallow unused private members',
    code: `
      @function _function-1() {}
      @function _function-2() {}
      
      test {
        width: _function-1();
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected usage of private member "-function-2" within the stylesheet'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unused private members',
    code: `
      @mixin _mixin-1 {}
      @mixin mixin-2 {}
      
      test {
        @include mixin-2;
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected usage of private member "-mixin-1" within the stylesheet'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unused private members',
    code: `
      $variable-1: 0;
      $-variable-2: 0;
      
      test {
        width: $variable-1;
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected usage of private member "$-variable-2" within the stylesheet'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unused private members',
    code: `
      %-placeholder-1:hover {}
      test.%placeholder-2 {}
      
      test {
        @extend %placeholder-2;
        width: 0;
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected usage of private member "%-placeholder-1" within the stylesheet'],
      severities: ['error'],
    },
  },
);
