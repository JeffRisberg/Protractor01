class CampaignDetail {

    constructor(e) {
        e.click();
    }

    getHeaderText() {
        return element(by.tagName('h3')).getText();
    }

    getCampaignName() {
        var e = element(by.xpath("//tr[1]//td[2]"));
        return e.getText();
    }
}
export default CampaignDetail;
