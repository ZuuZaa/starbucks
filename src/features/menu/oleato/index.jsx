import { Link, useParams } from 'react-router-dom';
import './style.scss';
import data from "data/MenuAllDatas";
import { Sidebar } from '../sidebar';

export const Oleato = () => {

    const category = useParams().cat
    const subcat = useParams().subcat.split('-').join(" ");
    const products = data.products.filter(item => item.subcategory.toLowerCase() === subcat)

    return (
        <div className="menu-container">
            <Sidebar />
            <div className="oleato">
                <div className="bread-crumps">
                  <Link to="/menu">menu</Link> / <Link to="/menu">{category}</Link> / {subcat}
                </div>
                <h2>
                    {subcat}
                </h2>
                <ul>
                    {
                        products.map(item => (
                            <li key={item.id}>
                                <Link to={`/menu/${item.id}`}>
                                    <div className="img-wrapper">
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <p>{item.name}</p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
