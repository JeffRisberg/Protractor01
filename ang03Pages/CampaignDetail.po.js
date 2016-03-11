class CampaignDetail {

    constructor(e) {
        e.click();
    }

    getHeaderText() {
        return element(by.tagName('h3')).getText();
    }
}
export default CampaignDetail;
