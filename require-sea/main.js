/**
 * Created by zhaoyi on 2015/12/12.
 */

requirejs.config({
    paths: {
        jquery: 'jquery.1.11.3.min'
    }
});

requirejs(['jquery'],function($){
    $('body').css('background-color','red');
});
