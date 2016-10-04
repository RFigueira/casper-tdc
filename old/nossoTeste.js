//utilizando funções anonimas :)
// primeiro parametro é o nome do nosso test ou suite de test (como queira)
// segundo é o numero de test que vamos fazer (dica, geralmente o numero de %asserts%)
// terceiro é a função que passamos o test como parametro
casper.test.begin('Nome do Test!', 1, function(test) {

    //Entrando no site da tecsinapseafterFlush
    casper.start('http://www.tecsinapse.com.br/', function(){

      //testando a existencia do h1 ( . = class, ID = # )
      // com a class logo ;) se ele achar o nosso test passa, caso contrario
      // falha :(
      test.assertExists('h1.logo');
      //Roda o test
    }).run(function(){
      // termina o test
      test.done();
    });

});
