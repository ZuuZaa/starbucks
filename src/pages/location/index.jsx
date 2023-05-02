import './style.scss';
import { BsSearch } from 'react-icons/bs'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { SimpleButton, SimpleLink } from 'styled/buttons'

export const Location = () => {
  return (
    <div className="location-page">
      <div className="page-container">

        <div className="info-part">
          <div>
            <div className="search-box">
              <div className='search-input'>
                <input type="text" placeholder='Find a store' />
                <BsSearch />
              </div>
              <SimpleButton className='filter-button' color='hsl(158 100% 23%)' bg='hsl(158 100% 23% / 10%)'>Filter</SimpleButton>
            </div>
            <article class="location-content">
              <div>
                <h3>We are unable to access your exact location</h3>
                <p>To find a Starbucks store, use the search feature, navigate using the map, or turn on location services.</p>
              </div>
            </article>
          </div>
          <ul className='link-list'>
            <li>
              <SimpleLink>
                Privacy Notice <HiOutlineExternalLink />
              </SimpleLink>
            </li>
            <li>
              <SimpleLink>
                Terms of Use <HiOutlineExternalLink />
              </SimpleLink>
            </li>
            <li>
              <SimpleLink>
                Do Not Share My Personal Information <HiOutlineExternalLink />
              </SimpleLink>
            </li>
          </ul>
        </div>

        <div class="mapouter">
          <iframe
            class="gmap_canvas"
            src="https://maps.google.com/maps?q=starbucks nizami&t=&z=10&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
          </iframe>
        </div>
      </div>
    </div>
  )
}
