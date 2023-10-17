const AppReducer = (state, action) => {
  switch (action.type) {
    // case 'ADD_EXPENSE':
    //     return {
    //         ...state,
    //         expenses: [...state.expenses, action.payload]
    //     }
    // case 'DELETE_EXPENSE':
    //     return {
    //         ...state,
    //         expenses: state.expenses.filter(expense => expense.id !== action.payload)
    //     }
    case 'DELETE_TRANSACTION':
      return{
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
      case 'ADD_TRANSACTION':
        return{
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
    default:
      return state;
  } 
};

export default AppReducer;
