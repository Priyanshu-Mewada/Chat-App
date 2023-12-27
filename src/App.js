import React from 'react';
import LogInPage from './pages/LogInPage';
import HomePage from './pages/HomePage';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase';
function App() {
  // const user = false;
  const [user] = useAuthState(auth);
  return (
    <div>
      {!user ? <LogInPage/> : <HomePage/>}
    </div>
  );
}

export default App;
