const fs = require("fs");

function writeJSONFile(filename, content) {
  console.log(filename, content);
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`changes saved to file ${filename}....`);
}

const createNewId = input => {
  if (input.length > 0) {
    return input.length;
  } else {
    return 1;
  }
};

module.exports = {
  writeJSONFile,
  createNewId
};
