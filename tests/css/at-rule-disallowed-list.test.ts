import { ConfigVerifier } from '@jhae/stylelint-config-verifier';
import { Severity } from 'stylelint';

new ConfigVerifier('index.yaml').verify(
  'at-rule-disallowed-list',
  {
    name: 'Disallow @import and @debug rules in SCSS files',
    file: './tests/.resources/at-rule-disallowed-list.scss',
    expect: {
      errored: true,
      messages: ['Unexpected at-rule "@import"', 'Unexpected at-rule "@debug"'],
      severities: new Array(2).fill('error') as Severity[],
    },
  },
  {
    name: 'Allow @import rule in all other files',
    code: '@import "test.css";',
  },
);
