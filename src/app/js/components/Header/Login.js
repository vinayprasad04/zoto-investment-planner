import cancel from '../../../../images/close.png'
import accountIcon from '../../../../images/account-icon.svg'
import { Link, useNavigate } from 'react-router-dom'
import react, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, reSetStatus, signup } from '../../../../reducer/authReducer'
import Alert from '@mui/material/Alert';

export const Login = (props) => {

    const [state, setState] = useState({ name: '', email: '', password: '', rePassword: '', popUpToggle: false, wait: false, signUpTogal: false, forgetpassword: false })
    const dispatch = useDispatch()
    const { pageAuth, ResponceStatus } = useSelector(store => store.authReducer)
    const navigate = useNavigate()
    if (state.wait == true) {
        if (ResponceStatus) {
            setState({ ...state, wait: false, popUpToggle: true })
            setTimeout(() => {
                dispatch(reSetStatus(null))
                setState({ ...state, wait: false, popUpToggle: false })
            }, 4000)
        }
    }
    useEffect(() => {
        if (pageAuth) {
            setTimeout(() => {
                props.setState((e) => {
                    return { ...e, loginTogal: false }
                })
                navigate('/account')
            }, 2000)
        }
    }, [pageAuth])

    return (
        <>
            <div className='popup'>
                <div className="LoginSlider">
                    <section className="loginSlide" style={{ marginTop: !state.signUpTogal && '20%' }}>
                        <div className="loginLgtContent">
                            <div className="userLgtIcon">
                                <img className='accountIcon' src={accountIcon} />
                                <img className='cancel' src={cancel} onClick={() => {
                                    props.setState((e) => {
                                        return { ...e, loginTogal: !e.loginTogal }
                                    })
                                }} />
                            </div>
                            <h2>
                                {state.forgetpassword ? `Please enter email to continue with your account` : `Please ${state.signUpTogal ? 'sign up' : 'login'} to continue with your account`}
                            </h2>
                            <div className="lgtFormField">
                                {
                                    state.forgetpassword ?
                                        <>
                                            <label>Your email</label>
                                            <input value={state.email} onChange={(e) => {
                                                setState({ ...state, email: e.target.value })
                                            }} type="email" />
                                        </>
                                        :
                                        <>
                                            {state.signUpTogal && <>
                                                <label>Your name</label>
                                                <input value={state.name} onChange={(e) => {
                                                    setState({ ...state, name: e.target.value })
                                                }} type="text" />
                                            </>}


                                            <label>Your email</label>
                                            <input value={state.email} onChange={(e) => {
                                                setState({ ...state, email: e.target.value })
                                            }} type="email" />

                                            <label>Your password</label>
                                            <input value={state.password} onChange={(e) => {
                                                setState({ ...state, password: e.target.value })
                                            }} type="password" />

                                            {state.signUpTogal && <>
                                                <label>Re password</label>
                                                <input value={state.rePassword} onChange={(e) => {
                                                    setState({ ...state, rePassword: e.target.value })
                                                }} type="password" />
                                            </>}
                                        </>
                                }




                            </div>
                            <div className="lightboxCommonBtn">
                                <input
                                    type={!state.wait && "submit"}
                                    defaultValue={state.wait ? 'wait' : 'Submit'}
                                    id="phoneSubmit"
                                    className="primary_btn_red"
                                    onClick={() => {
                                        { state.signUpTogal ? dispatch(signup({ name: state.name, email: state.email, password: state.password, rePassword: state.rePassword })) : dispatch(login({ email: state.email, password: state.password })) }
                                        setState({ ...state, wait: true })
                                    }}
                                />
                            </div>
                        </div>
                        <div className="lgtTermsBox">
                            <Link onClick={() => {
                                setState({ ...state, forgetpassword: true })
                            }}>forget password</Link><Link style={{ marginLeft: '2%' }} onClick={() => {
                                setState({ ...state, signUpTogal: !state.signUpTogal,forgetpassword: false })
                            }} >{state.signUpTogal ? 'login' : 'sign up'}</Link>
                        </div>
                        {state.popUpToggle && <div style={{ marginTop: '2%', paddingBottom: '3%' }}>
                            {ResponceStatus && ((ResponceStatus === 'login' || ResponceStatus === 'signup') ? <Alert severity="success">{ResponceStatus}!</Alert> : <Alert severity="error">{ResponceStatus}!</Alert>)}
                        </div>}
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