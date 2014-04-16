ISN.Controller.extend('ISN.Controllers.Core', {

}, {
    loadedPages: {},

    init: function() {
        var self = this;

        this.elements = {};

        this.renderCoreView();
        this.renderHeader();
        this.renderFooter();

        this.initNav();
    },

    renderCoreView: function() {
        this.element.html(this.view('//isn/views/core.ejs'));

        this.elements.header = this.element.children('.header');
        this.elements.content = this.element.children('.content');
        this.elements.footer = this.element.children('.footer');
    },

    renderHeader: function() {
        this.elements.header.html(this.view('//isn/views/header.ejs'));

        this.elements.navContain = this.elements.header.find('.nav-contain');
        this.elements.navigation = this.elements.header.find('ul.navigation');
    },

    renderFooter: function() {
        this.elements.footer.html(this.view('//isn/views/footer.ejs'));
    },

    toggleMenu: function(openMenu) {
        this.elements.navContain
            .removeClass('open closed')
            .addClass(openMenu ? 'open' : 'closed');

        this.elements.navigation.css('opacity', openMenu ? 1 : 0);

        if (!openMenu) {
            this.initNav('landing');
        }
    },

    changePage: function(page) {
        var self = this,
            container = $('<div class="fade"></div>');

        this.elements.content.children().removeClass('in');

        if (!page) {
            return;
        }

        if (this.loadedPages[page]) {
            this.elements.content.children('.isn_' + page).addClass('in')['isn_' + page]();
            return;
        }

        this.loadedPages[page] = true;
        container['isn_' + page]();
        self.elements.content.append(container);
        container.addClass('in');

    },

    initNav: function(page) {
        var self = this;

        this.elements.navigation.isn_navigation({
            page: page || null,
            change: function(page) {
                self.changePage(page);
            },
            toggleMenu: function(open) {
                self.toggleMenu(open);
            }
        });
    },

    '.header .nav-status > div click': function(el, ev) {
        this.toggleMenu(!el.is('.nav-open'));
    }
});