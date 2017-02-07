app.service("Sabores", function($http) {
    return {
        get: function() {
            return $http({
                url: 'api/sabores.json',
                method: "GET"
            }).then(function(req){
                return req.data;
            }, console.log);
        }
    }
});
