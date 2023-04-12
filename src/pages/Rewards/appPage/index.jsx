import { Link } from 'react-router-dom'
import { FilledButton } from 'styled/buttons'
import './style.scss'

export const RewardsApp = () => {
  return (
    <>
      <nav className='rewards-app-navbar'>
        <Link to='/rewards'><h2>starbucks &copy; rewards</h2></Link>
          <FilledButton to='/join' p='0.7rem 1.6rem'>Join now</FilledButton>
      </nav>
    </>
  )
}
