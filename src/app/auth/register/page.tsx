"use client"
import usernameSvg from "@/assets/username.svg"
import InputLoginButton from "@/components/inputs/InputLoginButtons"
import { ChangeEvent, FormEvent, useState } from "react"


export default function Register() {
    const [email, setEmail] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    
    function onUsernameChange(event: ChangeEvent<HTMLInputElement>){
        setUsername(event.target.value)
    }
    function onPasswordChange(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }
    
    function onEmailChange(event: ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }
    function onSendForm(event: FormEvent){
        event.preventDefault()
        console.log("email: " , email)
        console.log("username: " , username)
        console.log("password: ", password)
    }
    return (
        <div style={{
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            width: "100%",
            height: "93vh",
            display: "flex"
            }}>
            <form className={"login_container"}>
                <h2>enregistrer un compte</h2>
                <InputLoginButton src={usernameSvg} alt="email" title={"email"} Change={onEmailChange} />
                <InputLoginButton src={usernameSvg} alt="username" title={"nom d'utilisateur"} Change={onUsernameChange}/>
                <InputLoginButton src={usernameSvg} alt="password" title={"mot de passe"} type="password" Change={onPasswordChange}/>
                <div className={"login_buttons_container"} style={{marginTop: "1vh"}}>
                    <button className={"base"} style={{width: "75%"}}>Se connecter</button>
                </div>
            </form>
        </div>
    )
}