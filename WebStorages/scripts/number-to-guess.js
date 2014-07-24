define([], function() {


    function getRandomValue(min, max) {
        return (Math.random() * (max - min) + min) | 0;
    }

    function generateNumberToGuess(){
    var gameNumber = [];
    gameNumber.push(getRandomValue(1, 9));
    var i, len;
    len = 3;

    for (i = 0; i < len; i += 1) {
        var rand = getRandomValue(0, 9);

        while (gameNumber.indexOf(rand) >= 0) {
            rand = getRandomValue(0, 9)
        }

        gameNumber.push(rand);
    }
        return gameNumber;
}

    return generateNumberToGuess();

});