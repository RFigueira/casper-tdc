phantom.page.injectJs('./contatoPage.js');
phantom.page.injectJs('./homePage.js');
const paginaInicial = 'http://localhost:8080/';

var homePage = new homePage();
var contatoPage = new contatoPage();

casper.test.begin('Teste CasperJS COM PageObjects',3 ,function(test) {
    casper.start(paginaInicial);

    homePage.abrirPaginaContato();

    contatoPage.aguardarCarregamentoPagina();

    contatoPage.prencherFormContato('rodrigo','1234567','foolha@gmail.com', 'teste com page');

    //validando fora do PageObjects
    contatoPage.verificarSucesso();

    casper.then(function verificarMsgSucesso() {
        this.test.assertExists('.card-panel');
        this.test.assertExists('.teal');
    });

    casper.run(function() {
        test.done();
    });
});