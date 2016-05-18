var LoginView = function (service) {

    this.render = function renderLoginView() {
        this.$el.html(this.template());
        return this;
    };

    this.initialize = function() {
       // Use $el para definir event handlers
       this.$el = $('<div/>');
       this.render();

    };

    this.register = function () {

    };

    this.initialize();
}
