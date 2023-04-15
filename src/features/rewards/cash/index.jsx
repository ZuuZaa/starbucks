import './style.scss';
import { Container, Section } from 'styled/containers'
import { cash } from 'utils/rewards';

export const Cash = () => {
    return (
        <Section className='cash-section'>
            <Container p_s='1.6rem' p_m='2.4rem' p_l='4rem'>
                <div className="section-header">
                    <h2>Cash or card, you earn Stars</h2>
                    <p>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards</p>
                </div>
                <ul className="cash-card-list">
                    {
                        cash.map(item =>
                            <li className='cash-row'>
                                <div className='row-title'>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                                <ul className='items'>
                                    {item.items.map(
                                        obj =>
                                            <li className='items-col'>
                                                <div className="img-wrapper">
                                                    <img src={obj.img} alt="card" />
                                                </div>
                                                <div className="content">
                                                    <h3>{obj.title}</h3>
                                                    <p>{obj.text}</p>
                                                </div>
                                            </li>
                                    )}
                                </ul>
                            </li>)
                    }
                </ul>
            </Container>
        </Section>
    )
}
