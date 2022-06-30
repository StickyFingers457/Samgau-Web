import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from './pages/home-page'
import { AccountPage } from './pages/account-page'
import Login from './pages/login-page/Login'
import { OrderPage } from './pages/order-page'
import TaskPage from './pages/task-page/TaskPage'
import { ScrollToTop } from './components/scroll-to-top';
import { Header } from './components/header'
import { Footer } from './components/footer'
import { store } from './redux'
import React, { useEffect } from "react";
import { auth } from "./components/firebase/firebase";
import { useStateValue } from './redux/user/StateProvider';
function App() {
  const [{ }, dispatch] = useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('ПОЛЗОВАТЕЛЬ >>> ', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (


    <Provider store={store}>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/task" element={<TaskPage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
