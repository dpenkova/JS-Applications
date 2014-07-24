define(['jquery'], function(){

    'use strict';

    var ui = (function(){

        function createDomElement(tag, id, text) {
            $('<'+ tag +'>', {
                id: id,
                text:text
            }).appendTo(document.body);
        }

        function createDomElementInParent(tag, parent, id, text) {
            $('<'+ tag +'>', {
                id: id,
                text:text
            }).appendTo(parent);
        }

        function addGuess(tag, parent, elClass, obj) {
            var text = obj.userInput + ' rams: ' + obj.rams + ' sheep: ' + obj.sheep;

            $('<'+ tag +'>', {
                class: elClass,
                text:text
//                css: {fontFamily: font, color: color}
            }).appendTo(parent);
        }

        function createScoreList(parent, content) {
            $('<ul>').appendTo(parent);

            for(var i=0; i < content.length; i+=1)
            {
                var text = content[i].user + ' score: ' + content[i].score;
                $('<li>', {
                    text: text
                }).appendTo($('ul'));
            }
        }

        return {
            addDomElement: createDomElement,
            addDomElementInParent: createDomElementInParent,
            addGuess: addGuess,
            addScores: createScoreList
        }

    }());

    return ui;

});
