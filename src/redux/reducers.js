import { TOGGLE_LIKED, ADD_ITEM, INCREMENT_ITEM, DECREMENT_ITEM } from "./actions";
import productsData from "../data";
import LanguageContext from "../LanguageContext";

const initialState = {
	products: productsData,
	likedProducts: [],
	productsInBasket: [],

};

const rootReducer = (state = initialState, action) => {

	switch (action.type) {
		case TOGGLE_LIKED:
			const productId = action.payload;
			const isLiked = state.likedProducts.includes(productId);
			const likedProducts = isLiked
				? state.likedProducts.filter((id) => id !== productId) // remember - filter creates a new array
				: [...state.likedProducts, productId];
			return {
				...state,
				likedProducts,
			};
		case ADD_ITEM:
			// get id of the item
			const addedProductId = action.payload;

			// Store the added item's id
			const productsInBasket = [...state.productsInBasket, addedProductId];
			console.log(productsInBasket);

		  return {
			  ...state,
			  productsInBasket,
		  };

		case INCREMENT_ITEM:
		  const incrementProductId = action.payload;
	  	const incrementedProductsInBasket = state.productsInBasket.concat(incrementProductId);
		  return {
		    ...state,
		    productsInBasket: incrementedProductsInBasket,
		  };

		case DECREMENT_ITEM:
		  const decrementProductId = action.payload;
			const idx = state.productsInBasket.indexOf(decrementProductId);

		  if (idx >= 0) {
		    state.productsInBasket.splice(idx, 1);
		    return {
		      ...state,
		      productsInBasket: [...state.productsInBasket],
		    };
		  }

		  return {
		    ...state,
		    productsInBasket: state.productsInBasket,
		  };

		default:
			return state;

	}
};

export default rootReducer;
