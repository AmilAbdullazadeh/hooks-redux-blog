import './App.css';
import Home from './components/Home'
import Navbar from "./components/Navbar";
import {useSelector} from "react-redux";
import {selectSignedIn} from "./features/userSlice";
import Blog from "./components/Blog";

function App() {
    const isSingedIn = useSelector(selectSignedIn)
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            {
                isSingedIn && <Blog />
            }
        </div>
    );
}

export default App;
