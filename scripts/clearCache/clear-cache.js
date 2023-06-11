const fs = require("fs");
const path = require("path");

const myPath = path.resolve(__dirname, "../../node_modules/.cache");
console.log(myPath);
const rmCache = (dir) => {
  fs.rmSync(dir, { recursive: true, force: true });
};
rmCache(myPath);

