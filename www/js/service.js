var BackendService = function( config ) {

    var self = this;

    var APPLICATION_ID = '3F45B053-F438-3A64-FF3B-5662C23EAC00';
    var SECRET_KEY = '3094F20A-BA0F-5777-FF98-9172F1668500';
    var VERSION = 'v1';
    var cache;

    this.initialize = function () {
        var d = $.Deferred();
        Backendless.serverURL = "https://api.backendless.com";
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

        cache = Backendless.LocalCache.getAll();
        if(cache["stayLoggedIn"]){
           var tokenExist = Backendless.UserService.isValidLogin();
           if(tokenExist) {
              self.userLoggedIn(cache["user-token"]);
           } else {
              Backendless.LocalCache.clear();
           }
        }

        d.resolve();

        return d.promise();
    };

    this.userRegistered = function () {
        console.log('REGISTROU CARAIO');
    };

    this.gotErrorRegister = function() {
        console.log('FOI NÃO');
    };

    this.registerUser = function ( userData ) {
        var user = new Backendless.User();
        user['celular'] = userData.celular;
        user['curso'] = userData.curso;
        user['email'] = userData.email;
        user['habilidades'] = userData.habilidades;
        user['interesses'] = userData.interesses;
        user['matricula'] = userData.matricula;
        user['name'] = userData.name;
        user['password'] = userData.pwd;
        user['telefone'] = userData.telefone;
        user['vinculo'] = userData.vinculo;

        return Backendless.UserService.register( user, new Backendless.Async( self.userRegistered, self.gotErrorRegister) );
    };

    this.saveProject = function ( projectObj, success ) {
        var projectSaveFail = function ( err ) {
            console.warn( 'Failed to save project' );
            console.log( err );
        };

        Backendless.Persistence.of( Project ).save( projectObj , new Backendless.Async( success, projectSaveFail ));
    };

    this.retrieveProject = function( id , success ) {
        var fetchError = function ( err ) {
            console.warn( 'Failed to fetch project ID:' + id );
            console.log( err );
        };

        Backendless.Persistence.of( Project ).findById( id , new Backendless.Async( success, fetchError ));
    };

    this.loginUser = function ( userData, success, failure ) {
        if ( userData.login == "" || userData.password == "" ){
            return false;
        }
        Backendless.UserService.login(userData.login, userData.password, userData.remember, new Backendless.Async( self.userLoginCallbackGenerator( success ), failure ) );
    };

    this.userLoginCallbackGenerator = function userLoginCallbackGenerator( callback ) {
        return function userLoggedIn( user ) {
            BackendService.prototype.user = user;
            callback( user );
        };
    };

    this.logoutUser = function ( userLoggedOut ) {
        localStorage.clear();
        Backendless.UserService.logout( new Backendless.Async( userLoggedOut, self.gotError ) );
    };

    this.userLoggedIn = function ( user ) {
        BackendService.prototype.user = user;
        console.log( user );
    };

    this.gotError = function ( err ) {
        console.log( err );
    };

};

