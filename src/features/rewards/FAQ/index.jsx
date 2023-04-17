import './style.scss';
import { Container, Section } from 'styled/containers';
import { SimpleLink } from 'styled/buttons';
import { HiOutlineExternalLink } from 'react-icons/hi';

export const FAQs = () => {
    return (
        <Section className='faqs-section'>
            <div className="section-header">
                <div className="header-container">
                    <h2>Questions?</h2>
                    <p>
                        We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions <SimpleLink to='/'>
                            right over here
                            opens in new window
                            <HiOutlineExternalLink />
                        </SimpleLink>
                        .</p>
                </div>
            </div>
            <div className="faqs-content">
                <Container p_s='1.6rem' p_m='2.4rem' p_l='4rem' pb_s='3.2rem' pb_m='4rem'>
                    <div className="content-header">
                        <p>At participating stores. Restrictions apply.</p>
                        <p>* Excludes taxes and gratuities. At participating stores. Some restrictions apply. Flights purchased close to departure may not earn double Stars.</p>
                        <p>Stars and miles may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit <SimpleLink to='/'>
                            deltastarbucks.com/terms <HiOutlineExternalLink /></SimpleLink> .</p>
                    </div>
                    <div className="faqs-list">

                        <div className="row">
                            <div className="col">
                                <h3>EARNING STARS</h3>
                                <p>Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</p>
                                <p>Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.</p>
                                <p>Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</p>
                            </div>
                            <div className="col">
                                <h3>TERMS OF USE</h3>
                                <p>For full program details visit <SimpleLink to="/">starbucks.com/rewards/terms <HiOutlineExternalLink /></SimpleLink></p>
                                <p>Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks® Rewards Visa® Card: See your Card Rewards Program Agreement for more details.</p>
                                <p>Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the <SimpleLink to='/'>Starbucks Store Locator <HiOutlineExternalLink /></SimpleLink> and search for locations honoring “Redeem Rewards”.</p>
                                <p>Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3>BENEFITS</h3>
                                <p>Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</p>
                            </div>
                            <div className="col">
                                <h3>REDEEMING REWARDS</h3>
                                <p>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.</p>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>

        </Section>
    )
}
