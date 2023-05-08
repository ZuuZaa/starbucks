import './style.scss';
import { Container, Section } from 'styled/containers'
import { extras } from 'utils/rewards';
import { useState } from 'react';
import { Modal } from 'components/modal';
import { SimpleLink } from 'styled/buttons';

export const Extras = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [activeItem, setactiveItem] = useState(null)
    const clickHandler = (e) => {
        setModalIsOpen(true)
        setactiveItem(extras.find(item => item.id === e.target.id).items)
    }
    return (
        <Section className='extras-section'>
            <Container>
                <div className="section-header">
                    <div className="section-header">
                        <h2>Endless Extras</h2>
                        <p>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
                    </div>
                </div>
                <ul className='extras-list'>
                    {extras.map(item =>
                        <li key={item.id} className='extras-item'>
                            <div className="img-wrapper">
                                <img src={item.img} alt="coffe" />
                            </div>
                            <div className="extras-content">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <SimpleLink className="learn-more" id={item.id} onClick={(e) => clickHandler(e)}>Learn more</SimpleLink>
                            </div>
                        </li>

                    )}
                    {modalIsOpen && <Modal className='modal modal-open' items={activeItem} setModal={setModalIsOpen}>modal</Modal>}
                </ul>
            </Container>
        </Section>
    )
}
