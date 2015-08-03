# apostas-front-end

Passos ambiente de desenvolvimento:

Download e Instalar node.js
Download e Instalar GIT
Download e Instalar Python 2
WINDOWS: Download e Instalar RailsInstaller
WINDOWS: Download e Instalar VisualStudio 2012

- 

Cria um arquivo chamado whatever.rb com o script abaixo

require 'net/http'

# create a path to the file "C:\RailsInstaller\cacert.pem"
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

executa o arquivo que voce criou:

> ruby "whatever.rb"

defina o cacert.pem baixado como certificado ssl

> set SSL_CERT_FILE=C:\RailsInstaller\cacert.pem

baixe o compass:

> gem install compass

Coloque a pasta C:\RailsInstaller\Ruby2.1.0\bin no path

executar os comandos:

> npm install -g bower
> npm install -g grunt-cli
> npm install -g yo
> npm install -g generator-angular

Definir o VS12 como compilador de C do node-gyp

> npm config set msvs_version 2012 --global

---------------
verificar se o ambiente está OK

CRIA um projeto com o generator-angular
> yo angular teste
Caso o projeto seja criado com sucesso
> grunt
> grunt serve

definicao de variavel no ambiente

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

cria um modal no angular vnas 
yo angular:directive modal


bower install ng-cpf-cnpj --save
