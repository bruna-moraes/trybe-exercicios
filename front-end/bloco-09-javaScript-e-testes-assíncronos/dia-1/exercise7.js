const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

uppercase('euller', console.log);

module.exports = uppercase;