import React from 'react';
import GoogleLogin from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import { selectSignedIn, setSignedIn, setUserData } from "../features/userSlice";
import img from '../assets/raphael-lr-wRZE35mwNak-unsplash.jpg'
import "../style/home.css";

const Home = () => {

    const isSignedIn = useSelector(selectSignedIn)
    const dispatch = useDispatch()

    const login = (res) => {
        dispatch(setSignedIn(true))
        dispatch(setUserData(res.profileObj));
    }


    return (
        <div className="home-container">
            {
                !isSignedIn
                && (<div className="login-div">
                        <div>
                            <h1>👨🏻‍💻</h1>
                        </div>
                        <h1> Lorem ipsum dolor sit amet. </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, placeat, ratione? Animi eligendi in non
                            perferendis quasi. Ab ad aliquid beatae deleniti facilis nisi non obcaecati pariatur, quam quasi
                            repellat sit ullam. Exercitationem qui, totam?</p>
                        <GoogleLogin
                            clientId="571534189336-ge5oqs17ap9an02aco25bl4nhjbr04jv.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <button
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    className="login-btn"
                                >
                                    Login with Google
                                </button>
                            )}
                            onSuccess={login}
                            onFailure={login}
                            isSignedIn={true}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>)
            }
        </div>
    )
}

export default Home