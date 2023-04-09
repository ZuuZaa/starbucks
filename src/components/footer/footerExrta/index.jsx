import './style.scss';
import { Link } from 'react-router-dom'
import { footerExtra } from 'utils'

export const FooterExtra = () => {
  return (
    <ul className='footer-extra'>
        {
            footerExtra.map(
                item => <li key={item.id}>
                    <Link to={item.url}>{item.name}</Link>
                </li>
            )
        }
    </ul>
  )
}
