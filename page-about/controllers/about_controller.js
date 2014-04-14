ISN.Controller.extend('ISN.Controllers.About', {

}, {
    init: function() {
        this.render();
    },

    update: function() {
        this.render();
    },

    render: function() {
        this.element.html(this.view('//page-about/views/about.ejs'));
    }
});