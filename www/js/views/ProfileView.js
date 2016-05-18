var ProfileView = function (service) {

    this.render = function renderProfileView(name) {
        switch(name) {
          case "dashboard":
            var obj = {context: this.template_dashboard}
            break;
          case "my-projects":
            var obj = {context: this.template_myprojects}
            break;
          case "inscricoes":
            var obj = {context: this.template_inscricoes}
            break;
          case "mensagens":
            var obj = {context: this.template_mensagens}
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
