const initialData = {
  countries: []
};

const holidaysReducer = (state =  initialData, action) => {
  switch (action.type) {
    case 'GET_ALL_COUNTRIES':
      return {
        ...state,
        countries: [...state.countries, action.countries]
      }
    default:
      return state
  }
}

export default holidaysReducer;