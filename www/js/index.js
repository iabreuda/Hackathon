(function () {

    /* ------------------------------------ Templates -------------------------------------- */
    // Setup reusable parts
    var Header = Handlebars.compile( $("#head-navbar").html() );
    var ProjectCard = Handlebars.compile( $("#project-card").html() );
    Handlebars.registerPartial( 'appHeader', Header );
    Handlebars.registerPartial( 'ProjectCard', ProjectCard );

    // Setup main templates
    MainView.prototype.template = Handlebars.compile($("#main").html());
    LoginView.prototype.template = Handlebars.compile($("#login").html());
    ProfileView.prototype.template = Handlebars.compile($("#perfil").html())
    ProfileView.prototype.template_dashboard = Handlebars.compile($("#dashboard").html())
    ProfileView.prototype.template_myprojects = Handlebars.compile($("#my-projects").html())
    ProfileView.prototype.template_mensagens = Handlebars.compile($("#mensagens").html())
    ProfileView.prototype.template_inscricoes = Handlebars.compile($("#inscricoes").html())
    RegistrationView.prototype.template = Handlebars.compile( $("#user-registration").html());

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new BackendService();
    service.initialize().done(function () {
        router.addRoute('', function() {
            $('body').html(new MainView(service).render().$el);
        });

        router.addRoute('register', function() {
            $('body').html(new RegistrationView(service).render().$el);
        });

        router.addRoute('login', function() {
            $('body').html(new LoginView(service).render().$el);
        });

        router.addRoute('dashboard', function() {
            $('body').html(new ProfileView(service).render("dashboard").$el);
        });

        router.addRoute('inscricoes', function() {
            $('body').html(new ProfileView(service).render("inscricoes").$el);
        });

        router.addRoute('mensagens', function() {
            $('body').html(new ProfileView(service).render("mensagens").$el);
        });

        router.addRoute('my-projects', function() {
            $('body').html(new ProfileView(service).render("my-projects").$el);
        });

        router.addRoute('dado/:id', function(id) {
            service.findById(parseInt(id)).done( function( entry ) {

            });
        });
        router.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */


    /* ---------------------------------- Local Functions ---------------------------------- */

}());