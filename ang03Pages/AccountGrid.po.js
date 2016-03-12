import AccountDetail from './AccountDetail.po.js';

class AccountGrid {
    constructor() {}

    goto() {
        element(by.linkText("Accounts")).click();

        var e = element(by.css('.active'));
        expect(e.getText()).toEqual("Accounts");
    }

    toDetail(text) {
        var e = element.all(by.xpath("//*[contains(text(),'" + text + "')]")).first();
        return new AccountDetail(e);
    }
}
export default AccountGrid;
