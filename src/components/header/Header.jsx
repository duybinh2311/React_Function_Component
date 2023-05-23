import { TOKEN, USER_LOGIN, clearStoreJSON } from '@/utils/configAxios'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const { userLogin } = useSelector((state) => state.userReducer)
  const renderLoginLink = () => {
    if (userLogin.email !== '') {
      return '/profile'
    }
    return '/login'
  }
  return (
    <nav className="nav p-3 bg-dark text-white">
      {/* Home */}
      <NavLink
        className={({ isActive }) =>
          `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
        }
        to={''}
      >
        Home
      </NavLink>
      {/* Login */}
      <NavLink
        className={({ isActive }) =>
          `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
        }
        to={renderLoginLink()}
      >
        {userLogin.email ? `Hello! ${userLogin.email}` : 'Login'}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
        }
        to={'/register'}
      >
        Register
      </NavLink>
      {/* React Hook */}
      <div className="dropdown">
        <button
          className="nav-link text-white dropdown-toggle"
          type="button"
          id="triggerId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          React Hook
        </button>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <NavLink className="dropdown-item" to={'/usestate'}>
            Use State
          </NavLink>
          <NavLink className="dropdown-item" to={'/useeffect'}>
            Use Effect
          </NavLink>
          <NavLink className="dropdown-item" to={'/usecallback'}>
            Use CallBack
          </NavLink>
          <NavLink className="dropdown-item" to={'/usememo'}>
            Use Memo
          </NavLink>
          <NavLink className="dropdown-item" to={'/useref'}>
            Use Ref
          </NavLink>
        </div>
      </div>
      {/* Redux Hook */}
      <div className="dropdown">
        <button
          className="nav-link text-white dropdown-toggle"
          type="button"
          id="triggerId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Redux Hook
        </button>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <NavLink className="dropdown-item" to={'/demochat'}>
            Use Selector - Use Dispatch
          </NavLink>
        </div>
      </div>
      {/* React Router DOM Hook */}
      <div className="dropdown">
        <button
          className="nav-link text-white dropdown-toggle"
          type="button"
          id="triggerId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          React Router DOM Hook
        </button>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <NavLink className="dropdown-item" to={'/detail/1'}>
            Use Params
          </NavLink>
          <NavLink className="dropdown-item" to={'/search'}>
            Use Search Params
          </NavLink>
        </div>
      </div>
      <NavLink
        className={({ isActive }) =>
          `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
        }
        to={'/movie'}
      >
        Movie
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
        }
        to={'/demoant'}
      >
        Ant Design
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
        }
        to={'/demohoc'}
      >
        HOC
      </NavLink>
      {userLogin.email && (
        <button
          className="mx-2 nav-link text-white ms-auto"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            clearStoreJSON(USER_LOGIN)
            clearStoreJSON(TOKEN)
            window.location.reload()
          }}
        >
          Log Out
        </button>
      )}
    </nav>
  )
}
