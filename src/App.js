import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./component/Login";
import Users from "./pages/Users";
import Books from "./pages/Books";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/books" element={<Books />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
