var LoginView = function (service) {

    self = this;

    this.render = function renderLoginView() {
        this.$el.html(this.template({ vLogin: true }));
        NProgress.done();
        return this;
    };

    this.initialize = function() {
       // Use $el para definir event handlers
       this.$el = $('<div/>');

       if( service.isUserLoggedIn() ) {
          self.loginSuccess();
          return;
       }

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
       NProgress.start();
       service.loginUser( userData, self.loginSuccess, self.loginFailure );
    };

    this.loginSuccess = function( test ) {
      console.log( 'Logged in' );
      console.log( test );
      window.location = "#dashboard";
    };

    this.loginFailure = function( err ) {
      NProgress.done();
      console.log( 'Loggin failure');
      console.log( err );
    };

    this.initialize();
}
