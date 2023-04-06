import Aside from "./Aside";
import Policy from "./Policy";
import WhoToFollow from "./WhoToFollow";

function Main() {
  return <div class="w-3/5 border border-gray-200 h-auto  border-t-0"></div>;
}
export default function Bookmarks() {
  return (
    <div class="mx-20 mt-4 flex">
      <Aside />
      <Main />
      <div>
        <WhoToFollow />
        <Policy />
      </div>
    </div>
  );
}
