import React,{Component} from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {campaigns}
    }
    // We do this because in Next.Js, the componentDidMount method does not execute on the server side. So we need to fetch the data from the server.
    renderCampaigns(){
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description:
                // <Link route={`/campaigns/${address}`}>
                    <a>View Campaign</a>,
                    // </Link>),
                fluid: true
            }
        })
        return <Card.Group items={items} />;
    }
    render() {
        return(
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    {/* <Link route = '/campaigns/new'>
                        <a>
                        </a>
                    </Link> */}
                    <Button floated='right' content = "Create Campaign" icon = "add circle" primary/>
                    {this.renderCampaigns()}
                </div>
        </Layout>
        )
    }
}

export default CampaignIndex;

