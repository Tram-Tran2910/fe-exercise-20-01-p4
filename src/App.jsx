import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Account from "./pages/Account";
import PrivateRouter from "./PrivateRouter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"  />} />
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRouter />}>
        <Route path="/account" element={<Account />} />
      </Route>

      <Route path="*" element={<h2>404 Not Found</h2>} />
    </Routes>
  );
}

export default App;
