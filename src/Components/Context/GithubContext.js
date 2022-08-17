import {useState} from 'react'
import { createContext } from 'react'

const GithubContext=createContext();
const API=process.env.REACT_APP_GITHUB_URL;
const TOKEN=process.env.REACT_APP_GITHUB_TOKEN;
//acc. to github docs, you have to add token with the bearer to fetch the users
const Bearer = 'Bearer ' + TOKEN;

export const GithubProvider = ({children})=>{
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUsers = async() =>{
    await fetch(`${API}/users`, {
      headers: {
        Authorization: {Bearer}
      },
      method:'GET',
    })
    .then(res=>res.json())
    .then((data)=>{
      setUsers(data)
      setLoading(false);
    })
    .catch((err)=>{
      setLoading(false);
      console.log(err);
    })
  }
  return <GithubContext.Provider value={{
      users,
      loading,
      fetchUsers
    }}>
      {children}
    </GithubContext.Provider>
}

export default GithubContext;