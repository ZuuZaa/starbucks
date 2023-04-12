import styled from 'styled-components';

export const HomePageCard = styled.div`
background: ${({ bg }) => bg};
display: flex;

.img-wrapper {
    display: flex;
    align-items: center;

    img {
        width: 100%;
        object-fit: cover;
    }
}

.card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-block: 3.2rem;
    color: #1e3932;
    text-align: center;

        h2 {
            font-weight: 600;
            margin-bottom: 2.4rem;
        }
        p {
            font-weight: 400;
            line-height: 1.75;
            letter-spacing: -.01em;
        }
}

@media screen and (min-width: 320px) {

    flex-direction: column;
        .img-wrapper{
            width: 100%;
        }
        .card-content {
            width: 100%;
            padding-inline: 1.6rem;

            h2 {
                font-size: 2.4rem;
                line-height: 1.2;
                letter-spacing: 0.1rem;
            }
            p {
                font-size: 1.6rem;
            }

        }
}

@media screen and (min-width: 768px) {
    
        .img-wrapper{
            width: 50%;
        }
        .card-content {
            width: 50%;
            padding-inline: 2.4rem;

            h2 {
                font-size: 2.8rem
            }
            p {
                font-size: 1.9rem
            }

        }
}

@media screen and (min-width: 1024px) {

    .card-content {
        padding-inline: 4rem;

        h2 {
            font-size: 5rem;
            letter-spacing: 0.2rem;
            line-height: 1.2;
        }
    }
}

@media screen and (min-width: 1440px) {

    .card-content {
        padding-inline: 4.8rem;
    }
}
`