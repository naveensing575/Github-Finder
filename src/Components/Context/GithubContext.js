import { createContext, useReducer } from 'react';
import GithubReducer from '../Reducer/GithubReducer';

const GithubContext=createContext();
const API=process.env.REACT_APP_GITHUB_URL;
const TOKEN=process.env.REACT_APP_GITHUB_TOKEN;
const Bearer = `token ${TOKEN}`
export const GithubProvider = ({children})=>{
  const initialState ={
    users: [],
    loading: false,
    text: ''
  }
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //clear all the users
  const clearUsers = () =>dispatch({
    type: 'CLEAR_USERS'
  })

  const searchUsers = async(text) =>{
    const params = new URLSearchParams({
      q: text
    })
    const response = await fetch(`${API}/search/users?${params}`, {
      headers: {
        Authorization: {Bearer}
      },
      method:'GET',
    })
    const {items} = await response.json();
     dispatch({
      type:'GET_USERS',
      payload: items
     })
  }
  return <GithubContext.Provider value={{
      users: state.users,
      loading: state.loading,
      searchUsers,
      clearUsers
    }}>
      {children}
    </GithubContext.Provider>
}
export default GithubContext;