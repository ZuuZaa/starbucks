import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsChevronDown } from 'react-icons/bs'
import './style.scss';


export const Dropdown = ({ title, item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const [desktopScreen, setDesktopScreen] = useState(mediaQuery.matches);

    const handleResize = () => {
        console.log(desktopScreen);
        setDesktopScreen(mediaQuery.matches);
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize, false);

        return () => window.removeEventListener("resize", handleResize);
    }, [desktopScreen]);



    return (
        <div className='dropdown-container'>
            <div className="title" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                {
                    !desktopScreen &&
                    <button className={isOpen ? 'chevron up' : 'chevron down'}>
                        <BsChevronDown />
                    </button>
                }
            </div>
            <ul className='dropdown'>
                {desktopScreen &&
                    item.map(item => <li key={item.id}>
                        <Link to={item.path}>{item.name}</Link>
                    </li>)
                }
                {!desktopScreen && isOpen &&
                    item.map(item => <li key={item.id}>
                        <Link to={item.path}>{item.name}</Link>
                    </li>)
                }
            </ul>
        </div>
    )
}
