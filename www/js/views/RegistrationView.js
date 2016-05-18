var RegistrationView = function (service) {

    self = this;

    this.render = function renderLoginView() {
        this.$el.html(this.template());
        return this;
    };

    this.initialize = function() {
       // Define a div wrapper for the view ( used to attach events )
       this.$el = $('<div/>');
       //debugger;



       this.render();
       //debugger;
       //
        $( this.$el ).on('click', function( evt ) {
          if ( evt.target.id == "reg-btn" ) {
            self.registerUser();
          }
       });

    };

    this.registerUser = function () {
       var userData = {
          name : $('input[name="user_name"]').val().trim(),
          pwd : $('input[type="password"]').val().trim(),
          matricula : $('input[name="user_matricula"]').val().trim(),
          vinculo : $('input[name="user_vinculo"]').val().trim(),
          curso: $('input[name="user_curso"').val().trim(),
          telefone: $('input[name="user_telefone"]').val().trim(),
          celular: $('input[name="user_celular"').val().trim(),
          email: $('input[name="user_email"').val().trim(),
          habilidades: checkboxToString('skills',','),
          interesses: checkboxToString('interests',',')
      };
      var success = function success ( info ) {
        window.location = "#dashboard";
      };
      service.registerUser( userData, success, failure );

    };

    this.initialize();
}
