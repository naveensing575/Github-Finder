import {useContext} from 'react';
import Spinner from '../Shared/Spinner';
import UserList from './UserList';
import GithubContext from '../Context/GithubContext';

function Card() {
  const {users, loading} = useContext(GithubContext);
  
    return loading? (<h3><Spinner/></h3>):(
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg: grid-cols-3 md: grid-cols-2'>
        {users.map((user)=>(<UserList key={user.id} user={user}/>))}
    </div>  
    )
}


export default Card