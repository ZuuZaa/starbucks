import { nanoid } from 'nanoid';
import './style.scss';
import data from "data/MenuAllDatas";
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    console.log(data)
    return (
        <div className='menu-sidebar'>
            <ul>
                {
                    data.allCategory.map(
                        item =>
                            <li key={nanoid()}>
                                <h3 className='category-name' >{item.category}</h3>
                                <ul className='products'>
                                    {item.products.map(
                                        product =>
                                            <li className='product-name' key={nanoid()}>
                                                <Link to={`/menu/${product.link}`}>
                                                    {product.name}
                                                </Link>
                                            </li>
                                    )}
                                </ul>
                            </li>
                    )
                }
            </ul>
        </div>
    )
}
