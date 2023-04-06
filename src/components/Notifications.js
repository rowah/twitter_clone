import Aside from "./Aside";
import WhoToFollow from "./WhoToFollow";
import Policy from "./Policy";

function Main() {
  return <div class="w-3/5 border border-gray-200 h-auto  border-t-0"></div>;
}
export default function Notifications() {
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
