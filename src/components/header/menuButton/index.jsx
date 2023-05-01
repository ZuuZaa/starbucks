import './style.scss';

export const MenuButton = ({showNav, setShowNav}) => {

    const clickHandler = () => {
        setShowNav(!showNav)
      }
  return (
        <button className={`menu-button ${showNav ? 'cross' : 'bars'}`} onClick={clickHandler}>
            <span className="bar"></span>
        </button>
  )
}
