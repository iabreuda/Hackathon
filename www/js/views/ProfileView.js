var ProfileView = function (service) {

    this.render = function renderProfileView(name) {
        switch(name) {
          case "dashboard":
            var obj = {context: this.template_dashboard}
            break;
        }
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
