const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question, defaultValue = '') {
  const suffix = defaultValue ? ` (${defaultValue})` : '';
  return new Promise((resolve) => {
    rl.question(`${question}${suffix}: `, (answer) => {
      const value = answer.trim();
      resolve(value || defaultValue);
    });
  });
}

function run(command) {
  execSync(command, { stdio: 'inherit' });
}

async function main() {
  try {
    const whatYouDid = await ask('What did you work on today?');
    const extraContext = await ask('Optional extra details', '');

    let commitMessage = `Update: ${whatYouDid}`;
    if (extraContext) {
      commitMessage = `${commitMessage} - ${extraContext}`;
    }

    const finalMessage = await ask('Commit message', commitMessage);
    const confirmPush = await ask('Add, commit, and push now?', 'yes');

    if (!['yes', 'y'].includes(confirmPush.toLowerCase())) {
      console.log('Cancelled. No changes were pushed.');
      return;
    }

    run('git add .');
    run(`git commit -m "${finalMessage.replace(/"/g, '\\"')}"`);
    run('git push');

    console.log('\nDone. Your changes were committed and pushed to GitHub.');
  } catch (error) {
    console.error('\nPublish failed.');
    if (error && error.message) {
      console.error(error.message);
    }
    process.exitCode = 1;
  } finally {
    rl.close();
  }
}

main();