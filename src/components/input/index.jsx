import { Fieldset } from 'styled/form';
import './style.scss';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';


export const Input = ({ id, type, label, error, hint, conditions }) => {


    const path = useLocation().pathname
    const [isEmpty, setIsEmpty] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [showPass, setShowPass] = useState(false);

    const blurHandler = () => inputValue === "" ? setIsEmpty(true) : setIsEmpty(false);

    const changeHandler = (e) => setInputValue(e.target.value.trim())

    const showPassword = () => setShowPass(!showPass);

    return (
        <Fieldset>
            <div className={isEmpty ? 'input-wrapper empty' : 'input-wrapper'}>
                <label htmlFor={id} className={inputValue === "" ? 'label' : 'filled'}>
                    <span className="asterix">*</span>
                    {label}
                </label>
                <input
                    id={id}
                    type={
                        type === 'password' ?
                            (showPass ? 'text' : 'password') : type
                    }
                    onBlur={blurHandler}
                    onChange={changeHandler}
                />
                <div className='extra'>
                    {type === 'password' &&
                        <div className="show" onClick={showPassword}>
                            {
                                showPass
                                    ? <BsEye />
                                    : <BsEyeSlash />
                            }
                        </div>
                    }
                    {isEmpty && <span className="error">x</span>}
                </div>

            </div>
            {
                isEmpty &&
                <ul className="error-messages">
                    <li>
                        <small>
                            {error}
                        </small>
                    </li>
                    {
                        path === '/join' &&
                        conditions?.map((msg, index) =>
                            <li key={index}>
                                <small>
                                    {msg}
                                </small>
                            </li>
                        )
                    }
                </ul>
            }


            {path === '/join' && <p className='hint'>{hint}</p>}


        </Fieldset>
    )
}
