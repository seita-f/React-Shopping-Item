import { useContext } from "react";
import LanguageContext from "./LanguageContext";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { incrementItem, decrementItem } from "./redux/actions";

const Basket = (props) => {
	const basketText = {
		"en-US": "Your basket is empty.",
		"de-DE": "Ihr Warenkorb ist leer.",
		"pl-PL": "Twój koszyk jest pusty.",
	};

	const { language } = useContext(LanguageContext);
  const productsInBasket = useSelector((state) => state.productsInBasket);
	// To compare to the item(s) in productsInBasket
  const products = useSelector((state) => state.products[language]);
	const dispatch = useDispatch();

	// Using 'set' not to show the same item
	const [renderedProducts, setRenderedProducts] = useState(new Set(productsInBasket));

  // Update renderedProducts whenever productsInBasket changes
	useEffect(() => {
    setRenderedProducts(new Set(productsInBasket));
  }, [productsInBasket]);

	//********** Function **********
	// Function to get product name by ID and language
  const getProductName = (productId) => {
    const product = products.find((item) => item.id === productId);
    return product ? product.title : 'Unknown Product';
  };

	// Function to count Item
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
		<div className="box">
			<h2 className="title">Basket</h2>
			{productsInBasket.length > 0 ? (
				<ul>
				{[...renderedProducts].map((productId) => (
            <li key={productId}>
						  {getProductName(productId)}
              <button type="button" onClick={() => dispatch(decrementItem(productId))}>-</button>
							{countAddedItem(productId)}
							<button type="button" onClick={() => dispatch(incrementItem(productId))}>+</button>
            </li>
        ))}
        </ul>
			):
			(
				<p>{basketText[language]}</p>
			)}
		</div>
	);
};

export default Basket;
