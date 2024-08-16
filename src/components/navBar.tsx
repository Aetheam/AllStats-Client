import React from "react";
import Image from 'next/image'
import logo from '@/assets/logo.png'
export default function NavBar(): React.ReactNode {
    return (
        <>
            <div className="nav_root">
                <div className="nav_container">
                    <Image src={logo} alt="logo" width={50} height={50} />
                    <h3>PmmpServerStats</h3>
                    <div className="nav_container_right">
                        <button className="nav_buttons">DASHBOARD</button>

                        <button className="nav_buttons">LOGIN</button>
                    </div>
                </div>
            </div>
        </>
    )
}