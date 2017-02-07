app.service("Cart", function($http, $rootScope) {
    var cart= {
        ar: [],
        get: function() {
            return this.ar;
        },
        fetch: function(){
            this.update();
            return this.get();
        },
        update: function(){
            var cart = localStorage.getItem('cart');
            if (cart){
                this.ar =  JSON.parse(cart);
            }
        },
        set: function(){
            var json = angular.toJson(this.ar);
            localStorage.setItem('cart', json);
            $rootScope.$broadcast('cartChange');
        },
        add: function(item){
            this.ar.push(item);
            this.set();
        },
        remove: function(index){
            this.ar.splice(index, 1);
            this.set();
        },
        clear: function(){
            this.ar = [];
            this.set()
        }
    };
    cart.fetch();
    return cart;
});
