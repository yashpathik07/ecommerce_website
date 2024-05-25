import { useRef } from "react";
import CartModal from "./CartModal";

export default function Header() {
    const modal = useRef();

    function handleOpenCartClick() {
        modal.current.open();
    }

    return (
        <>
            <CartModal ref={modal} title="Your Cart" />
            <header id="main-header">
                <div id="main-title">
                    <img src="logo.png" alt="" />
                    <h1>elegant context</h1>
                </div>
                <p>
                    <button onClick={handleOpenCartClick}>
                        Cart (quantity)
                    </button>
                </p>
            </header>
        </>
    );
}
