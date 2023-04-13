import { useEffect, useState } from 'react';
import { Section } from 'styled/containers';
import { favorites } from 'utils/rewards';
import { RiStarSFill } from 'react-icons/ri';
import './style.scss';

export const Favorites = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [activeItem, setActiveItem] = useState(favorites[0]);

    useEffect(() => {
        setActiveItem(favorites[activeIndex])
        console.log(activeItem)
    }, [activeIndex])
    return (
        <Section className='favorites-section'>
            <div className="section-header favorites-header">
                <h2>Get your favorites for free </h2>
                <ul className='fav-nav'>
                    {
                        favorites.map((item, index) =>
                            <li key={item.id} className={index === activeIndex ? 'active' : ''}>
                                <button onClick={() => setActiveIndex(index)}>
                                    {item.star}
                                    <span className='star'><RiStarSFill /></span>
                                </button>
                            </li>)
                    }
                </ul>
            </div>
            <div className="favorites-content">
                <div className="img-wrapper">
                    <img src={activeItem.img} alt="coffee" />
                </div>
                <div className='content-text'>
                    <h3>{activeItem.title}</h3>
                    <p>{activeItem.text}</p>
                </div>
            </div>
        </Section>
    )
}
