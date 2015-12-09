// app.directive('backgroundImage', function(){
//     return function(scope, element, attrs){
//         var url = attrs.backgroundImage;
//         element.css({
//             'background-image': 'url(' + url +')',
//             'background-size' : 'cover'
//         });
//     };
// });​


var app = angular.module('yoTestApp',[]);
app.controller('mainCtrl', function($scope){
});


app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});
