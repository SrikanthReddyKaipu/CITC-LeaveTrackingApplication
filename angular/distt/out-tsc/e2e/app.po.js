"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var LtaAppPage = (function () {
    function LtaAppPage() {
    }
    LtaAppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    LtaAppPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return LtaAppPage;
}());
exports.LtaAppPage = LtaAppPage;
//# sourceMappingURL=app.po.js.map