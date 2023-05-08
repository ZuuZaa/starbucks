import { Container, Section } from 'styled/containers';
import { starters } from 'utils/rewards';
import './style.scss';


export const Starters = () => {
    return (
        <Section className='starters-section'>
            <Container>
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
                                <h3>{item.title}</h3>
                                <p dangerouslySetInnerHTML={{ __html: item.description }} />
                            </div>
                        </li>
                    )}
                </ul>
            </Container>
        </Section>
    )
}
