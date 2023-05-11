import './style.scss';
import data from "data/MenuAllDatas";

export const Products = () => {
  console.log(data)
  return (
    <div className='all-products'>
      <h1 className='section-header'>Menu</h1>
      <ul>
        {
          data.allCategory.map(
            item =>
              <li>
                <h2 className='category-name'>{item.category}</h2>
                <ul className="products-list">
                  {item.products.map(
                    product =>
                      <li>
                        <div className="img-wrapper">
                          <img src={product.img} alt="coffee" />
                        </div>
                        <p>{product.name}</p>
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
