import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch()
  useEffect(() => {
    const unsubcribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        // const uid = user.uid;
        dispatch(login({
          uid: user.uid,
          email:user.email
        }))
        
      } else {
       dispatch(logout())
      }
    });
    return unsubcribe
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
