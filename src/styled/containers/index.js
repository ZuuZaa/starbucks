import styled from 'styled-components';

export const FlexBox = styled.div`
display: flex;
flex-direction: ${({ fd }) => fd};
justify-content: ${({ jc }) => jc};
align-items: ${({ ai }) => ai};

@media screen and (min-width: 320px) {
    flex-direction: ${({ fd_s }) => fd_s};
    justify-content: ${({ jc_s }) => jc_s};
    align-items: ${({ ai_s }) => ai_s};
}

@media screen and (min-width: 772px) {
    flex-direction: ${({ fd_m }) => fd_m};
    justify-content: ${({ jc_m }) => jc_m};
    align-items: ${({ ai_m }) => ai_m};
}

@media screen and (min-width: 1024px) {
    flex-direction: ${({ fd_l }) => fd_l};
    justify-content: ${({ jc_l }) => jc_l};
    align-items: ${({ ai_l }) => ai_l};
}
`

export const Container = styled.div`

@media screen and (min-width: 320px) {
    padding-inline: ${({ p_s }) => p_s};
}

@media screen and (min-width: 772px) {
    padding-inline: ${({ p_m }) => p_m};
}

@media screen and (min-width: 1024px) {
    padding-inline: ${({ p_l }) => p_l};
}
`