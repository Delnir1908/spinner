const spinningSequence = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

for (let i = 0; i < spinningSequence.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinningSequence[i]);
  }, i * 100);
}
