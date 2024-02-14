const campaignEnd = new Date('2024/02/15 00:00 GMT+7');

export const checkCampaignEnded = () =>
	new Date().getTime() > campaignEnd.getTime();
