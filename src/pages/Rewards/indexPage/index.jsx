import { Banner } from "features/rewards/banner";
import { SimpleButton } from "styled/buttons";
import './style.scss';

export const Rewards = () => {

  return (
    <>
    <nav className='rewards-navbar'>
      <h2>starbucks &copy; rewards</h2>
      <div className="join-btn">
        <SimpleButton to='app' p='0.7rem 1.6rem'>Join in the app</SimpleButton>
      </div>
    </nav>
    <Banner/>
    </>
  )
}
