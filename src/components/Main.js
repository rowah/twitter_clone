import Profile from "./Profile";
function Main() {
  return (
    <div class="w-1/2 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <div class="flex sticky top-0 z-50 bg-white">
        <button
          type="button"
          class=" text-black rounded-l-md border-r border-gray-100 py-2 hover:bg-grey-700 hover:bg-grey px-3"
        >
          <div class="flex flex-row align-middle">
            <svg
              class="w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
        <div>
          <span class="font-bold">Jay Rowah</span>
          <br />
          <span class="text-gray-500">54.5K Tweets</span>
        </div>
      </div>
      <Profile />
    </div>
  );
}

export default Main;
