import { BsChevronDown } from "react-icons/bs"
import './style.scss'
import { useCallback, useState } from "react"
import { formInputsData } from "utils/form"
import { Input } from "components/input"


export const JoinDropdown = () => {

  const [openDropdown, setOpenDropdown] = useState(false);
  const chevronClickHandler = () => {
    setOpenDropdown(!openDropdown)
  }
  return (
    <div className={openDropdown ? "form-group join-dropdown open" : "form-group join-dropdown"}>
      <div className="join-dropdown-title">
        <p>Already have a Starbucks gift card?</p>
        <button className="chevron" onClick={chevronClickHandler}><BsChevronDown /></button>

      </div>
      <div className="join-dropdown">
        <p>Add your gift card to earn Stars when you pay and order ahead.</p>
        <Input {...formInputsData[5]} min="0" max="9999999999999999" length="16" />
        <Input {...formInputsData[6]} min="0" max="99999999" length="8" />
      </div>
    </div>
  )
}
