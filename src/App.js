import Aside from "./components/Aside";
import Main from "./components/Main";
import Trends from "./components/Trends";

function App() {
  return (
    <div class="mx-20 mt-4 flex">
      {/* <header>
        <img src={logo} alt="logo" />{" "}
      </header> */}
      <Aside />
      <Main />
      <Trends />
    </div>
  );
}

export default App;
