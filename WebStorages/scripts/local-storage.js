define([], function(){
'use strict';

    var storage = (function(){

        function addScore(user, score){

            var scoreTable = localStorage.getItem('scores');

            if(!scoreTable){
                scoreTable = [];
            }
            else {
                scoreTable = JSON.parse(scoreTable);
            }

            scoreTable.push({user: user, score: score});
            localStorage.setItem('scores', JSON.stringify(scoreTable));


        }

        function getScore(){
            var scoresArr = [];
            var scoreTable = JSON.parse(localStorage.getItem('scores'));
            var i;

            for (i = 0; i < scoreTable.length; i++) {
                scoresArr[i] = scoreTable[i];
            }
            scoresArr.sort(function (first, second) {
                return first.score - second.score;
            });

            if(scoresArr.length > 10){

                scoresArr = scoresArr.slice(0, 10)
            }

            return scoresArr;
        }


        return {
            addScore: addScore,
            getScore : getScore
        }

    }());

    return storage;
});
