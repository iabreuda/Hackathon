var ProjectView = function ( service, id ) {

    var self = this;

    this.render = function renderProjectView( data ) {
        this.$el.html(this.template( data ));
        return this;
    };

    this.initialize = function() {
       // Define a div wrapper for the view ( used to attach events )
       console.log( 'Initializing Project view' );
       this.$el = $('<div/>');
       service.retrieveProject( id , function ( data ) {
          console.log( data );

          var context = {
             Nome: data.Nome,
             Descricao: data.Descricao,
             Interesses: data.Interesses,
             Habilidades: data.Hablidades
          };

          self.render( data );
       });

    };

    this.initialize();
}
