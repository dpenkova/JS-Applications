define(['number-to-guess', 'ui-functions', 'game', 'local-storage', 'jquery'], function (number, ui, game, storage){

    var engine;

    engine = function () {

        function run() {

            var hiddenNumber,
                userGuesses,
                $btnCheck,
                $input,
                $validationMessage,
                $userName,
                $btnScoreSubmit;

            ui.addDomElement('div', 'game');
            ui.addDomElement('div', 'current-result');
            ui.addDomElementInParent('input', $('#game'), 'user-input');
            ui.addDomElementInParent('button', $('#game'),  'btn-submit', 'Check');
            ui.addDomElementInParent('div', $('#game'),  'validation-message', 'Invalid input! Enter 4 non repeating digits. Leading zero is not allowed.');
            ui.addDomElementInParent('div', $('#game'),  'win-message');
            ui.addDomElementInParent('input', $('#game'), 'user-name');
            ui.addDomElementInParent('button', $('#game'),  'btn-submit-score', 'Submit');
            ui.addDomElementInParent('div', $('#current-result'), 'guess-table', 'Your guesses');
            ui.addDomElement('div', 'high-scores', 'Top 10 scores');


            hiddenNumber = number.join('');
            $input = $('#user-input');
            $validationMessage = $('#validation-message');
            $userName = $('#user-name');
            $btnScoreSubmit = $('#btn-submit-score');

            $validationMessage.hide();
            $('#win-message').hide();
            $('#high-scores').hide();

            $userName.attr("placeholder", "Please enter your name").hide();
            $btnScoreSubmit.hide();

            console.log(number.join(''));

            userGuesses = [];
            $btnCheck = $('#btn-submit');

            function onCheckBtnClick() {
                var userInput = $input.val().replace(/\s/g, "");

                $validationMessage.hide();

                if (!(game.validateInput(userInput))) {
                    $('#validation-message').show();
                }
                else {
                    var result = game.getCurrentResult(hiddenNumber, userInput);
                    userGuesses.push(result);
                    ui.addGuess('div', $('#guess-table'), 'guesses', result);
                    console.log(result);

                    if (result.rams === 4) {
                        var winMessage = 'You won in ' + userGuesses.length + ' turns!';
                        console.log(winMessage);
                        $('#win-message').text(winMessage).show();
                        $btnCheck.hide();
                        $input.hide();
                        $userName.show();
                        $btnScoreSubmit.show();
                    }
                }

                $input.val('');
            }

            function onSubmitBtnClick(){
                var user = $userName.val();
                var score = userGuesses.length;
                storage.addScore(user, score);

                var scoresList = storage.getScore();
                ui.addScores($('#high-scores'), scoresList);
                $('#current-result').hide();
                $('#high-scores').show();
                $userName.hide();
                $btnScoreSubmit.hide();
                ui.addDomElementInParent('div', $('#game'), '', 'Press F5 to try again');

            }

            $btnCheck.on('click', onCheckBtnClick);
            $btnScoreSubmit.on('click', onSubmitBtnClick);

        }

        return{
            run: run
        }

    }();

    return engine;

});
