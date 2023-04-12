import { Link } from 'react-router-dom';
import { FilledButton } from 'styled/buttons';
import './style.scss';

export const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner__content">
                <h1>free coffee is a tap away</h1>
                <p>Join now to start earning Rewards.</p>
                <FilledButton to='/join' bg='#00754a'>Join now</FilledButton>
                <p>
                    Or
                    <Link to='app'>join in the app</Link>
                    for the best experience
                </p>
            </div>
        </div>
    )
}
