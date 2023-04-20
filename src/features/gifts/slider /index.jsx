import './style.scss';

export const Slider = ({data}) => {
  return (
    <div className='slider-container'>
      <div className="handle left-handle"></div>
      <div className="slider">
        <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
        <img src="https://placehold.co/600x400/EEE/31343C" alt="img" />
      </div>
      <div className="handle right-handle"></div>
    </div>
  )
}
