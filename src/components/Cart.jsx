export default function Cart() {
    return (
        <div id="cart">
            <ul id="cart-items">
                <li>
                    <div>
                        <span>item_name</span>
                        <span>(item_price)</span>
                    </div>
                    <div className="cart-item-actions">
                        <button>-</button>
                        <span>item_quantity</span>
                        <button>+</button>
                    </div>
                </li>
            </ul>
            <p id="cart-total-price">
                Cart Total: <strong>total_price</strong>
            </p>
        </div>
    );
}
