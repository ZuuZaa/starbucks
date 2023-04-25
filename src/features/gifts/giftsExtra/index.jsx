import { HiOutlineExternalLink } from 'react-icons/hi';
import { FilledButton, SimpleButton, SimpleLink } from 'styled/buttons';
import './style.scss';

export const GiftsExtra = () => {
    return (
        <div className='gifts-extra'>
            <div className="gifts-extra__content">
                <h2>Got a gift card?</h2>
                <div className="buttons-container">
                    <p>Earns 2★Stars per $1</p>
                    <div className="buttons">
                        <SimpleButton target='_blank' to='https://app.starbucks.com/account/cards' m_right='1.6em' >Add or Reload</SimpleButton>
                        <FilledButton target='_blank' to='https://www.starbucks.com/gift' bg='#000'>Check balance</FilledButton>
                    </div>
                </div>
            </div>
            <div className="gifts-extra__link">
                <SimpleLink target="_blank" to="https://www.starbucks.com/terms/manage-gift-cards/">
                    Card Terms & Conditions <HiOutlineExternalLink />
                </SimpleLink>
            </div>
        </div>
    )
}
