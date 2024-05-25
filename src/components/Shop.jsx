import { DUMMY_PRODUCTS } from "../dummy-products";
import Product from "./Product";

export default function Shop() {
    return (
        <section id="shop">
            <h2>elegant clothing for everyone</h2>
            <ul id="products">
                {DUMMY_PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Product {...product} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
