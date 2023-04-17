import { Link } from 'react-router-dom';
import { FilledButton } from 'styled/buttons';
import './style.scss';

export const Banner = () => {
    return (
        <section className='banner'>
            <div className="banner__content">
                <h1>free coffee <br/> is a tap away</h1>
                <p>Join now to start earning Rewards.</p>
                <FilledButton to='/join'>Join now</FilledButton>
                <p>
                    <span className='only-desktop'>Or </span> 
                    <Link to='app'>join in the app</Link>
                    <span className='only-desktop'> for the best experience</span>
                    
                </p>
            </div>
        </section>
    )
}
