import usernameSvg from "@/assets/username.svg"
import InputLoginButton from "@/components/inputs/InputLoginButtons"
import { Input } from "postcss"


export default function Login() {
    return (
        <div style={{
            justifyContent: "center",
            alignItems: "center",
            
            width: "100%",
            height: "93vh",
            display: "flex"
            }}>
            <form className={"login_container"}>
                <h2>Connection au compte</h2>
                <InputLoginButton src={usernameSvg} alt="username" title={"nom d'utilisateur"}/>
                <InputLoginButton src={usernameSvg} alt="password" title={"mot de passe"}/>
                <div className={"login_check"}>
                   <div>
                    <input type="checkbox"/><p> Se souvenir de moi</p>
                   </div>
                    <p>reset mot de passe</p>
                </div>
                <div className={"white_line"}></div>
                <div className={"login_buttons_container"}>
                    <button className={"base"}>Se connecter</button>
                    <button className={"discord"}>Se connecter par discord</button>
                </div>
            </form>
        </div>
    )
}