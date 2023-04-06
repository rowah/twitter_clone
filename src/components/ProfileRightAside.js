import TrendTopics from "./TrendTopics";
import WhoToFollow from "./WhoToFollow";
function Search() {
  return (
    <div class="w-9/10">
      <form class="ml-10 flex sticky top-0 z-50">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10"
            placeholder="Search Twitter"
            required
          />
        </div>
      </form>
    </div>
  );
}

function Media() {
  return (
    <div class="ml-8 grid grid-cols-2 gap-1 mt-4 sm:gap-0.5 border rounded-lg">
      <div class="col-span-1">
        <img
          src="https://cdn.pixabay.com/photo/2022/03/08/02/15/beach-island-7054907__340.jpg"
          alt="one"
          class="w-30 h-20"
        />
      </div>
      <div class="col-span-1">
        <img
          src="https://cdn.pixabay.com/photo/2023/03/27/11/17/wild-plant-7880509__340.jpg"
          alt="two"
          class="w-30 h-20"
        />
      </div>
      <div class="col-span-1">
        <img
          src="https://cdn.pixabay.com/photo/2023/03/17/12/48/feather-7858585__340.jpg"
          alt="three"
          class="w-30 h-20"
        />
      </div>
      <div class="col-span-1">
        <img
          src="https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792__340.jpg"
          alt="four"
          class="w-30 h-20"
        />
      </div>
      <div class="col-span-1">
        <img
          src="https://cdn.pixabay.com/photo/2023/03/17/12/48/feather-7858585__340.jpg"
          alt="three"
          class="w-30 h-20"
        />
      </div>
      <div class="col-span-1">
        <img
          src="https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792__340.jpg"
          alt="four"
          class="w-30 h-20"
        />
      </div>
    </div>
  );
}

export default function ProfileRightAside() {
  return (
    <div>
      <Search />
      <Media />
      <WhoToFollow />
      <TrendTopics />
    </div>
  );
}
