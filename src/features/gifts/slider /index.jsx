import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './style.scss';

export const Slider = ({ data }) => {
  return (
    <div className='slider-container'>
      <div className="handle left-handle">
        <button>
          <BsChevronLeft />
        </button>
      </div>
      <div className="slider">
        <Link to="/">
          <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        </Link>
        <Link to="/">
          <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        </Link>
        <Link to="/">
          <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        </Link>
        <Link to="/">
          <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        </Link>
        <Link to="/">
          <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        </Link>
        <Link to="/">
          <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        </Link>
        <Link to="/">
          <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        </Link>
        <Link to="/">
          <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        </Link>
        <Link to="/">
          <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        </Link>
        <Link to="/">
          <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        </Link>
      </div>
      <div className="handle right-handle">
        <button>
          <BsChevronRight />
        </button>
      </div>
    </div>
  )
}
