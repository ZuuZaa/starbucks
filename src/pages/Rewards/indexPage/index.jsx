import { Banner } from "features/rewards/banner";
import { Cash } from "features/rewards/cash";
import { Extras } from "features/rewards/extras";
import { Favorites } from "features/rewards/favorites";
import { Starters } from "features/rewards/starters";
import { SimpleButton } from "styled/buttons";
import './style.scss';

export const Rewards = () => {

  return (
    <>
      <nav className='rewards-navbar'>
        <h2>
          <span className="title">starbucks </span>
          <span> rewards</span>
        </h2>
        <div className="join-btn">
          <SimpleButton to='app' p='0.7rem 1.6rem'>Join in the app</SimpleButton>
        </div>
      </nav>
      <Banner />
      <Starters />
      <Favorites />
      <Extras />
      <Cash/>
    </>
  )
}
