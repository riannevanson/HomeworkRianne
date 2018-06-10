function giveItBackLater(value, callback){
//    function loadComplete() {
//   callback(values[value])
//   setTimeout(loadComplete, 1000)
}
//
//
//
function promiseToGiveItBackLater(value){}
//
//
//
//
function addSomePromises(somepromis){}
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
//
// const documents = {
//     1: {content: "I am a document", authorId: 1},
//     2: {content: "I am also a document", authorId: 2},
//     3: {content: "You guessed it!", authorId: 2}
// }
// const authors = {
//     1: {name: "Adam"},
//     2: {name: "Dave"}
// }
//
// function getDocument(documentId, callback) {
//     function loadComplete() {
//         callback(documents[documentId])
//     }
//     setTimeout(loadComplete, 100)
// }
//
// function getAuthor(authorId, callback) {
//     function loadComplete() {
//         callback(authors[authorId])
//     }
//     setTimeout(loadComplete, 100)
// }
//
// getDocument (2, function (pDocument) {
//   console.log('hooo');
// });

// const promiseToGiveItBackLater = value => {
//   return new Promise((resolve, reject) => {
//     function loadComplete() {
//       if (values[value] === "bar") {
//         reject(values[value] + values[values] + values[values]);
//       }
//       resolve(values[value] + values[values]);
//     }
//
//     setTimeout(loadComplete, 1000);
//   });
// };
//
// promiseToGiveItBackLater("bar");
//
// .then(value => console.log('foo'))
// .catch(error => console.log(error))

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }
