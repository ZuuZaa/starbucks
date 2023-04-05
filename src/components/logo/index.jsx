import { LogoStyled } from 'styled/links';
import logo from "assets/icons/logo.svg";
import { ImageWrapper } from 'styled/image';

export const Logo = () => {
    return (
        <LogoStyled to="/">
            <ImageWrapper width='5rem' height='5rem'>
                <img src={logo} alt="logo" />
            </ImageWrapper>
        </LogoStyled>
    )
}
