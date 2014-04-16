ISN.Controller.extend('ISN.Controllers.Details', {

}, {
    init: function() {
        this.elements = {};

        this.render();
    },

    update: function(options) {
        this._super(options);
    },

    render: function() {
        this.element.html(this.view('//isn/views/details.ejs'));
    }
});