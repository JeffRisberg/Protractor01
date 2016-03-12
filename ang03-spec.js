// Jeff Risberg March 2016

import AccountGrid from './ang03Pages/AccountGrid.po.js';
import AccountDetail from './ang03Pages/AccountDetail.po.js';

import CampaignGrid from './ang03Pages/CampaignGrid.po.js';
import CampaignDetail from './ang03Pages/CampaignDetail.po.js';

describe('ANG03 test', function () {
    it('should access Accounts page', function () {
        browser.get('http://localhost/ANG03');

        var accountGrid = new AccountGrid();

        accountGrid.goto();

        var accountDetailPage = accountGrid.toDetail('Paychex');

        expect(accountDetailPage.getHeaderText()).toEqual("Edit Account");

        expect(accountDetailPage.getAccountName()).toEqual("Paychex");
    });

    it('should access Campaigns page', function () {
        browser.get('http://localhost/ANG03');

        var campaignGrid = new CampaignGrid();

        campaignGrid.goto();

        var campaignDetailPage = campaignGrid.toDetail('Travel:Cruises');

        expect(campaignDetailPage.getHeaderText()).toEqual("Edit Campaign");

        expect(campaignDetailPage.getCampaignName()).toEqual("Travel:Cruises");
    });
});