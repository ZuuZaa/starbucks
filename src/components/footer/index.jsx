import { Container } from 'styled/containers';
import { footerLinks } from 'utils';
import { Dropdown } from './dropdown';
import { FooterExtra } from './footerExrta';
import { SosialLinks } from './sosialLinks';
import './style.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
        <Container p_s='2.4rem'>
            <nav className='footer-navigation'>
                {footerLinks.map(item => <Dropdown key={item.id} {...item}/>)}
            </nav>
            <hr />
            <SosialLinks/>
            <FooterExtra/>
            <p> &copy; 2023 Starbucks Coffee Company. All rights reserved.</p>
        </Container>
    </footer>
  )
}
