import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  HashRouter,
  NavLink,
  useNavigate,
} from 'react-router-dom';

const Logout  = () => {
  let navigate = useNavigate();
  return(
    <button onClick={() => {navigate('/login')}}>登出</button>
  )
}

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面 </p>
      <Logout  />
    </>
  )
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
      <BrowserRouter>
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
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/todo" element={<Todo />} /> 
        </Routes>
        {/* 練習區 */}
      </BrowserRouter>
    </div>
  );
}

export default App;
