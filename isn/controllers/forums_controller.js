ISN.Controller.extend('ISN.Controllers.Forums', {

}, {
    init: function() {
        this.elements = {};

        this.render();
    },

    update: function(options) {
        this._super(options);
    },

    render: function() {
        this.element.html(this.view('//isn/views/forums.ejs'));
    },

    '.btn.btn-success click': function(el, ev) {
        window.open('http://forum.eve-isn.com/');
    }
});