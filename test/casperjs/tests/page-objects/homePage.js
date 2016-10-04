function homePage() {
    this.abrirPaginaContato = function() {
        casper.then(function() {
                this.echo(this.getCurrentUrl(), 'info');
                this.click('a[id="prettyLinkContato"]');
        });
    };
}