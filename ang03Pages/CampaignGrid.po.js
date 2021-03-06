import CampaignDetail from './CampaignDetail.po.js';

class CampaignGrid {
    constructor() {}

    goto() {
        element(by.linkText("Campaigns")).click();

        var e = element(by.css('.active'));
        expect(e.getText()).toEqual("Campaigns");
    }

    toDetail(text) {
        var e = element.all(by.xpath("//*[contains(text(),'" + text + "')]")).first();
        return new CampaignDetail(e);
    }
}
export default CampaignGrid;
