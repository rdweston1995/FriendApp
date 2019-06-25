//5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

//```json
//{
//  "name":"Ahmed",
//  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//  "scores":[
//      5,
//      1,
//      4,
//      4,
//      5,
//      1,
//      2,
//      5,
//      4,
//      1
//    ]
//}
//```
var friends = [
    {
        name: 'Tommy',
        photo: '',
        scores: [2, 4, 3, 5, 1, 2, 5, 2, 2, 3]
    },{
        name: 'Hannah',
        photo: '',
        scores: [5, 2, 3, 1, 3, 3, 2, 2, 5, 3]
    },{
        name: 'Zach',
        photo: '',
        scores: [3, 3, 3, 2, 3, 3, 2, 2, 4, 4]
    },{
        name: 'Antonio',
        photo: '',
        scores: [5, 3, 2, 2, 3, 3, 4, 1, 4, 5]
    },{
        name: 'Jordyn',
        photo: 'https://imgur.com/r/dogs/wC3u4rM',
        scores: [5, 1, 1, 1, 2, 3, 1, 2, 3, 2]
    }
];

module.exports = friends;
