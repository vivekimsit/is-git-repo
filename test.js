import path from 'path';
import test from 'ava';

import m from '.';

test('should be true', async t => {
  const target = path.resolve(__dirname, 'fixtures', 'git-repo');
  const isGitRepo = m(target);
  t.is(await isGitRepo, true);
});

test('should be false', async t => {
  const target = path.resolve(__dirname, 'fixtures', 'non-git-repo');
  const isGitRepo = m(target);
  t.is(await isGitRepo, false);
});

test('should default to cwd', async t => {
  const isGitRepo = m();
  t.is(await isGitRepo, true);
});
