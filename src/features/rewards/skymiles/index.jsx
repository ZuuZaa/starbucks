import './style.scss';
import skymilesLogo from 'assets/images/rewards/delta-skymiles.png';
import { FilledButton, SimpleLink } from 'styled/buttons';
import { Link } from 'react-router-dom';
import star_1 from 'assets/images/rewards/star1.svg';
import star_2 from 'assets/images/rewards/star2.svg';
import star_sm_1 from 'assets/images/rewards/starS1.svg';
import star_sm_2 from 'assets/images/rewards/starS2.svg';


export const SkyMiles = () => {
  return (
    <section className='skymiles-section'>
      <div className='section-container'>
        <div className="starts-container-left">
          <div className="destktop-img">
            <img src={star_1} alt="star" />
          </div>
          <div className="mobile-img">
            <img src={star_sm_1} alt="star" />
          </div>
        </div>
        <div className="section-content">
          <h2>Keep the Rewards Coming</h2>
          <p className='description'>The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.</p>
          <div className="img-wrapper">
            <img src={skymilesLogo} alt="sky miles" />
          </div>
          <p>
            <SimpleLink to='https://www.deltastarbucks.com/content/starbucks/en/overview.html?mkcpgn=dipd-sbux7042' target="_blank" rel="noopener noreferrer" className='link'>Link your Delta SkyMiles® </SimpleLink>
            and Starbucks® Rewards accounts to earn 1 mile per $1* spent at Starbucks and double Stars on Delta travel days.
          </p>
          <FilledButton to='/join' m_top='2.4rem'>Join Starbucks® Rewards</FilledButton>
        </div>
        <div className="starts-container-right">
          <div className="destktop-img">
            <img src={star_2} alt="star" />
          </div>
          <div className="mobile-img">
            <img src={star_sm_2} alt="star" />
          </div>
        </div>
      </div>
    </section>
  )
}
