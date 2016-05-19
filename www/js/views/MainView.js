var MainView = function (service) {

    var self = this;

    this.data = {
        Nome: "Exemplo",
        Descricao: "Descrição do projeto - Lorem ipsum dolor sit amet, consectetur adipisici elit,sed eiusmod tempor incidunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisici elit,sed eiusmod tempor incidunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisici elit,sed eiusmod tempor incidunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisici elit,sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        Interesses: "Áreas de interesse do projeto",
        Habilidades: "Habilidades relacionadas ou requisitadas pelo projeto"
    };

    this.render = function renderMainView(data) {
      records = this.data.data;
      projects = [];
      for (var i = 0; i < 3; i++) {
        var rand = records[Math.floor(Math.random() * records.length)];
        projects[i] = {id: rand.objectId, title: rand.Nome, description: rand.Descricao };
      };

      this.$el.html(this.template({"authuser": service.isUserLoggedIn() ,"projects": projects}));
      return this;
    };

    this.initialize = function() {
       // Define a div wrapper for the view ( used to attach events )
       this.$el = $('<div/>');
       this.data = service.retrieveAllProject();
    }


    this.initialize();
}
