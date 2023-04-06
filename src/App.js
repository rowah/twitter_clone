import Aside from "./components/Aside";
import Main from "./components/Main";
import ProfileRightAside from "./components/ProfileRightAside";

function App() {
  return (
    <div class="mx-20 mt-4 flex">
      {/* <header>
        <img src={logo} alt="logo" />{" "}
      </header> */}
      <Aside />
      <Main />
      <ProfileRightAside />
    </div>
  );
}

export default App;
