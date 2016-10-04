//vamos escrever da forma mais verbosa agora ;) [obs] OS parametros iniciais não mudam
casper.test.begin('CastSinapse!', 2, function(test) {

    //Entrando no site da tecsinapse
    casper.start('http://www.tecsinapse.com.br/');
    casper.then(function(){
        //primeiro teste
        test.assertExists('h1.logo');

        //opa aqui vamos falar o que fizemos com um echo ;)
        this.echo("Aeee! achamos o logo, agora vamos navegar até o castSinapse", 'info');
    }).then(function(){
        //funcao do casper que serve para clicar
        //primeiro paramento o label, segundo a tag
        this.clickLabel('CastSinapse', 'a');

        //serve para esperarmo até que algo fique visivel, aqui será pelo label inicial do castSinapse
        this.waitForText('Castsinapse',function () {
          //outro echo ;) e vamos pegar a url da onde estamos com o this.getCurrentUrl ;)
          this.echo("Estamos na pagina: "+ this.getCurrentUrl() +" agora vamos procurar pela tag h4 que contenha o nome do ultimo ep ;)", 'info');

          //segundo teste
          test.assertSelectorHasText('h4', 'Meteor, Bala de Prata?');
        });
    });

    casper.run(function(){
      // termina o test
      test.done();
    });
});
