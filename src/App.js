import './App.css';
import {
  Routes,
  Route,
  useNavigate,
  useParams,
  HashRouter,
  NavLink,
  Link
} from 'react-router-dom';
import { useEffect, useState } from 'react';

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
const Id = () => {
  const{Id} = useParams();
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
    .then(res=>res.json())
    .then(result=>{
      const newData = result.data.XML_Head.Infos.Info
      setData(newData);
    })
  },[])
  return (
    <div className="idPage">
      <p>這是註冊頁面</p>
      {data.map((item,index) =>{
        return(
          <div className="item" key={index}><Link to={`../id/${item.Id}`}>{item.Name}</Link></div>
        )
      })}
    </div>
  );
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
          <NavLink to="/id">
            <p>Id 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route index element={<Home />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/todo" element={<Todo />} /> 
          <Route path=":Id" element={<Id />} /> 
        </Routes>
        
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
