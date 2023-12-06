import './App.css';
import Homepage from './pages/HomePage';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectProfileInfo } from './store/auth/selectors';
import { useEffect } from 'react';
import { loginFromExistingTokenThunk } from './store/auth/thunks';

function App() {
  const dispatch = useDispatch();

  // this useEffect will only run once when App is rendered for the first time
  // or if dispatch changes. We as developers know dispatch will not change because it is always dispatch = useDispatch() hook
  useEffect(() => {
    // Dispatch a Redux thunk that checks if the token exists in local browser storage
    // If it does exist, it will automatically make the /me API request with the token
    // If it doesn't exist, nothing else happens
    dispatch(loginFromExistingTokenThunk);
  }, [dispatch])

  // Use a selector here to get the name of the user that is currently logged in
  // If that info doesn't exist yet, just show "Hello user, please log in" instead
  const profileInfo = useSelector(selectProfileInfo);
  return (
    <div className="App">
      <p>Hello {profileInfo ? profileInfo.name : 'user, please log in'}!</p>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
