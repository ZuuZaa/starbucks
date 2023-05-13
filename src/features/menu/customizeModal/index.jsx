import { RxCross1 } from 'react-icons/rx';
import './style.scss';
import { FilledButton } from 'styled/buttons';

export const CustomizeModal = ({ open, setOpen, content }) => {
    console.log("modal", content)
    const closeModal = () => setOpen(false);
    return (
        <div
            className={open ? 'customize-modal open' : 'customize-modal'}
            onClick={closeModal}
        >
            <div className="customize-modal__container" onClick={(e) => e.stopPropagation()}>

                <div className="customize-modal__content">
                    <div className="cross-btn-wrapper">
                        <button className='modal-close' onClick={closeModal}>
                            <RxCross1 />
                        </button>
                    </div>
                    <div className="customize-field">
                        <h1 className='modal-title'>{content.title}</h1>
                        <ul>
                            {
                                content.categories?.map(item => (
                                    <li>
                                        <h3>{item.name}</h3>
                                        <ul className='categories'>
                                            {item.items.map(
                                                item => (
                                                    <li className='category-item'>
                                                        {item}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </li>
                                ))
                            }
                            { }
                        </ul>
                    </div>
                </div>
                <div className="done-btn-wrapper">
                    <FilledButton className='done-btn' p='1.8rem 2.4rem' onClick={closeModal}>Done</FilledButton>
                </div>

            </div>
        </div>
    )
}
