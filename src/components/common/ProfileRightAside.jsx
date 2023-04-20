import TrendTopics from "./trends/TrendTopics";
import WhoToFollow from "./whotofollow/WhoToFollow";
import SearchTwitter from "./search/SearchTwitter";

function Media() {
  return (
    <div className="ml-8 grid grid-cols-2 gap-1 mt-4 sm:gap-0.5 border rounded-lg">
      <div className="col-span-1">
        <img
          src="https://cdn.pixabay.com/photo/2022/03/08/02/15/beach-island-7054907__340.jpg"
          alt="one"
          className="w-30 h-20"
        />
      </div>
      <div className="col-span-1">
        <img
          src="https://cdn.pixabay.com/photo/2023/03/27/11/17/wild-plant-7880509__340.jpg"
          alt="two"
          className="w-30 h-20"
        />
      </div>
      <div className="col-span-1">
        <img
          src="https://cdn.pixabay.com/photo/2023/03/17/12/48/feather-7858585__340.jpg"
          alt="three"
          className="w-30 h-20"
        />
      </div>
      <div className="col-span-1">
        <img
          src="https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792__340.jpg"
          alt="four"
          className="w-30 h-20"
        />
      </div>
      <div className="col-span-1">
        <img
          src="https://cdn.pixabay.com/photo/2023/03/17/12/48/feather-7858585__340.jpg"
          alt="three"
          className="w-30 h-20"
        />
      </div>
      <div className="col-span-1">
        <img
          src="https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792__340.jpg"
          alt="four"
          className="w-30 h-20"
        />
      </div>
    </div>
  );
}

export default function ProfileRightAside() {
  return (
    <div>
      <SearchTwitter />
      <Media />
      <WhoToFollow />
      <TrendTopics />
    </div>
  );
}
