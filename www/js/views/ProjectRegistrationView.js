var ProjectRegistrationView = function (service) {

    this.render = function renderProjectRegistrationView() {
        this.$el.html(this.template());
        return this;
    };

    this.initialize = function() {
       // Define a div wrapper for the view ( used to attach events )
       this.$el = $('<div/>');
       this.render();
    }

    this.initialize();
}
