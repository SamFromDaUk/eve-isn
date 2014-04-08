(function() {
    var ISN = {
        init: function() {

        }
    };

    // Declare global scope
    window.ISN = ISN;
})();

$(function() {
    ISN.init.call(ISN);
});