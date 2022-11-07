import cancel from '../../../../images/close.png'
import accountIcon from '../../../../images/account-icon.svg'
import { Link, useNavigate } from 'react-router-dom'
import react, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ForgetPassword, login, resetPassword, reSetStatus, signup } from '../../../../reducer/authReducer'
import Alert from '@mui/material/Alert';

export const Login = (props) => {

    const [state, setState] = useState({ name: '', email: '', password: '', code: '', rePassword: '', popUpToggle: false, wait: false, signUpTogal: false, forgetpassword: false })
    const dispatch = useDispatch()
    const { pageAuth, ResponceStatus, emailVerify } = useSelector(store => store.authReducer)
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
                                    emailVerify ?
                                        <>
                                            <label>verify code</label>
                                            <input value={state.code} onChange={(e) => {
                                                setState({ ...state, code: e.target.value })
                                            }} type="password" />
                                            <label>new password</label>
                                            <input value={state.password} onChange={(e) => {
                                                setState({ ...state, password: e.target.value })
                                            }} type="password" />
                                            <label>Re password</label>
                                            <input value={state.rePassword} onChange={(e) => {
                                                setState({ ...state, rePassword: e.target.value })
                                            }} type="password" />
                                        </> :
                                        <>
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
                                        if (emailVerify) {
                                            //code,newPassword,reNewPassword
                                            dispatch(resetPassword({ email: state.email, code: state.code, newPassword: state.password, reNewPassword: state.rePassword }))
                                        } else {
                                            { state.forgetpassword ? dispatch(ForgetPassword({ email: state.email })) : (state.signUpTogal ? dispatch(signup({ name: state.name, email: state.email, password: state.password, rePassword: state.rePassword })) : dispatch(login({ email: state.email, password: state.password }))) }
                                        }
                                        setState({ ...state, wait: true })
                                    }}
                                />
                            </div>
                        </div>
                        <div className="lgtTermsBox">
                            <Link onClick={() => {
                                setState({ ...state, forgetpassword: true })
                            }}>forget password</Link><Link style={{ marginLeft: '2%' }} onClick={() => {
                                setState({ ...state, signUpTogal: !state.signUpTogal, forgetpassword: false })
                            }} >{state.signUpTogal ? 'login' : 'sign up'}</Link>
                        </div>
                        {state.popUpToggle && <div style={{ marginTop: '2%', paddingBottom: '3%' }}>
                            {ResponceStatus && ((ResponceStatus === 'login' || ResponceStatus === 'signup' || ResponceStatus.slice(0, 4) === 'mail') ? <Alert severity="success">{ResponceStatus}!</Alert> : <Alert severity="error">{ResponceStatus}!</Alert>)}
                        </div>}
                    </section>
                </div>
            </div>


        </>
    )
}