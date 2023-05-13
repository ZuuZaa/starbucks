import { Form } from "styled/form"
import { formInputsData } from "utils/form"
import './style.scss'
import { Container } from "styled/containers"
import { Input } from "components/input"
import { AiOutlineCheck } from 'react-icons/ai'
import { FilledButton, SimpleButton, SimpleLink } from "styled/buttons"
import { useState } from "react"

export const Login = () => {

  const [showInfo, setShowInfo] = useState(false);
 
  return (
    <section className="login-section">
      <Container>
        <h1>Sign in or create an account</h1>
        <Form>
          <p><span className="asterix">*</span>indicates required field</p>
          <Input {...formInputsData[0]} />
          <Input {...formInputsData[1]} />
          <div className="keep-signed">
            <div className="checkbox">
              <label htmlFor="check">
                <AiOutlineCheck />
              </label>
              <input type="checkbox" id="check" />
            </div>
            <p className="details" onClick={()=>setShowInfo(!showInfo)}>Keep me signed in.
              <SimpleLink>Details</SimpleLink>
              <div className={showInfo ? "info show" : "info"} onClick={()=>setShowInfo(false)}>
                <p>Checking this box will reduce the number of times you’re asked to sign in. To keep your account secure, use this option only on your personal devices.</p>
                <SimpleLink>Get it</SimpleLink>
              </div>
            </p>
          </div>
          <div className="links">
            <SimpleLink>Forgot your username?</SimpleLink>
            <SimpleLink>Forgot your password?</SimpleLink>
          </div>
          <div className="signin-btn">
            <FilledButton to='/'>Sign in</FilledButton>
          </div>
        </Form>

        <div className="sign-in-content">
          <h3>JOIN STARBUCKS® REWARDS</h3>
          <p>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</p>
          <SimpleButton to='/join' color='#00754a'>Join now</SimpleButton>
        </div>
      </Container>
    </section>
  )
}
