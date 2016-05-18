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
              userLoggedInStatus(cache["user-token"]);
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

};

