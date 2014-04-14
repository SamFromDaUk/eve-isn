ISN.Controller.extend('ISN.Controllers.Details', {

}, {
    init: function() {
        this.render();
    },

    update: function(options) {
        this._super(options);
        this.render();
    },

    render: function() {
        this.element.show();
    }
});