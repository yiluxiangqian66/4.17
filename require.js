var fs = require('fs');

function requires(arr, fun) {
    //导入模块
    for (var i = 0; i < arr.length; i++) {
        fs.readFileSync(arr[i])
    }
    setTimeout(fun, 10)
        // fun();
}

function define(arr2, fun) {
    //定义一个模块
    for (var i = 0; i < arr2.length; i++) {
        fs.readFile(arr2[i]);
    }
    setTimeout(fun, 10)
}
define(['./src/js/jQuery.js'], function() {
    $('body').html('12345');
})