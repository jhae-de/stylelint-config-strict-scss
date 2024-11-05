import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe(
  'declaration-property-value-disallowed-list',
  {
    name: 'Disallow value "none" for "border" and "outline" properties',
    code: `
      test {
        border: none;
        border-top: none;
        border-right: none;
        border-bottom: none;
        border-left: none;
        outline: none;
      }
    `,
    expect: {
      errored: true,
      messages: [
        'Unexpected value "none" for property "border"',
        'Unexpected value "none" for property "border-top"',
        'Unexpected value "none" for property "border-right"',
        'Unexpected value "none" for property "border-bottom"',
        'Unexpected value "none" for property "border-left"',
        'Unexpected value "none" for property "outline"',
      ],
      severities: new Array(6).fill('error') as Severity[],
    },
  },
  {
    name: 'Allow value "0 none" for "border" and "outline" properties',
    code: `
      test {
        border: 0 none;
        border-top: 0 none;
        border-right: 0 none;
        border-bottom: 0 none;
        border-left: 0 none;
        outline: 0 none;
      }
    `,
  },
);
