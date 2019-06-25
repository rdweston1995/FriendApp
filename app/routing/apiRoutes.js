var friends = require('./../data/friends');

console.log(friends);
// Your `apiRoutes.js` file should contain two routes:
module.exports = function(app){
    // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res){
        console.log("test");
        res.json(friends);
    });
    // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res){
        var match = {
            name: '',
            photo: '',
            friendDiff: 51
        };

        var user = req.body;
        var userScoes = user.scores;

        for(ele in friends){
            var totalDiff = 0;

            for(index in friends[ele].scores.length){
                totalDiff += Math.abs(parseInt(friends[ele].scores[index]) - parseInt(userScores[index]));
            }

            if(totalDiff <= match.friendDiff){
                match.name = friends[ele].name;
                match.photo = friends[ele].photo;
                match.friendDiff = totalDiff;
            }
        }

        friends.push(user);

        res.json(match);

    });
}
