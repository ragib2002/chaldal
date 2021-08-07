import { addElement, del, deleteElement, addOne } from "./funcs";

export const initialState = {
  basket: [],
  user: null,
  city: "Dhaka",
  hash: {},
  total: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const [basket, hash] = addElement(state.basket, action.item, state.hash);
      return {
        ...state,
        basket: basket,
        hash: hash,
        total: state.total + action.price,
      };
      break;
    case "REMOVE_FROM_BASKET":
      const [sket, sh] = deleteElement(state.basket, action.id, state.hash);
      return {
        ...state,
        basket: sket,
        hash: sh,
        total: state.total - action.pr,
      };
      break;
    case "SET_CITY":
      return { ...state, city: action.city };
      break;
    case "DEL":
      const [asket, ash] = del(state.basket, action.id, state.hash);
      return {
        ...state,
        basket: asket,
        hash: ash,
        total: state.total - action.pr,
      };
      break;
    case "ADD_ONE":
      const [ket, h] = addOne(state.basket, action.id, state.hash);
      return {
        ...state,
        basket: ket,
        hash: h,
        total: state.total + action.pr,
      };
      break;
    default:
      return state;
  }
}

export default reducer;
