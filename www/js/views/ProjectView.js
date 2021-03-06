var ProjectView = function ( service, id ) {

    var self = this;

    this.data = {
        Nome: "Exemplo",
        Descricao: "Descrição do projeto - Lorem ipsum dolor sit amet, consectetur adipisici elit,sed eiusmod tempor incidunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisici elit,sed eiusmod tempor incidunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisici elit,sed eiusmod tempor incidunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisici elit,sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        Interesses: "Áreas de interesse do projeto",
        Habilidades: "Habilidades relacionadas ou requisitadas pelo projeto"
    };

    this.render = function renderProjectView( data ) {
        var tData = {};
        $.extend(tData, self.data, {"authuser": service.isUserLoggedIn()} );
        this.$el.html(this.template( tData ));
        NProgress.done();
        return this;
    };

    this.initialize = function() {
       NProgress.start();
       // Define a div wrapper for the view ( used to attach events )
       console.log( 'Initializing Project view' );
       this.$el = $('<div/>');

       if ( typeof id == "undefined" ) {
          return;
       }

      this.data = service.retrieveProjectSync( id );
    };

    this.initialize();
}
