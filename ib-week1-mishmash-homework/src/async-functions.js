// function giveItBackLater(value, callback
//    function loadComplete() {
//   callback(values[value])
//   setTimeout(loadComplete, 1000)
// }
//
//
//
// function promiseToGiveItBackLater(value){}
//
//
//
//
// const outputPromis = addSomePromises(somepromis){}
//

// 1. When the code `const outputPromise = addSomePromises(somePromise)` is executed,
// your function should return a new promise that has
// both a fulfillment handler and a rejection handler.
//
//
// - When `somePromise` resolves with a string `"foo"`,
// the `outputPromise` should resolve with a string `"foofoo"`.
//     - When `somePromise` is rejected with the value `"bar"`,
//     the `outputPromise`  should resolve with `"barbarbar"`.


    const promiseToGiveItBackLater = (value) => {
      return new Promise((resolve, reject) => {
        function loadComplete() {
          if ('it is not foo') {
            reject(values[value] + values[values] + values[values])
          }
          resolve(values[value] + values[values])

          }


        setTimeout(loadComplete, 1000)
      })
    }

    promiseToGiveItBackLater('bar')












//module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }
