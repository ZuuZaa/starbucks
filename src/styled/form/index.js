import styled from 'styled-components';

export const Form = styled.form`
margin: 0 auto;
max-width: 50rem;


@media screen and (min-width: 320px) {
    border-radius: 0;
    box-shadow: none;
    padding: 1.6rem;
}
@media screen and (min-width: 768px) {
    padding: 3.2rem;
    border-radius: 1.2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,.07), 0 4px 5px rgba(0,0,0,.06), 0 1px 10px rgba(0,0,0,.1);
}
`

export const Fieldset = styled.fieldset`
border: none;
outline: none;
margin-block: 1.6rem 0.8rem;
padding-top: 1.2rem;
input {
    border-radius: 0.8rem;
    border: none;
    outline: none;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.4);
    display: block;
    width: 100%;
    padding: 1.2rem 1.6rem;
}

.asterix {
    color: #00754a;
    font-size: 1.6rem;
    margin-right: 0.4rem;
}


&:has(input:focus), &:has(.filled) {
    label {
        transform: translateY(-3rem);
        font-size: 1.2rem;
    }
    .asterix {
        display: none;
    }
}

.input-wrapper {
    position: relative;

    .extra {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 1em;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .show {
        font-size: 2.2rem;
        padding-inline: 0.5em;
        opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:is(.empty) {
        position: relative;
        input {
            box-shadow: 0 0 0 1px #d62b1f;
        }

        .error {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            background: #d62b1f;
            border-radius: 50%;
            font-size: 1.6rem;
            width: 1.8rem;
            height: 1.8rem;
        }
    }
}

.error-messages {
    font-size: 1.4rem;

    li {
        position: relative;
        padding-left: 2.2em;
        padding-top: 0.5em;

        &::before {
            content: 'x';
            position: absolute;
            font-size:1.6rem;
            top: 0.3em;
            left: 0.5em;
            color: #d62b1f;
            padding-inline: 0.2em;
        }
    }
}

label {
    position: absolute;
    background: #fff;
    color: rgba(0,0,0,.87);
    font-weight: 400;
    user-select: none;
    padding-inline: 0.5rem;
    z-index:2;
    top: 50%;
    left: 1.6rem;
    transform: translateY(-50%);
    transition: transform 0.5s;
    font-size: 1.6rem;
}
`