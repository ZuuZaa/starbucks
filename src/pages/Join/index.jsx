import { Form } from "styled/form"
import { formInputsData } from "utils/form"
import { Container } from "styled/containers"
import { Input } from "components/input"
import { AiOutlineCheck } from 'react-icons/ai'
import { FilledButton, SimpleLink } from "styled/buttons"
import { Link } from "react-router-dom"
import './style.scss'
import { useState } from "react"
import { BsChevronDown } from "react-icons/bs"

export const Join = () => {

  return (
    <section className="join-section">
      <Container>
        <h1>Create an account</h1>
        <div className="description">
          <h3>STARBUCKS® REWARDS</h3>
          <p>Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and <Link to='/rewards' className="more">more</Link>.</p>
        </div>
        <Form>
          <p className="required-hint"><span className="asterix">*</span>indicates required field</p>
          <div className="form-group">
            <h2>Personal Information</h2>
            <Input {...formInputsData[2]} />
            <Input {...formInputsData[3]} />
          </div>
          <div className="form-group">
            <h2>Account Security</h2>
            <Input {...formInputsData[4]} />
            <Input {...formInputsData[1]} />
          </div>
          <div className="form-group join-dropdown-container">
            <div className="join-dropdown-title">
              <p>Already have a Starbucks gift card?</p>
              <label className="chevron" htmlFor="chevron"><BsChevronDown /></label>
              <input type="checkbox" id="chevron" />

            </div>
            <div className="join-dropdown">
              <p>Add your gift card to earn Stars when you pay and order ahead.</p>
              <Input {...formInputsData[5]} min="0" max="9999999999999999" length="16" />
              <Input {...formInputsData[6]} min="0" max="99999999" length="8" />
            </div>
          </div>
          <div className="form-group join-extra-content">
            <h3>COLLECT MORE STARS & EARN REWARDS</h3>
            <p>Email is a great way to know about offers and what’s new from Starbucks.</p>
            <div className="keep-signed">
              <div className="checkbox">
                <label htmlFor="agree">
                  <AiOutlineCheck />
                </label>
                <input type="checkbox" id="agree" />
              </div>
              <h5>Yes, I’d like email from Starbucks</h5>
              <p>Know about initiatives, announcements and product offers.</p>
            </div>
          </div>
          <div className="form-group join-extra-content">
            <h3>TERMS OF USE</h3>
            <div className="keep-signed">
              <div className="checkbox">
                <label htmlFor="term">
                  <AiOutlineCheck />
                </label>
                <input type="checkbox" id="term" />
              </div>
              <h5>I agree to the <SimpleLink to='https://www.starbucks.com/rewards/terms/' target="_blank">Starbucks® Rewards Terms</SimpleLink> and
                the <SimpleLink to="https://www.starbucks.com/terms/manage-gift-cards/" target="_blank">Starbucks® Rewards Terms</SimpleLink> and
                have read the  <SimpleLink to="https://www.starbucks.com/terms/privacy-policy/#notice-of-financial-incentive" target="_blank">Starbucks Privacy Statement</SimpleLink>
              </h5>
              <p>Please agree to the Terms of Use.</p>
            </div>
          </div>
          <div className="join-btn">
            <FilledButton to='/'>Create account</FilledButton>
          </div>
        </Form>
      </Container>
    </section>
  )
}