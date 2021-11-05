import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Pages/Home/Home/Home';
import NotFound from './Component/Pages/NotFound/NotFound';
import Header from './Component/Pages/Home/Header/Header';
import Footer from './Component/Pages/Home/Footer/Footer';
import Workers from './Component/Pages/Home/Workers/Workers';
import AboutUs from './Component/Pages/AboutUs/AboutUs';
import Login from './Component/Pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Component/Pages/Login/Login/PrivateRoute/PrivateRoute';
import Detail from './Component/Pages/Home/SingleDetail/Detail';
import MyOrder from './Component/Pages/Home/MyOrder/MyOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/workers">
              <Workers></Workers>
            </Route>
            <PrivateRoute path='/detail/:serviceId'>
              <Detail></Detail>
            </PrivateRoute>
            <PrivateRoute path='/myOrders'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
