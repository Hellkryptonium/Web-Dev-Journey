import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        passWord: "",
    })

    // let handleNameChange = (event) => {
    //     console.log(event.target.value);
    //     setFullName(event.target.value)
    // }

    let handleInputChange = (event) => {        
        setFormData( (currData) => {
            return {...currData, [event.target.name]: event.target.value};
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            passWord: "",
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input placeholder="enter full name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullname" name="fullName"/>

            <br></br><br></br>

            <label htmlFor="username">Username</label>
            <input placeholder="enter username" type="text" value={formData.userName} onChange={handleInputChange} id="username" name="userName"/>

            <br></br><br></br>

            <label htmlFor="password">Password</label>
            <input placeholder="enter password" type="password" value={formData.passWord} onChange={handleInputChange} id="password" name="passWord"/>
            <button>Submit</button>
        </form>
    )
}