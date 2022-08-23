import {useEffect, useContext} from 'react'
import {FaCodepen, FaUserFriends, FaStore, FaUsers} from 'react-icons/fa'
import {useParams, Link} from 'react-router-dom'
import Spinner from '../Shared/Spinner'
import GithubContext from '../Context/GithubContext'

function Users() {
  const {user, getUser, loading} = useContext(GithubContext);
  const params = useParams();
  useEffect(()=>{
    getUser(params.login)
  },[])

  //destructuring the parmeters
  const{name, type, avatar_url, location, bio, blog, twitter_username,
     login, html_url, followers, following, public_repos, public_gists, hireable} = params;

  if(loading)
  {
    return<Spinner/>
  }
  else 
  return (
    <div className='w-full mx-auto lg:w-10/12'>
      <div className="mb-4">
        <Link to='/' className='btn btn-ghost'>
          Back To Seach
        </Link>
        <div className='grid grid-cols-1 xl: grid-cols-2 lg: grid-cols-3 md: grid-col-2 mb-8 gap-8'>
          <div className="custom card-image mb-6 md:md-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt='card'/>
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">
                  {name}
                </h2>
                <p>{login.slice(0,-1)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users