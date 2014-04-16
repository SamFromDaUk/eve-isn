ISN.Controller.extend('ISN.Controllers.Navigation', {

}, {
    directLinks: {
        'forums': 'http://forum.eve-isn.com/'
    },

    init: function(options) {
        this.setNavigationPosition();
    },

    update: function(options) {
        this._super(options);

        if (this.options.page === 'landing') {
            this.options.page = null;
            window.location.hash = '';
        }

        this.setNavigationPosition();
    },

    setNavigationPosition: function() {
        var page = this.options.page || window.location.hash;

        page = page.replace('#', '');

        if (page) {
            window.location.hash = page;
            this.options.change(page);
            this.options.toggleMenu(true);
            this.element.find('li').removeClass('active');
            this.element.find('[data-page="'+ page +'"]').addClass('active');
        } else {
            window.location.hash = '';
            this.element.find('li').removeClass('active');
            this.options.change(null);
        }
    },

    'li click': function(el, ev) {
        var page = el.attr('data-page');

        ev.preventDefault();

        this.options.page = page;
        this.setNavigationPosition();
    }
});