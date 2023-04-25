import './style.scss';
import bulk from 'assets/images/gifts/bulk.webp';
import { SimpleButton } from 'styled/buttons';

export const Bulk = () => {
  return (
    <div className='bulk-section'>
    
    <div className="img-wrapper">
        <img src={bulk} alt="bulk gift card" />
    </div>
    <div className="bulk-content">
        <h2>Gift Cards in Bulk</h2>
        <p>There’s an easier way to buy Starbucks Cards in bulk! Give a Starbucks Card to gift, reward, incentivize, or show appreciation towards your customers, clients and team members.</p>
        <SimpleButton m_top='1.6rem'>Shop now</SimpleButton>
    </div>
    </div>
  )
}
