import { Container, Section } from 'styled/containers';
import { starters } from 'utils/rewards';
import './style.scss';


export const Starters = () => {
    return (
        <Section>
            <Container p_s='1.6rem' p_m='2.4rem' p_l='4rem'>
                <div className="section-header">
                    <h2>Getting started is easy</h2>
                    <p>Earn Stars and get rewarded in a few easy steps.</p>
                </div>
                <ul className='starters'>
                    {starters.map(
                        item => <li className='starter' key={item.id}>
                            <div className="img-wrapper">
                                <img src={item.img} alt='starter number' />
                            </div>
                            <div className="starter-content">
                                <h4>{item.title}</h4>
                                <p dangerouslySetInnerHTML={{ __html: item.description }} />
                            </div>
                        </li>
                    )}
                </ul>
            </Container>
        </Section>
    )
}
