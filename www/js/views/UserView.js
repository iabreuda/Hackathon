var UserView = function (service) {

    this.render = function renderUserView() {
        this.$el.html(this.template({ "authuser": service.isUserLoggedIn() }));
        NProgress.done();
        return this;
    };

    this.initialize = function() {
       // Define a div wrapper for the view ( used to attach events )
       this.$el = $('<div/>');
       this.render();
    }

    this.initialize();
}
