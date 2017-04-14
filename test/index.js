import path from 'path';
import test from 'ava';
import stylelint from 'stylelint';


const config = {
  extends: [
    path.join(__dirname, '../'),
  ],
};

const code = `
/* TODO */

.test {
  content: 'test';
}
`;

test('should not results errors nor warnings', async t => {
  const data = await stylelint.lint({
    code,
    config,
  });

  const { errored, results } = data;
  const { warnings } = results[0];

  t.falsy(errored, 'no errors');
  t.is(warnings.length, 0, 'no warnings');
});
