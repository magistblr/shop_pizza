//хранение данных сортировки, 0 потому что используем index
const initialState = {
  category: null,
  sortBy: {
    type: 'popular',
    order: 'desc',
  },
};

const filters = (state = initialState, action) => {
  if(action.type === 'SET_SORT_BY') {
    return {
      ...state,                                         //берем данные из state
      sortBy: action.payload,                           //заменяем данные на payload
    };
  }
  if(action.type === 'SET_CATEGORY') {
    return {
      ...state,                                         //берем данные из state
      sortBy: action.payload,                           //заменяем данные на payload
    };
  }
  return state;
};


export default filters;