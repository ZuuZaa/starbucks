import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { SimpleLink } from 'styled/buttons';
import './style.scss';


export const Slider = ({ data, title }) => {

  const [sliderIndex, setSliderIndex] = useState(0)
  const [size, setSize] = useState(4);
  const sliderSize = size * sliderIndex;

  const prev = () => sliderSize > 0 && setSliderIndex(sliderIndex - 1);
  const next = () => sliderSize < data.length - size && setSliderIndex(sliderIndex + 1); console.log("click")


  useEffect(() => {
    const handleWindowResize = () => {
      const screen = window.innerWidth
      screen > 1024 ? setSize(4): screen < 1024 && screen > 768 ? setSize(3) : setSize(2)
      console.log(size)
    };

    window.addEventListener('resize', handleWindowResize);

  }, [size]);


  return (
    <div className='slider-main'>
    <div className="slider-header">
    <h2>{title}</h2>
  <SimpleLink>see all</SimpleLink>
  </div>
    <div className='slider-container'>

      <div className="handle handle--left">
        <button onClick={prev} className={sliderIndex > 0 ? 'visible-button' : 'hidden-button'}>
          <BsChevronLeft />
        </button>
      </div>
      <div className="slider" style={{ transform: `translateX(calc(${sliderIndex} * -100%))` }}>
        {
          data.map(url =>
            <Link to="/"  key={nanoid()}>
              <img src={url} alt="gift card" />
            </Link>
          )
        }
      </div>
      <div className="handle handle--right">
        <button onClick={next} className={data.length / size > 1 ? 'visible-button' : 'hidden-button'}>
          <BsChevronRight />
        </button>
      </div>
    </div>
    </div>
  )
}
