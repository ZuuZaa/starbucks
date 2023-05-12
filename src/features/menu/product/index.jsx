import { useParams } from 'react-router-dom';
import './style.scss';
import data from "data/MenuAllDatas";
import { useState } from 'react';
import { customizations } from 'utils/customize';
import { AiFillStar } from 'react-icons/ai';
import { EditButton, FilledButton, SimpleButton } from 'styled/buttons';
import { BsChevronDown } from 'react-icons/bs';
import basket from 'assets/icons/basket.svg';
import { Container } from 'styled/containers';
import { SlLocationPin } from 'react-icons/sl';


export const Product = () => {
  const id = useParams().id
  const product = data.products.filter(item => item.id === parseInt(id))[0]
  const [sizeIndex, setSizeIndex] = useState(1)
  const selectedSize = product.sizes[sizeIndex]

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
        <Container pb='3.2rem' p_m='10rem 2.4rem' p_l='13.1rem 4rem'>
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
                        <div className="icon-wrapper">
                          <img
                            src={
                              index === sizeIndex
                                ? 'https://www.starbucks.com/app-assets/c6d5ff0dfccfc8966d3ad8ab2331921f.svg'
                                : 'https://www.starbucks.com/app-assets/76b8892b0db8f5d411988fe1bbbe4141.svg'
                            }
                            alt='cup size'
                            className={item.size.toLowerCase()} />
                        </div>
                        <h4>{item.size}</h4>
                        <p>{item.capacity}</p>
                      </label>
                    </div>
                  )
                }
              </form>
              <p className="location">
                <SlLocationPin />
                Select a store to view availability
              </p>
            </div>
            <div className="customizations">
              <h3 className="title">Customizations</h3>

              <ul>
                {customizations.map(
                  item => (
                    <li className='customize-category'>
                      <EditButton>
                        <span>{item.title}</span>
                        <button>Edit</button>
                      </EditButton>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="section-extra">
        <Container pb='3.2rem' p_m='10rem 2.4rem' p_l='13.1rem 4rem'>
          <div className="extra-content">
            <span>200 <AiFillStar /> item</span>
            <p>Starbucks Blonde Espresso infused with Partanna® extra virgin
              olive oil, steamed with oatmilk. Velvety smooth. Deliciously lush.</p>
            <h5>330 calories, 6g sugar, 23g fat</h5>
            <SimpleButton color="#fff">Full nutrition & ingredients list</SimpleButton>
          </div>
        </Container>
      </div>
      <div className='section-footer'>
        <FilledButton p='1.8rem 2.4rem' className='add-btn'>Add to Order</FilledButton>
        <Container pb='3.2rem' p_m='20%' p_l='30%'>
          <div className="footer-content">
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
        </Container>
      </div>
    </div>
  )
}
