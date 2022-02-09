import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <Header></Header>
      {!isAuthenticated && <Auth></Auth>}
      {isAuthenticated && <UserProfile></UserProfile>}
      <Counter />
    </>
  );
}

export default App;
