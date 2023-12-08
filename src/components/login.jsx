import React, { Fragment } from 'react'
import '../App.css'
import classes from '../index.module.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CForm,CFormInput,CFormLabel,CCol,CButton } from '@coreui/react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Fragment>
            <div className={classes.loginForm}>
            <CForm>
                <CFormInput
                
                    type="email"
                    id="exampleFormControlInput1"
                    label="Email address"
                    placeholder="name@example.com"
                    text="Must be 8-20 characters long."
                    aria-describedby="exampleFormControlInputHelpInline"
                />
                 <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</CFormLabel>
                    <CCol sm={10}>
                        <CFormInput type="password" id="inputPassword"/>
                    </CCol>
                    <br/>
                    <CButton color='dark' type="submit" className="mb-3">
                        <Link className={classes.Btn} to='/'>Login</Link>
                    </CButton>
            </CForm>
            </div>
        </Fragment>
    )
}

export default Login 