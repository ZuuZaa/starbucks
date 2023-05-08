import './style.scss';
import { SimpleButton } from 'styled/buttons';

export const Support = () => {
  return (
    <div className='support-section'>
      <h2>GIFT CARD SUPPORT</h2>
      <p>Use the links below to manage eGifts you have sent or received, or view our full Card Terms & Conditions.</p>
      <div className="buttons-container">
        <SimpleButton m_top='1.6rem' target='_blank' to='https://starbucks.cashstar.com/self_service/v2/register/'>eGift Support</SimpleButton>
        <SimpleButton m_top='1.6rem' target='_blank' to='https://www.starbucks.com/terms/manage-gift-cards/'>See Terms & Conditions</SimpleButton>
        <SimpleButton m_top='1.6rem' target='_blank' to='https://customerservice.starbucks.com/sbux'>eGift FAQs</SimpleButton>
      </div>
    </div>
  )
}
