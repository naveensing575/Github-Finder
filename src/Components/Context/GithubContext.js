import { createContext, useReducer } from 'react';
import GithubReducer from '../Reducer/GithubReducer';

const GithubContext=createContext();
const API=process.env.REACT_APP_GITHUB_URL;
const TOKEN=process.env.REACT_APP_GITHUB_TOKEN;
const Bearer = `token ${TOKEN}`
export const GithubProvider = ({children})=>{
  const initialState ={
    users: [],
    user: [],
    loading: false,
    text: ''
  }
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //clear all the users
  const clearUsers = () =>dispatch({
    type: 'CLEAR_USERS'
  })

  const setLoading = () =>dispatch({
    type: 'SET_LOADING'
  })

  //search different users
  const searchUsers = async(text) =>{
    setLoading();
    const params = new URLSearchParams({
      q: text
    })
    const response = await fetch(`${API}/search/users?${params}`, {
      headers: {
        Authorization: {Bearer}
      },
      method:'GET',
    })
    if(response.status===404){
      window.location = '/notfound';
    }
    else
    {
    const {items} = await response.json();
     dispatch({
      type:'GET_USERS',
      payload: items
     })
    }
  }

  //get single user profile
  const getUser = async(login) =>{
    setLoading();
    const response = await fetch(`${API}/users?${login}`, {
      headers: {
        Authorization: {Bearer}
      },
      method:'GET',
    })
    if(response.status===404){
      window.location = '/notfound';
    }
    else
    {
    const data = await response.json();
     dispatch({
      type:'GET_USER',
      payload: data
     })
    }
  }

  return <GithubContext.Provider value={{
      users: state.users,
      user: state.user,
      loading: state.loading,
      searchUsers,
      getUser,
      clearUsers
    }}>
      {children}
    </GithubContext.Provider>
}
export default GithubContext;