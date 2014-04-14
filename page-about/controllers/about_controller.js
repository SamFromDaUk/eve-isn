ISN.Controller.extend('ISN.Controllers.About', {

}, {
    init: function() {
        this.render();
    },

    update: function(options) {
        this._super(options);
        this.render();
    },

    render: function() {
        this.element.html(this.view('//page-about/views/about.ejs'));
        this.element.show();
    }
});