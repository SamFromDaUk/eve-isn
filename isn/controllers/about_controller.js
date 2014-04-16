ISN.Controller.extend('ISN.Controllers.About', {

}, {
    isnName: ['shiny', 'pve', 'pvp'],
    nameIndex: 0,
    hasTimer: false,

    init: function() {
        this.elements = {};
        this.render();
    },

    update: function(options) {
        this._super(options);
        this.render();
    },

    render: function() {
        var self = this;

        this.element.html(this.view('//isn/views/about.ejs'));

        this.elements.changeable = this.element.find('div.changeable');

        if (!this.hasTimer) {
            this.hasTimer = true;
            setTimeout(function() {
                self.swapIsnName();
            }, 5000);
        }
    },

    swapIsnName: function() {
        var self = this;

        if (this.nameIndex >= this.isnName.length) {
            this.nameIndex = 0;
        }

        this.elements.changeable.fadeOut(200, function() {
            self.elements.changeable.text(self.isnName[self.nameIndex]);
            self.elements.changeable.fadeIn(200);
            self.nameIndex++;
        });

        setTimeout(function() {
            self.swapIsnName();
        }, 5000);
    }
});