import { createContext, useState } from "react";
export const Context = createContext();

const CoAPI = (props) => {
    const [temp, setTemp] = useState({ name: "", email: "", password: "", confirmPassword: "" })
    const Host = "http://localhost:8000"
    const signUpUrl = `${Host}/api/auth/createuser`
    const loginUrl = `${Host}/api/auth/login`

    const handleChange = (event) => {
        // console.log("handleChange", event.target.value) //test
        setTemp({ ...temp, [event.target.name]: event.target.value })
    }

    return (
        <Context.Provider value={{ temp, setTemp, handleChange, signUpUrl, loginUrl }}>
            {props.children}
        </Context.Provider>
    )
}

export default CoAPI