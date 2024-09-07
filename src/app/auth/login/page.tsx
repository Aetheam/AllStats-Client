"use client"
import usernameSvg from "@/assets/username.svg"
import InputLoginButton from "@/components/inputs/InputLoginButtons"
import Link from "next/link"
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react"
export default function Login() {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    
    function onUsernameChange(event: ChangeEvent<HTMLInputElement>){
        setUsername(event.target.value)
    }
    function onPasswordChange(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }
    function onSendForm(event: FormEvent){
        event.preventDefault()
        alert("form en développement")
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
            <form className={"login_container"} onSubmit={onSendForm}>
                <h2>Connection au compte</h2>
                <InputLoginButton src={usernameSvg} alt="username" title={"nom d'utilisateur"} Change={onUsernameChange}/>
                <InputLoginButton src={usernameSvg} alt="password" title={"mot de passe"} type="password" Change={onPasswordChange}/>
                <div className={"login_check"}>
                   <div>
                    <input type="checkbox"/>
                    <p> Se souvenir de moi</p>
                   </div>
                    <p>reset mot de passe</p>
                </div>
                <Link href={"/auth/register"}>Pas de compte ? merci de vous enregistrer</Link>
                <div className={"white_line"}></div>
                <div className={"login_buttons_container"}>
                    <button className={"base"} type="submit">Se connecter</button>
                    <button className={"discord"}>Se connecter par discord</button>
                </div>
            </form>
        </div>
    )
}