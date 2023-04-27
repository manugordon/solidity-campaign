import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xBCeC934349c567ac94D475A46209770A10f0f374'
);

export default instance;