import { RuleTest } from '@jhae/stylelint-rule-tester';
import { type Severity } from 'stylelint';

RuleTest.setConfigFile('index.yaml');

RuleTest.describe('declaration-property-value-disallowed-list', {
  name: 'Disallow value "none" for "border" properties',
  code: `
    test {
      border: none;
      border-top: none;
      border-right: none;
      border-bottom: none;
      border-left: none;
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
    ],
    severities: new Array(5).fill('error') as Severity[],
  },
});
