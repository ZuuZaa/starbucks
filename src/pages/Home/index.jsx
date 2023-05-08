import { Link } from 'react-router-dom';
import { SimpleButton } from 'styled/buttons';
import { HomePageCard } from 'styled/cards';
import { Container } from 'styled/containers';
import { homeDetails } from 'utils/home';
import './style.scss';

export const Home = () => {
  return (
    <main className='page home-page'>
      <Container p_s='0' p_m='0' p_l='0' p_xl='7%' pb='4rem'>
        <ul className='home-page__content'>
          {
            homeDetails.map(item =>
              <li className='content-item' key={item.id}>
                <HomePageCard bg={item.color}>
                  <div className="img-wrapper">
                    <img src={item.img} alt="coffee" />
                  </div>
                  <div className="card-content">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <SimpleButton color='#1e3932' to={item.link} m_top='3.2rem'>
                      {item.btnText}
                    </SimpleButton>
                  </div>
                </HomePageCard>
              </li>)
          }
        </ul>
        <div className='home-page__extra'>
          <p>
            *At participating stores. Some restrictions apply. See <Link to='rewards'>starbucks.com/rewards</Link>
          </p>
          <p>**Impossible is a trademark of Impossible Foods Inc. Used under license.</p>
        </div>
      </Container>
    </main>
  )
}
