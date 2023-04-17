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
padding-inline: ${({ p }) => p};
padding-block: ${({ pb }) => pb};

@media screen and (min-width: 320px) {
    padding-inline: ${({ p_s }) => p_s};
    padding-block: ${({ pb_s }) => pb_s};
}

@media screen and (min-width: 772px) {
    padding-inline: ${({ p_m }) => p_m};
    padding-block: ${({ pb_m }) => pb_m};
}

@media screen and (min-width: 1024px) {
    padding-inline: ${({ p_l }) => p_l};
    padding-block: ${({ pb_l }) => pb_l};
}
@media screen and (min-width: 1440px) {
    padding-inline: ${({ p_xl }) => p_xl};
    padding-block: ${({ pb_xl }) => pb_xl};
}
`


export const Section = styled.section`

    .section-header {
        text-align: center;
    }
    h2 {
        font-weight: 600;
        line-height: 1.385;
    }
    h3 {
        font-weight: 600;
    }
    p {
        padding-top: 1.6rem;
        line-height: 1.5;

        a {
            color: #006241;
            text-decoration: underline;

            &:hover {
                text-decoration: none;
            }
        }
    }

@media screen and (min-width: 320px) {

    padding-block: 3.2rem;

    .section-header {
        .header-container {
        width: 100%;
        padding-inline: 1.6rem;
        }
    }

    h2 {
        font-size: 2.4rem;
    }
    h3 {
        font-size: 1.9rem;
    }
    p {
        font-size: 1.4rem;
    }
}

@media screen and (min-width: 768px) {

    padding-block: 6.4rem;  
    .section-header {
        .header-container {
            width: 50%;
            margin: auto;
            }
    }          
    h2 {
        font-size: 2.8rem;
    }
    h3 {
        font-size: 2.4rem;
        line-height: 1.5;
    }
    p {
        font-size: 1.6rem;
    }
}

@media screen and (min-width: 1024px) {

    .section-header ..header-container  {
        width: calc(100% / 1.9);
    }          
}
`



