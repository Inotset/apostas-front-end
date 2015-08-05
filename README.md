# Configuração

- Download e Instalar node.js
- Download e Instalar GIT
- Download e Instalar Python 2
- WINDOWS: Download e Instalar RailsInstaller
- WINDOWS: Download e Instalar VisualStudio 2012

Criar arquivo de acordo com o código abaixo ("teste.rb"):

require 'net/http'

create a path to the file "C:\RailsInstaller\cacert.pem"
cacert_file = File.join(%w{c: RailsInstaller cacert.pem})

Net::HTTP.start("curl.haxx.se") do |http|
  resp = http.get("/ca/cacert.pem")
  if resp.code == "200"
    open(cacert_file, "wb") { |file| file.write(resp.body) }
    puts "\n\nA bundle of certificate authorities has been installed to"
    puts "C:\\RailsInstaller\\cacert.pem\n"
    puts "* Please set SSL_CERT_FILE in your current command prompt session with:"
    puts "     set SSL_CERT_FILE=C:\\RailsInstaller\\cacert.pem"
    puts "* To make this a permanent setting, add it to Environment Variables"
    puts "  under Control Panel -> Advanced -> Environment Variables"
  else
    abort "\n\n>>>> A cacert.pem bundle could not be downloaded."
  end
end

Execute:

> ruby "teste.rb"

cacert.pem certificado ssl

> set SSL_CERT_FILE=C:\RailsInstaller\cacert.pem

Compass:

> gem install compass

C:\RailsInstaller\Ruby2.1.0\bin / git / node / python -> path

Execute: 

> npm install -g bower
> npm install -g grunt-cli
> npm install -g yo
> npm install -g generator-angular

Definir o VS12 como compilador de C do node-gyp

> npm config set msvs_version 2012 --global

---------------

> yo angular teste
Caso o projeto seja criado com sucesso
> grunt
> grunt serve


mkdir angularTeste
cd angularTeste
yo angular teste

grunt

grunt serve

---------------------------------------------

controle de rota

yo angular:route usuario
yo angular:factory usuario
yo anguykar:directive mo-expandle
// yo angular:controller usuario

Baixar o plugin pra apontar a porta para 9000 / 8080
npm install connect-modrewrite --save-dev

yo angular:directive modal

bower install ng-cpf-cnpj --save

------------------------------------------
Configuração para autenticação Google
------------------------------------------
Antes de mais nada, é necessário obter as credenciais para o seu projeto:
(https://oneminutedistraction.wordpress.com/2014/04/29/using-oauth-for-your-javaee-login/)

# Bower
bower install satellizer

ou

NPM
npm install satellizer

Injetar no app:

angular.module('MyApp', ['satellizer'])
  .config(function($authProvider) {
  
    $authProvider.google({
      clientId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com'
    });
    
    
Controller:

ngular.module('MyApp')
  .controller('LoginCtrl', function($scope, $auth) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };

  });

HTML:

<button ng-click="authenticate('google')">Sign in with Google</button>

Configurações opcionais:

$authProvider.httpInterceptor = true; // Add Authorization header to HTTP request
$authProvider.loginOnSignup = true;
$authProvider.baseUrl = '/' // API Base URL for the paths below.
$authProvider.loginRedirect = '/';
$authProvider.logoutRedirect = '/';
$authProvider.signupRedirect = '/login';
$authProvider.loginUrl = '/auth/login';
$authProvider.signupUrl = '/auth/signup';
$authProvider.loginRoute = '/login';
$authProvider.signupRoute = '/signup';
$authProvider.tokenRoot = false; // set the token parent element if the token is not the JSON root
$authProvider.tokenName = 'token';
$authProvider.tokenPrefix = 'satellizer'; // Local Storage name prefix
$authProvider.unlinkUrl = '/auth/unlink/';
$authProvider.unlinkMethod = 'get';
$authProvider.authHeader = 'Authorization';
$authProvider.authToken = 'Bearer';
$authProvider.withCredentials = true;
$authProvider.platform = 'browser'; // or 'mobile'
$authProvider.storage = 'localStorage'; // or 'sessionStorage'

// Google
$authProvider.google({
  url: '/auth/google',
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
  redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
  scope: ['profile', 'email'],
  scopePrefix: 'openid',
  scopeDelimiter: ' ',
  requiredUrlParams: ['scope'],
  optionalUrlParams: ['display'],
  display: 'popup',
  type: '2.0',
  popupOptions: { width: 580, height: 400 }
});
