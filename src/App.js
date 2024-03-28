import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import ListUser from "./Components/ListUser";
import CreateUser from "./Components/CreateUser";
import UpdateUser from "./Components/UpdateUser";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Login/>}></Route>
       <Route path='/user' element={<ListUser/>}></Route>
       <Route path="/user/create" element={<CreateUser/>}></Route>
       <Route path="/user/:id/edit" element={<UpdateUser/>}></Route>
     </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
