export const TOGGLE_LIKED = "TOGGLE_LIKED";
export const ADD_ITEM = "ADD_ITEM";
export const INCREMENT_ITEM = "INCREMENT_ITEM";
export const DECREMENT_ITEM = "DECREMENT_ITEM";

export const toggleLiked = (productId) => ({
	type: TOGGLE_LIKED,
	payload: productId,
});

export const addItem = (productId) => ({
	type: ADD_ITEM,
	payload: productId,
});

export const incrementItem = (productId) => ({
	type: INCREMENT_ITEM,
	payload: productId,
});

export const decrementItem = (productId) => ({
	type: DECREMENT_ITEM,
	payload: productId,
});
