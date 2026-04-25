const core = require('@actions/core');

const QUOTES = [
  "Wu-Tang is for the children.",
  "Cash rules everything around me — but tests rule the build.",
  "Protect ya neck. Pin your dependencies.",
  "Bring da ruckus — but only to staging.",
  "Triumph: ship it green, ship it clean.",
  "C.R.E.A.M. — Code Reviews Earn All Merges.",
  "Method Man said: lint thoroughly.",
  "Shame on a build that try to run game on a CI.",
  "The pipeline is mighty, but the developer is mightier.",
  "Wu-Tang Clan ain't nothin' to flake with."
];

const BANNER = `
  __        __         _____                  
  \\ \\      / /   _    |_   _|_ _ _ __   __ _  
   \\ \\ /\\ / / | | |_____| |/ _\` | '_ \\ / _\` | 
    \\ V  V /| |_| |_____| | (_| | | | | (_| | 
     \\_/\\_/  \\__,_|     |_|\\__,_|_| |_|\\__, | 
                                       |___/  
       >>> Wu-Tang is for the children <
`;

function pickQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

function isFriday(date = new Date()) {
  return date.getUTCDay() === 5;
}

function buildMessage(style, quote) {
  if (style === 'compact') {
    return `🐝 Wu-Tang is for the children. (${quote})`;
  }
  if (style === 'verse') {
    return `\n  "${quote}"\n     — Wu-Tang is for the children\n`;
  }
  return `${BANNER}\n  "${quote}"\n`;
}

async function run() {
  try {
    const style = core.getInput('style') || 'banner';
    const failOnFriday = core.getInput('fail-on-friday') === 'true';

    const quote = pickQuote();
    const message = buildMessage(style, quote);

    core.info(message);
    core.setOutput('blessing', message);

    if (failOnFriday && isFriday()) {
      core.setFailed("It's Friday. No deploys on Friday. Wu-Tang said so.");
      return;
    }

    core.info('✅ Build blessed. Proceed with honor.');
  } catch (err) {
    core.setFailed(`Wu-Tang blessing failed: ${err.message}`);
  }
}

module.exports = { run, pickQuote, isFriday, buildMessage, QUOTES };

if (require.main === module) {
  run();
}