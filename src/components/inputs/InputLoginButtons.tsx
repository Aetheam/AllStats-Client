import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { ImageProps } from "next/image";
import { FC, InputHTMLAttributes } from "react";

interface InputLoginButtonProps{
    src: String | Object | any,
    title: string,
    alt: string,
}
const InputLoginButton: FC<InputLoginButtonProps> =  ({src, title, alt, ...props}) => {
    return (
        <div style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            height: "5vh",
            padding: "10px",
            marginTop: "-60px"
        }}>
            <Image src={src} alt={alt} style={{
                width: "55px",
                height: "55px",
                padding: "5px",
                backgroundColor: "white",
                borderLeftWidth: "1px",
                position: "absolute",
                marginLeft: "50px",
                marginRight: "295px",
                borderRadius: "60px",
                zIndex: 1,
                borderRight: "solid",
                borderColor: "black",
                borderWidth: "1px"
            }}/>
            <input type="Text" placeholder={title} style={{
                height: "55px",
                borderColor: "red",
                border: "solid",
                borderWidth: "1px",
                borderRadius: "10px",
                paddingLeft: "60px",
                position: "absolute",
            }}/>
        </div>
    )
}


export default InputLoginButton;