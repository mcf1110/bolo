app.service("Bolos", function($http) {
    return {
        get: function() {
            return $http({
                url: 'api/bolos.json',
                method: "GET"
            }).then(function(req){
                return req.data;
            }, console.log);
        }
    }
});
