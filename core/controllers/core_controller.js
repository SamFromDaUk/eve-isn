ISN.Controller.extend('ISN.Controllers.Core', {

}, {
    init: function() {
        var self = this;

        this.elements = {};

        this.renderCoreView();
        this.renderHeader();
        this.renderFooter();

        this.elements.navigation.isn_navigation({
            change: function(page) {
                self.changePage(page);
            },
            toggleMenu: function(open) {
                self.toggleMenu(open);
            }
        });
    },

    renderCoreView: function() {
        this.element.html(this.view('//core/views/core.ejs'));

        this.elements.header = this.element.children('.header');
        this.elements.content = this.element.children('.content');
        this.elements.footer = this.element.children('.footer');
    },

    renderHeader: function() {
        this.elements.header.html(this.view('//core/views/header.ejs'));

        this.elements.navContain = this.elements.header.find('.nav-contain');
        this.elements.navigation = this.elements.header.find('ul.navigation');
    },

    renderFooter: function() {
        this.elements.footer.html(this.view('//core/views/footer.ejs'));
    },

    toggleMenu: function(openMenu) {
        this.elements.navContain
            .removeClass('open closed')
            .addClass(openMenu ? 'open' : 'closed');

        this.elements.navigation.css('opacity', openMenu ? 1 : 0);
    },

    changePage: function(page) {
        console.log(page);
    },

    '.header .nav-status > div click': function(el, ev) {
        this.toggleMenu(!el.is('.nav-open'));
    }
});