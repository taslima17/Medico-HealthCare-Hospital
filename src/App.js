import logo from './logo.svg';
import './App.css';
import Banner from './Components/Home/Banner';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Faq from './Components/Faq/Faq';
import About from './Components/About/About';
import Apointment from './Components/Apoinment/Apointment';
import Teams from './Components/Teams/Teams';
import Login from './Components/Login/Login';
import AuthProvider, { AuthContext } from './Context/AuthProvider';
import Home from './Components/Home/Home';
import NotFound from './Components/PageNotFound/NotFound';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <PrivateRoute path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Apointment></Apointment>
            </PrivateRoute>
            <PrivateRoute path="/teams">
              <Teams></Teams>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
