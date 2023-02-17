import React, { useState } from 'react'; import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [cred, setcred] = useState({ email: "", psw: "" }); let navigate = useNavigate();
    const hdSub = async (e) => { e.preventDefault(); const host = "http://localhost:1234"; const url = `${host}/api/auth/login`;
        const response = await fetch(url, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: cred.email, psw: cred.psw })
        }); const json = await response.json(); console.log(json)
        if (json.success) {//redirect and save the auth token to local storage
            localStorage.setItem('token', json.token)
            props.showAlert("login Success", "success"); navigate("/")
        } else { props.showAlert("invelid Cred", "danger") }
    }
    const onCh = (e) => { setcred({ ...cred, [e.target.name]: e.target.value }) }

    return (<><div>Login</div><form onSubmit={hdSub}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" value={cred.email} className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" onChange={onCh} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" value={cred.psw} className="form-control" id="psw" name='psw' placeholder="Password" onChange={onCh} />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form></>)
}

export default Login