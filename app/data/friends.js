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
        photo: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        scores: [2, 4, 3, 5, 1, 2, 5, 2, 2, 3]
    },{
        name: 'Hannah',
        photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        scores: [5, 2, 3, 1, 3, 3, 2, 2, 5, 3]
    },{
        name: 'Zach',
        photo: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500',
        scores: [3, 3, 3, 2, 3, 3, 2, 2, 4, 4]
    },{
        name: 'Antonio',
        photo: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        scores: [5, 3, 2, 2, 3, 3, 4, 1, 4, 5]
    },{
        name: 'Jordyn',
        photo: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
        scores: [5, 1, 1, 1, 2, 3, 1, 2, 3, 2]
    }
];

module.exports = friends;
