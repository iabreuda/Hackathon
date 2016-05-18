var RegistrationView = function (service) {

    this.render = function renderLoginView() {
        this.$el.html(this.template());
        return this;
    };

    this.initialize = function() {
       // Define a div wrapper for the view ( used to attach events )
       this.$el = $('<div/>');
       this.render();

    };

    this.register = function () {

    };

    this.initialize();
}
