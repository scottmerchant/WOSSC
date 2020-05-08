'use strict';

const sportstg = require('sportstg-api');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// export let updateStandings = functions.https.onCall((data:any, context:any) => {
//   admin.database().ref('/standings/womens/sportstgId').once('value').then(function(snapshot:any) {
//     var sportstgId = snapshot.val();

//     sportstg.getLadder(sportstgId, 2)
//     .then((ladder:any) => {
//       console.log(JSON.stringify(ladder));
//         //Each object key is a table heading.
//         //Example:
//         //[{"b": 0, "d": 0, "ff": 0, "fg": 0, "gd": 31, "l": 0, "p": 1, "pos": 1, "pts": 3, "team": "Cool Team", "w": 1},...]
//         return true;
//     })
//     .catch((error:any) => {
//       console.log("Error occured: error");
//       return false;
//     })
//   });
// });
