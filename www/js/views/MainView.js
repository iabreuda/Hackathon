var MainView = function (service) {

    this.render = function renderMainView() {
        var obj = {title: "Hackathon 2016", description: "AAAAAA" };
        this.$el.html(this.template(obj));
        return this;
    };

    this.initialize = function() {
       // Define a div wrapper for the view ( used to attach events )
       this.$el = $('<div/>');
       this.render();
    }

    this.initialize();
}
