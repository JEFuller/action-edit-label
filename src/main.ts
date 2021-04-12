import * as core from '@actions/core';
import * as github from '@actions/github';

async function run(): Promise<void> {
  try {
    const githubToken = core.getInput('github_token', { required: true });

    const [owner, repo] = core.getInput('repo').split('/');

    const name = core.getInput('name') 
    const newName = core.getInput('new_name') 
    const color = core.getInput('color') 
    const description = core.getInput('description') 

    const update = {
      name, owner, repo,
      ...newName && { 'new_name': newName },
      ...color && { color },
      ...description && { description }
    }

    const client = github.getOctokit(githubToken);
    await client.issues.updateLabel(update);
  } catch (e) {
    core.error(e);
    core.setFailed(e.message);
  }
}

run();
