import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify(
  'scss/no-unused-private-members',
  {
    name: 'Disallow unused private members',
    code: `
      @function _function1() {}
      @function _function2() {}
      
      test {
        width: _function1();
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected usage of private member within the stylesheet'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unused private members',
    code: `
      @mixin _mixin1 {}
      @mixin mixin2 {}
      
      test {
        @include mixin2;
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected usage of private member within the stylesheet'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unused private members',
    code: `
      $variable1: 0;
      $-variable2: 0;
      
      test {
        width: $variable1;
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected usage of private member within the stylesheet'],
      severities: ['error'],
    },
  },
  {
    name: 'Disallow unused private members',
    code: `
      %-placeholder1:hover {}
      test.%placeholder2 {}
      
      test {
        @extend %placeholder2;
        width: 0;
      }
    `,
    expect: {
      errored: true,
      messages: ['Expected usage of private member within the stylesheet'],
      severities: ['error'],
    },
  },
);
