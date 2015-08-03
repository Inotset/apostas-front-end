# apostas-front-end

Steps
- Download e Instalar node.js
- Download e Instalar GIT
- Download e Instalar Python 2
- WINDOWS: Download e Instalar RailsInstaller
- WINDOWS: Download e Instalar VisualStudio 2012

- 

whatever.rb ->

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

Execute:

> ruby "whatever.rb"

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
