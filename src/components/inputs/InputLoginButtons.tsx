import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { ImageProps } from "next/image";
import { ChangeEventHandler, FC, InputHTMLAttributes } from "react";

interface InputLoginButtonProps{
    src: String | Object | any,
    title: string,
    alt: string,
    type?: string,
    Change?: ChangeEventHandler<HTMLInputElement>
}
const InputLoginButton: FC<InputLoginButtonProps> =  ({src, title, alt, type = "Text", Change, ...props}) => {

    return (
        <div style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            height: "5vh",
            padding: "10px",
            marginTop: "-40px",
            color: "black"
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
            <input type={type} placeholder={title} style={{
                height: "55px",
                borderColor: "red",
                border: "solid",
                borderWidth: "1px",
                borderRadius: "10px",
                paddingLeft: "60px",
                position: "absolute",
            }}
            onChange={Change}
            />
        </div>
    )
}


export default InputLoginButton;