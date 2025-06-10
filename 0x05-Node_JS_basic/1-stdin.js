process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
});

// Detect when the user ends the program (e.g., with Ctrl+D or echo piping)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
