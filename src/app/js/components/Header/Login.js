import cancel from '../../../../images/close.png'
import accountIcon from '../../../../images/account-icon.svg'
import { Link } from 'react-router-dom'

export const Login = ({ setState }) => {

    

    return (
        <>
            <div className='popup'>
                <div className="LoginSlider">
                    <section className="loginSlide">
                        <div className="loginLgtContent">
                            <div className="userLgtIcon">
                                <img className='accountIcon' src={accountIcon} />
                                <img className='cancel' src={cancel} onClick={() => {
                                    setState((e) => {
                                        return { ...e, loginTogal: !e.loginTogal }
                                    })
                                }} />
                            </div>
                            <h2>
                                Please enter your email to continue with your account
                            </h2>
                            <div className="lgtFormField">
                                <label>Your email</label>
                                <input type="email"/>
                                <label>Your password</label>
                                <input type="text"/>
                            </div>
                            <div className="lightboxCommonBtn">
                                <input
                                    type="submit"
                                    defaultValue="Submit"
                                    id="phoneSubmit"
                                    className="primary_btn_red"
                                />
                            </div>
                        </div>
                        <div className="lgtTermsBox">
                            <Link>forget password</Link>
                        </div>
                    </section>
                    {/* <section className="loginSlide">
                        <div className="loginLgtContent">
                            <div className="userLgtIcon text-center">
                                <img src="images/account-icon.svg" />
                            </div>
                            <h2 className="text-center">
                                Almost there! Please enter the OTP sent on your mobile to verify.
                            </h2>
                            <div className="lgtFormField">
                                <label>Enter OTP (One Time Password)</label>
                                <input type="text" />
                            </div>
                            <div className="lightboxCommonBtn">
                                <input
                                    type="submit"
                                    defaultValue="VERIFY"
                                    className="primary_btn_red"
                                />
                            </div>
                        </div>
                        <div className="lgtTermsBox group">
                            <a
                                href="javascript:void(0);"
                                style={{ float: "left" }}
                                className="resendOtp"
                            >
                                Resend OTP?
                            </a>
                            <a href="javascript:void(0);" style={{ float: "right" }}>
                                Entered Wrong Number?
                            </a>
                        </div>
                    </section> */}
                    
                </div>
            </div>


        </>
    )
}