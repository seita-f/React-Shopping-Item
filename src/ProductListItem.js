import { useSelector, useDispatch } from "react-redux";
import { toggleLiked, addItem } from "./redux/actions";

const ProductListItem = ({ product }) => {
	const likedProducts = useSelector((state) => state.likedProducts);
	const productsInBasket = useSelector((state) => state.productsInBasket);

	const dispatch = useDispatch();
	const isLiked = likedProducts.includes(product.id);

	const handleAddToBasket = (productId) => {
		console.log(`Product with id ${productId} added to Basket`);
		// console.log(productsInBasket);
	};

	const countAddedItem = (productId) => {
		const itemCount = productsInBasket.reduce((count, item) => {
			if(item == productId){
				return count + 1;
			}
			else {
				return count;
			}
		}, 0);

		return itemCount;
	};

	return (
		<li>
			<span style={{ marginRight: 5 }}>{product.title}</span>
			<span
				onClick={() => dispatch(toggleLiked(product.id))}
				style={{ cursor: "pointer", marginRight: 5 }}
			>
				<i
					className={`fa-heart ${isLiked ? "fas" : "far"}`}
					style={{ color: isLiked ? "green" : "grey" }}
				>Like</i>
			</span>

			<span
				style={{ color: "blue" }}
				onClick={() => dispatch(addItem(product.id)) && handleAddToBasket(product.id)}
				style={{ cursor: "pointer", marginRight: 5 }}
			>
				<i className={`fas fa-cart-plus`} style={{ color: "blue" }}>Add Item ({countAddedItem(product.id)})</i>
			</span>
		</li>
	);
};

export default ProductListItem;
