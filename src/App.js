import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AllProducts from './components/AllProducts/AllProducts';
import Purchase from './components/Purchase/Purchase';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrders from './components/DashBoard/MyOrders/MyOrders';
import GiveReview from './components/DashBoard/GiveReview/GiveReview';
import Pay from './components/DashBoard/Pay/Pay';
import ManageAllProducts from './components/ManageAllProducts/ManageAllProducts';
import ManageOrders from './components/ManageOrders/ManageOrders';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import AddProduct from './components/AddProduct/AddProduct';
import AdminRoute from './components/AdminRoute/AdminRoute';
import DashBoardNav from './components/DashBoard/DashBoardNav/DashBoardNav';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/allProducts'>
              <AllProducts></AllProducts>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/register'>
              <Register></Register>
            </Route>

            <PrivateRoute path='/purchase/:purchaseId'>
              <Purchase></Purchase>
            </PrivateRoute>

            <PrivateRoute path='/pay'>
              <Pay></Pay>
            </PrivateRoute>

            <PrivateRoute path='/dashboard'>
              <DashBoard></DashBoard>
            </PrivateRoute>

            <PrivateRoute path='/dashboardNav'>
              <DashBoardNav />
            </PrivateRoute>

            <PrivateRoute path='/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path='/review'>
              <GiveReview></GiveReview>
            </PrivateRoute>

            <AdminRoute path='/manageallproducts'>
              <ManageAllProducts></ManageAllProducts>
            </AdminRoute>

            <AdminRoute path='/manageorders'>
              <ManageOrders></ManageOrders>
            </AdminRoute>

            <AdminRoute path='/addproduct'>
              <AddProduct></AddProduct>
            </AdminRoute>

            <AdminRoute path='/makeadmin'>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>

            <Route path='*'>
              <h1 className='text-danger m-5'>Page Not Found</h1>
              <br />
              <Link to='/home'><h3>Back To Home</h3></Link>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
