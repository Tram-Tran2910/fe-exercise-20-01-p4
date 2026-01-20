import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isAuth", "false");
    navigate("/login");
  };

  return (
    <div>
      <h1>Account</h1>
      <p>Welcome to account page!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Account;
