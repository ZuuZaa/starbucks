import './style.scss';
import { ModalLayout } from 'styled/modal'
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { SimpleButton } from 'styled/buttons';

export const Modal = ({ items, setModal }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const closeModal = () => setModal(false);
    const nextItem = () => currentIndex < items.length && setCurrentIndex(currentIndex + 1)
    const previousItem = () => currentIndex >= 0 && setCurrentIndex(currentIndex - 1)



    return (
        <ModalLayout onClick={() => setModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="cross-icon" onClick={closeModal}>
                    <RxCross1 />
                </span>

                <div className="img-wrapper">
                    <img src={items[currentIndex].img} alt="modal" />
                </div>
                <h3 className="modal-title">{items[currentIndex].title}</h3>
                <p className="modal-text">{items[currentIndex].text}</p>
                <nav className="modal-nav">
                    <span className={currentIndex > 0 ? 'visible-icon chevron' : 'hidden-icon chevron'} onClick={previousItem}>
                        <BsChevronLeft />
                    </span>
                    <ul className='dots'>
                        {items.map((item, index) =>
                            <li key={item.id}><span className={index === currentIndex ? 'active-dot dot' : 'dot'} onClick={() => { setCurrentIndex(index) }}></span></li>
                        )}
                    </ul>
                    <span className={currentIndex < items.length - 1 ? 'visible-icon chevron' : 'hidden-icon chevron'} onClick={nextItem}>
                        <BsChevronRight />
                    </span>
                    {currentIndex === items.length - 1 && <SimpleButton className='ok-btn' p='0.7rem 1.6rem' onClick={closeModal}>ok</SimpleButton>}
                </nav>

            </div>
        </ModalLayout>
    )
}
