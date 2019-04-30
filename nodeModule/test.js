const sortByKeys = require('./index');
const json = require('./test.json');

const tempJsonData = '[{ "favoriteColor": "Turquoise" },{ "age": 22},{ "petName" : "Porkbelly"},{ "email": "ice@spamcapture.com"},{ "fullName": "Corey Johnson"},{ "username": "IceFlash"},{ "petType": "Dog"},{ "booleanFan": false}]';


//test with inline json
console.log(sortByKeys(tempJsonData));

//test with json from file
console.log(sortByKeys(json));

//descending sort option
console.log(sortByKeys(json, {sort: 'desc'}));