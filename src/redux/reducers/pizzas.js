const initialState = {
  items: [],
  isLoaded: false
};


const pizzas = (state = initialState, action) => {
  if(action.type === 'SET_PIZZAS') {
    return {
      ...state,                                         //берем данные из state
      items: action.payload,                           //заменяем данные на payload
    };
  }
  return state;
};


export default pizzas;