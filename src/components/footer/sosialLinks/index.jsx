import { Link } from 'react-router-dom';
import { sosialLinks } from 'utils';
import './style.scss';


export const SosialLinks = () => {

  return (
    <ul className='sosial-links-list'>
        {sosialLinks.map(item => {
            return(
            <li className='sosial-link' key={item.id}>
                <Link to={item.url} >
                    {item.icon}
                </Link>
            </li>
            )
        })}
    </ul>
  )
}
