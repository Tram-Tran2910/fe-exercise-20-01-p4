import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter() {
  const isAuth = localStorage.getItem("isAuth") === "true";

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  } else {
    return <Outlet />;
  }
}

export default PrivateRouter;
