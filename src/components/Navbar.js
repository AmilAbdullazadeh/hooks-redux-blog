import React, {useState} from 'react';
import {selectSignedIn, setSearchInput, selectUserData, setSignedIn, setUserData} from "../features/userSlice";
import {useSelector, useDispatch} from "react-redux";
import {Avatar} from "@material-ui/core";
import GoogleLogout from "react-google-login";

const Navbar = () => {
    const [inputVal, setInputVal] = useState('app')
    const isSignedIn = useSelector(selectSignedIn)
    const userData = useSelector(selectUserData)
    const dispatch = useDispatch()

    const logout = (res) => {
        dispatch(setSignedIn(false))
        dispatch(setUserData(null))
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setSearchInput(inputVal))
    }

    return (
        <div className="navbar">
            <h1 className="navbar-header">ReduxBlog 🖥</h1>
            {
                isSignedIn
                && (
                    <div className="blog-search">
                        <input
                            className='search'
                            placeholder='Search for a blog'
                            value={inputVal}
                            onChange={(e) => {
                                setInputVal(e.target.value)
                            }}
                            type="text"
                        />
                        <button className='submit' onClick={handleClick}>Search</button>
                    </div>
                )
            }
            {
                isSignedIn
                    ? (
                        <div className='navbar-user'>
                            <Avatar src={userData?.imageUrl} alt={userData?.name}/>
                            <h3 className='navbar-username'>{userData?.givenName}</h3>
                            <GoogleLogout
                                clientId="571534189336-ge5oqs17ap9an02aco25bl4nhjbr04jv.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <button
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        className="logout-btn"
                                    >
                                        Logout 🙃
                                    </button>
                                )}
                                onLogoutSuccess={logout}
                            />
                        </div>
                    )
                    : (
                        <h1 className="not-sign-in">User not available 😕</h1>
                    )
            }
        </div>
    )
}

export default Navbar