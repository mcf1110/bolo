app.directive('activeLink', function($location) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller) {
            var path = attrs.href;
            scope.location = $location;
            scope.$watch('location.path()', function(newPath) {
                if (newPath == "/") {
                    newPath = "/home";
                }
                var reg = new RegExp(path);
                if (reg.test(newPath)) {
                    element.addClass("active");
                }
                else {
                    element.removeClass("active");
                }
            });
        }
    }
});