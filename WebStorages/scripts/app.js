(function () {
    'use strict';

    require.config({
        paths: {
            'jquery': 'libs/jquery-2.1.1'
        }
    });

    require(['engine'], function (engine) {
        engine.run();
    });

}());
