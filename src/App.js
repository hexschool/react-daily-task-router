import './App.css';
import {
  Routes,
  Route,
  useNavigate,
  HashRouter,
  NavLink,
} from 'react-router-dom';
import IdList from './components/Id/IdList'
import IdItem from './components/Id/IdItem'
import IdPage from './components/Id'

const Logout = () =>{
  const navigate = useNavigate();
  return <button className="nav-link" onClick={()=>{navigate('/login',{ replace: true })}}>Logout</button>
}
const Home = () => {
  return <p>哇係首頁</p>
  }
const Todo = () => {    
  return <p>這是 Todo 頁面 
  </p>;
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};


function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/idPage">
            <p>Id 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route index element={<Home />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/todo" element={<Todo />} /> 
          <Route path="/idPage" element={<IdPage />} > 
            <Route index element={<IdList />} /> 
            <Route path=":Id" element={<IdItem />} /> 
          </Route>
        </Routes>
        
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
