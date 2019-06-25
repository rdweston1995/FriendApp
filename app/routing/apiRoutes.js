var friends = require('./../data/friends');

// Your `apiRoutes.js` file should contain two routes:
module.exports = function(app){
    // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res){
        // console.log("test");
        res.json(friends);
        //res.sendFile(path.join(__dirname, "/../public/survey.html"));

    });
    // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res){
        console.log(req.body);
        var match = {
            name: '',
            photo: '',
            friendDiff: 51
        };

        var user = req.body;
        var userScores = user.scores;
        var totalDiff;

        for(ele in friends){
            //console.log(friends[ele])
            totalDiff = 0;

            for(var i = 0; i < friends[ele].scores.length; i++){
                //console.log(Math.abs(parseInt(friends[ele].scores[i]) - parseInt(userScores[i])));
                totalDiff += Math.abs(parseInt(friends[ele].scores[i]) - parseInt(userScores[i]));
            }
            // for(index in friends[ele].scores.length){
            //     console.log(friends[ele].scores.length);

            //     console.log(Math.abs(parseInt(friends[ele].scores[index]) - parseInt(userScores[index])));

            //     totalDiff += Math.abs(parseInt(friends[ele].scores[index]) - parseInt(userScores[index]));
            // }

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
