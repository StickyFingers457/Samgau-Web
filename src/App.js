import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from './pages/home-page'
import { AccountPage } from './pages/account-page'
import {ScrollToTop} from './components/scroll-to-top';
import { Header } from './components/header'
import { Footer } from './components/footer'
import { store } from './redux'
import TaskPage from './pages/task-page/TaskPage'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/account">
              <AccountPage />
            </Route>

            <Route exact path="/tasks">
              <TaskPage />
            </Route>

            
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
