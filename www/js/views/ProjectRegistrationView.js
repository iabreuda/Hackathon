var ProjectRegistrationView = function (service) {

    var self = this;

    this.render = function renderProjectRegistrationView() {
        this.$el.html(this.template());
        return this;
    };

    this.initialize = function() {
       // Define a div wrapper for the view ( used to attach events )
       this.$el = $('<div/>');

       $( this.$el ).on('click', function( evt ) {
          if ( evt.target.id == "#btn-prjreg" ) {
            self.registerProject();
          }
       });
    };

    this.registerProject = function () {
      NProgress.start();
      var proj = new Project({
        Nome : $('input[name="project-name"]').val().trim(),
        Descricao: $('textarea').val().trim(),
        Interesses: checkboxToString( 'interests', ',' ),
        Habilidades: checkboxToString( 'skills', ',')
      });

      service.saveProject( proj, function success( info ) {
        console.log( "Projeto armazenado" );
        console.log( info );
        window.location = "#project/" + info.objectId ;
      });

    };

    this.initialize();
}
