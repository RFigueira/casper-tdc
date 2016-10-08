const URL_PORTAL = 'http://localhost:8080/'
const URL_PORTAL_B = 'http://localhost:8080/gerenciador/dashboard/'
const PATH_SCREEN = './../screenshots/';
const X = require('casper').selectXPath;
const URL_GERENCIADOR = 'http://localhost:8080/gerenciador/dashboard/';


casper.test.begin('Web site formulario contato', 6, function suite(test) {

    casper.start(URL_PORTAL, function () {
        this.echo("Estabelecendo acesso a URL: " + this.getCurrentUrl(), 'INFO');
        test.assertHttpStatus(200);
    }).viewport(1024, 768);

    casper.then(
        function () {
            //Utilizando xPath
            //this.click(x('.//*[@id="prettyLinkContato"]'));

            this.clickLabel('CONTATO', 'a');
        }).then(function () {
            test.assertExists('a[href="https://codepampa.com.br"]')
    }).then(function () {
        test.assertSelectorHasText('h5', 'Contato');
        this.capture(PATH_SCREEN + 'contato.png');
    }).then(function () {
        this.fillSelectors('form#formContato', {
            'input[id="formContato:nome"]': 'casper espertinho',
            'input[id="formContato:telefone"]': '5391254855',
            'input[id="formContato:email"]': 'casper@casper.com',
            'textarea[id="formContato:mensagem"]': 'teste automatizados com casperJS'
        }, true);
        this.capture(PATH_SCREEN + 'contato-pre-enviar.png');

    }).then(function () {
        this.wait(10,function () {
            this.clickLabel('Enviar ', 'a');
        });
    }).then(function () {
        this.waitForSelector("div#validacao-sucess", function () {
            this.capture(PATH_SCREEN + 'contato-enviado .png');
            test.assertExists('.card-panel');
            test.assertExists('.teal');
            test.assertTextExists('Obrigado pelo seu contato, em breve entraremos em contato!', 'Foi encontrado a msg "Obrigado pelo seu contato, em breve entraremos em contato!"');
            this.echo("Como esperado: Com Sucesso! no teste ", 'INFO');
        });
    });
    casper.run(function () {
        test.done();
    });
});
