import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Signup from './components/Signup';
import WelcomeUser from './components/WelcomeUser';


function App() {
  return (
   <>
   <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signUp" element={<Signup/>} />
        <Route path="/welcomeUser/:id" element={<WelcomeUser/>} />
      </Routes>
   </>
  )
}

export default App;
