var ProfileView = function (service) {

    this.render = function renderProfileView(name) {
        switch(name) {
          case "dashboard":
            var obj = {context: this.template_dashboard, dashboard: true }
            break;
          case "my-projects":
            var obj = {context: this.template_myprojects, myprojects: true }
            break;
          case "inscricoes":
            var obj = {context: this.template_inscricoes, inscricoes: true }
            break;
          case "mensagens":
            var obj = {context: this.template_mensagens, mensagens:true }
            break;
          case "edit-profile":
            var obj = {context: this.template_edit, editprofile: true }
            break;
        }
        this.$el.html(this.template(obj));
        NProgress.done();
        return this;
    };

    this.initialize = function() {
       // Define a div wrapper for the view ( used to attach events )
       this.$el = $('<div/>');
    }

    this.initialize();
}
