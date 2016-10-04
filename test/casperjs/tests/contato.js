const base = require('./../common/base');
const pathScreen = './../screenshots/';


casper.test.begin('Web site formulario contato', 5, function suite(test) {

	base.early(casper,test);

	base.clickLabelWaitForRenderedCompleteWithoutError(casper,test, 'CONTATO', 'prettyLinkContato');
	casper.then(function () {
		test.assertSelectorHasText('h5', 'Contato');
		this.capture(pathScreen + 'contato.png');
	}).then(function () {
		this.fillSelectors('form#formContato', {
			'input[id="formContato:nome"]': 'casper espertinho',
			'input[id="formContato:telefone"]': '5391254855',
			'input[id="formContato:email"]': 'casper@casper.com',
			'textarea[id="formContato:mensagem"]': 'teste automatizados com casperJS'
		}, true);
		this.capture(pathScreen + 'contato-pre-enviar.png');

	}).then(function () {
		this.wait(10,function () {
			this.clickLabel('Enviar ', 'a');
		});
	}).then(function () {
		this.waitForSelector("div#validacao-sucess", function () {
			this.capture(pathScreen + 'contato-enviado .png');
			test.assertExists('.card-panel');
			test.assertExists('.teal');
			this.echo("Como esperado: Com Sucesso! no teste ", 'info');
		});
	});


	casper.run(function () {
		test.done();
    });
});
