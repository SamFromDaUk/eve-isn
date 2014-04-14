ISN.Controller.extend('ISN.Controllers.Navigation', {

}, {
    init: function(options) {
        this.setNavigationPosition();
    },

    update: function(options) {
        this._super(options);

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
        }
    },

    'li click': function(el, ev) {
        var page = el.attr('data-page');

        ev.preventDefault();

        this.options.page = page;
        this.setNavigationPosition();
    }
});