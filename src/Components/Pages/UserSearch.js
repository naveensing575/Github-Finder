import {useState, useContext} from 'react';
import GithubContext from '../Context/GithubContext';

function UserSearch() {
  const [search, setSearch] = useState('');
  const {users, searchUsers, clearUsers}= useContext(GithubContext);
  const handleChange = (e) =>{
    setSearch(e.target.value)
  }
  const handleSubmit =(e) =>{
    e.preventDefault();
    searchUsers(search);
    if(search==='')
    {
      alert('Please enter something!');
      setSearch('')
    }
  }
  
  return (
    <div className='grid grid-cols-1 xl: grid-cols-2 lg: grid-cols-3 md: grid-col-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className="relative">
              <input 
                type="text" 
                className="w-full pr-40 bg-gray-200 input input-lg text-black rounded"
                placeholder='Search'
                value={search}
                onChange={handleChange}
                />
                <button className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>GO</button>
            </div>
          </div>
        </form>
      </div>
      {users.length>0 && (
        <div>
          <button className='btn btn-ghost btn-lg' onClick={clearUsers}>
            Clear
          </button>
      </div>
      )}
      
    </div>
  )
}

export default UserSearch