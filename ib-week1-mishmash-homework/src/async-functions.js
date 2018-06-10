function giveItBackLater(value, callback) {
  function loadComplete() {
    callback(value);
  }
  setTimeout(loadComplete, 1000);
}

const promiseToGiveItBackLater = value => {
  return new Promise((resolve, reject) => {
    function loadComplete() {
      if (value === undefined) {
        reject("value is not loaded yet!");
      }
      resolve(value);
    }

    setTimeout(loadComplete, 1000);
  });
};

const addSomePromises = pSomePromise => {
  return new Promise((resolve, reject) => {
    function loadComplete() {
      if (pSomePromise === "bar") {
        reject("bar");
      } else if (pSomePromise === "foo") {
        resolve("foo");
      }
    }
    setTimeout(loadComplete, 100);
  });
};

const outputPromise = addSomePromises("bar")
.then(
  function(result) {
    console.log(result + result);
  },
  function(err) {
    console.log(err + err + err);
  }
);

module.exports = {
  giveItBackLater,
  addSomePromises,
  promiseToGiveItBackLater
};
