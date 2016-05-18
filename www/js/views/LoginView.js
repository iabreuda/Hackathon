var LoginView = function (service) {

    self = this;

    this.render = function renderLoginView() {
        this.$el.html(this.template());
        return this;
    };

    this.initialize = function() {
       // Use $el para definir event handlers
       this.$el = $('<div/>');
       this.render();

       $( this.$el ).on('click', function( evt ) {
          if ( evt.target.id == "login-btn" ) {
            self.login();
          }
       });

    };

    this.login = function () {
       var userData = {
          login: $('input[name="login"]').val().trim(),
          password: $('input[name="pwd"]').val().trim(),
          remember: true
       };
       service.loginUser( userData, self.loginSuccess, self.loginFailure );
    };

    this.loginSuccess = function( test ) {
      console.log( 'Logged in' );
      console.log( test );
      window.location = "#dashboard";
    };

    this.loginFailure = function( err ) {
      console.log( 'Loggin failure');
      console.log( err );
    };

    this.initialize();
}
