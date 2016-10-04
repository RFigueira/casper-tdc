function contatoPage() {
    this.aguardarCarregamentoPagina = function() {
        casper.then(function() {
            this.waitForSelector('form#formContato', function() {
                casper.test.assertSelectorHasText('h5', 'Contato');
            });
        });
    };
    this.prencherFormContato = function(nome, telefone, email , msg) {
        casper.then(function() {
                this.fillSelectors('form#formContato', {
                    'input[id="formContato:nome"]': nome,
                    'input[id="formContato:telefone"]': telefone,
                    'input[id="formContato:email"]': email,
                    'textarea[id="formContato:mensagem"]': msg
                }, false);
                this.clickLabel('Enviar ', 'a');
        });
    };
    this.verificarSucesso = function () {
        casper.then(function() {
            this.waitForSelector("div#validacao-sucess", function () {


            });
        });
    }
}