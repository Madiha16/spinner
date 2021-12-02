// Example use of \r
//process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spin = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "];
let delay = 50;
for (let elem of spin) {
  setTimeout(() => {
    process.stdout.write(elem);
  }, delay);
  delay += 200;
};