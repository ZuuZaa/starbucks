import { starters } from 'utils/rewards';
import './style.scss';


export const Starters = () => {
    return (
        <section className='getting-start'>
            <div className="section-title">
                <h2>Getting started is easy</h2>
                <p>Earn Stars and get rewarded in a few easy steps.</p>
            </div>
            <ul>
            {starters.map(
                item => <li key={item.id}>
                    <span>{item.id}</span>
                    <h4>{item.title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: item.description }} />                </li>
            )}
            </ul>
        </section>
    )
}
