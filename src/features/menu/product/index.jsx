import { useParams } from 'react-router-dom';
import './style.scss';
import data from "data/MenuAllDatas";
import { useState } from 'react';
import { CiCoffeeCup } from 'react-icons/ci';
import { customizations } from 'utils/customize';
import { AiFillStar } from 'react-icons/ai';
import { SimpleButton } from 'styled/buttons';
import { BsChevronDown } from 'react-icons/bs';
import basket from 'assets/icons/basket.svg';
import { Container } from 'styled/containers';
import { SlLocationPin } from 'react-icons/sl';

export const Product = () => {
  const id = useParams().id
  const product = data.products.filter(item => item.id === parseInt(id))[0]
  const [sizeIndex, setSizeIndex] = useState(1)
  const selectedSize = product.sizes[sizeIndex]

  console.log(product)
  return (
    <div className="product">
      <div className="bread-crumb">
        <Container pb='1.6rem' p_m='10rem 2.4rem' p_l='13.1rem 4rem'>
          Menu / {product.subcategory} / <span> {product.name}</span>
        </Container>
      </div>
      <div className='product-info'>
        <Container p_m='10rem 2.4rem' p_l='13.1rem 4rem'>
          <div className="product-content">
            <div className="img-wrapper">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="content-text">
              <h2>{product.name}</h2>
              <p>{selectedSize.calories}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="options-container">
        <Container p_m='10rem 2.4rem' p_l='13.1rem 4rem'>
          <div className="options">
            <div className="size-options">
              <h3 className="title">
                Size options
              </h3>
              <form className="buttons">
                {
                  product.sizes.map((item, index) =>
                    <div className="form-group">
                      {console.log(index === sizeIndex)}
                      <input
                        type="radio"
                        name='size'
                        id={item.size.toLowerCase()}
                        checked={index === sizeIndex}
                        onChange={() => setSizeIndex(index)}
                      />
                      <label htmlFor={item.size.toLowerCase()}>
                        <span className="icon-wrapper">
                          <CiCoffeeCup className={item.size.toLowerCase()} />
                        </span>
                        <h4>{item.size}</h4>
                        <p>{item.capacity}</p>
                      </label>
                    </div>
                  )
                }
                <p className="location">
                  <SlLocationPin />
                  Select a store to view availability
                </p>
              </form>
            </div>
            <div className="customizations">
              <h3 className="title">Customizations</h3>

              <ul>
                {customizations.map(
                  item => (
                    <li className='customize-category'>
                      <span>{item.title}</span>
                      <button>Edit</button>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="section-extra">
        <span>200 <AiFillStar /> item</span>
        <p>Starbucks Blonde Espresso infused with Partanna® extra virgin
          olive oil, steamed with oatmilk. Velvety smooth. Deliciously lush.</p>
        <h5>330 calories, 6g sugar, 23g fat <button className='info'>i</button></h5>
        <SimpleButton color="#fff">Full nutrition & ingredients list</SimpleButton>
      </div>
      <div className='section-footer'>
        <div className="location">
          <div className="content">
            <p>For item availability</p>
            <h4>Choose location</h4>
          </div>
          <button>
            <BsChevronDown />
          </button>
        </div>
        <div className="basket">
          <div className="icon-wrapper">
            <img src={basket} alt="basket" />
            <span>1</span>
          </div>
        </div>
      </div>
    </div>


  )
}
