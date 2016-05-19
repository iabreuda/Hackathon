var ProjetosView = function (service) {

    var self = this;

    this.data = {
        Nome: "Exemplo",
        Descricao: "Descrição do projeto - Lorem ipsum dolor sit amet, consectetur adipisici elit,sed eiusmod tempor incidunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisici elit,sed eiusmod tempor incidunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisici elit,sed eiusmod tempor incidunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisici elit,sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        Interesses: "Áreas de interesse do projeto",
        Habilidades: "Habilidades relacionadas ou requisitadas pelo projeto"
    };

    this.render = function renderProjetosView( data ) {
        var records = this.data.data;
        var projects = [];
        for (var i = 0; i < records.length; i++) {
          projects[i] = {id: records[i].objectId, title: records[i].Nome, habilidades: records[i].Habilidades };
        };
        this.$el.html(this.template({"projects": projects}));
        NProgress.done();
        return this;
    };

    this.initialize = function() {
       // Define a div wrapper for the view ( used to attach events )
       this.$el = $('<div/>');
       this.data = service.retrieveAllProject();
    }


    this.initialize();
}
