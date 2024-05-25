import Cart from "./Cart";
import { createPortal } from "react-dom";
import { useRef, forwardRef, useImperativeHandle } from "react";

// eslint-disable-next-line react/prop-types
const CartModal = forwardRef(function CartModal({ title }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog id="modal" ref={dialog}>
            <h2>{title}</h2>
            <Cart />
            <form method="dialog" id="modal-actions">
                <button>Clear</button>
                <button>Checkout</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    );
});

export default CartModal;
