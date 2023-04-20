import { nanoid } from 'nanoid';
import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './style.scss';

export const Slider = ({ data }) => {


  const [sliderIndex, setSliderIndex] = useState(0)

  const sliderSize = 4 * sliderIndex;



  const prev = () => sliderSize > 0 && setSliderIndex(sliderIndex - 1);
  const next = () =>  sliderSize < data.length - 4 &&  setSliderIndex(sliderIndex + 1); console.log("click")



  return (
    <div className='slider-container'>
      <div className="handle left-handle"> 
        <button onClick={prev} className={sliderIndex > 0 ? 'visible-button' : 'hidden-button'}>
          <BsChevronLeft  />
        </button>
      </div>
      <div className="slider" style={{ transform: `translateX(calc(${sliderIndex} * -100%))` }}>
        {
          data.map(url=>
            <Link to="/" key={nanoid()}>
              <img src={url} alt="img" />
            </Link>
          )
        }
      </div>
      <div className="handle right-handle">
        <button onClick={next} className={ data.length / 4 > 1 ? 'visible-button' : 'hidden-button'}>
          <BsChevronRight/>
        </button>
      </div>
    </div>
  )
}
