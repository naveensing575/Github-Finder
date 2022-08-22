const GithubReducer = (state, action) =>{
    switch(action.type){
      case 'GET_USERS':
        return {
          ...state,
          users: action.payload,
          loading: false
        }
        case 'SET_LOADING':
          return{
            loading: false
          }
      default:
        return state
    }
}

export default GithubReducer;