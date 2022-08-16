import {useEffect, useContext} from 'react'
import GithubContext from '../Context/GithubContext';
import Spinner from '../Layout/Spinner';
import UserList from './UserList';

function Card() {
  const {users, loading, fetchUsers} = useContext(GithubContext);
  useEffect(() => {
    fetchUsers()
  }, [])
  
  if(!loading){
    return(
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg: grid-cols-3 md: grid-cols-2'>
        {users.map((user)=>(<UserList key={user.id} user={user}/>))}
    </div>  
    )
  }
  else{<h3><Spinner/></h3>}
}


export default Card