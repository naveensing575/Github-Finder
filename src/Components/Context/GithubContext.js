import { createContext, useReducer } from 'react';
import GithubReducer from '../Reducer/GithubReducer';

const GithubContext=createContext();
const API=process.env.REACT_APP_GITHUB_URL;
const TOKEN=process.env.REACT_APP_GITHUB_TOKEN;
const Bearer = `Bearer ${TOKEN}`
export const GithubProvider = ({children})=>{
  const initialState ={
    users: [],
    loading: true
  }
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  const fetchUsers = async() =>{
    await fetch(`${API}/users`, {
      headers: {
        Authorization: {Bearer}
      },
      method:'GET',
    })
    .then(res=>res.json())
    .then((data)=>{
     dispatch({
      type:'GET_USERS',
      payload: data
     })
    })
  //   .catch((err)=>{
  //     setLoading(false);
  //     console.log(err);
  //   })
  }
  return <GithubContext.Provider value={{
      users: state.users,
      loading: state.loading,
      fetchUsers
    }}>
      {children}
    </GithubContext.Provider>
}
export default GithubContext;