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

function WhoToFollow() {
  return (
    <div class="ml-6 mt-6 p-3 bg-gray-200 rounded-lg">
      <h1 class="font-bold text-lg">You might like</h1>
      <div class="space-y-3 ">
        <a href="home.com" class="flex items-center px-4 -mx-2">
          <img
            class="object-cover mx-2 rounded-full h-11 w-11"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
            alt="avatar"
          />
          <div>
            <span class="mx-2 font-medium text-gray-800 dark:text-gray-200">
              Elon Musk
            </span>
            <br />
            <span class="mx-2 font-medium text-gray-500 dark:text-gray-200">
              @ElonMusk
            </span>
          </div>
          <button class="bg-black font-semibold py-2 px-4 border border-black-500 hover:border-transparent text-white ml-9 font-bold rounded-full mt-4 mr-3">
            Follow
          </button>
        </a>
      </div>
      <div class="space-y-3 ">
        <a href="home.com" class="flex items-center px-4 -mx-2">
          <img
            class="object-cover mx-2 rounded-full h-11 w-11"
            src="https://media.istockphoto.com/id/1369244588/photo/silhouette-of-a-businessman-holding-a-flag.jpg?b=1&s=170667a&w=0&k=20&c=G2ZvdbHeeeQBwNWlgs8TyGWVV7lHtgXhc_FpLMALao4="
            alt="avatar"
          />
          <div>
            <span class="mx-2 font-medium text-gray-800 dark:text-gray-200">
              Larry Madowo
            </span>
            <br />
            <span class="mx-2 font-medium text-gray-500 dark:text-gray-200">
              @LarryMadowo
            </span>
          </div>
          <button class="bg-black font-semibold py-2 px-4 border border-black-500 hover:border-transparent text-white ml-2 font-bold rounded-full mt-4 mr-3">
            Follow
          </button>
        </a>
      </div>
      <div class="space-y-3 ">
        <a href="home.com" class="flex items-center px-4 -mx-2">
          <img
            class="object-cover mx-2 rounded-full h-11 w-11"
            src="https://cdn.pixabay.com/photo/2023/03/02/14/46/pit-bull-7825554_640.jpg"
            alt="avatar"
          />
          <div>
            <span class="mx-2 font-medium text-gray-800 dark:text-gray-200">
              Luo Things
            </span>
            <br />
            <span class="mx-2 font-medium text-gray-500 dark:text-gray-200">
              @Jaluoh
            </span>
          </div>
          <button class="bg-black font-semibold py-2 px-4 border border-black-500 hover:border-transparent text-white ml-10 font-bold rounded-full mt-4 mr-3">
            Follow
          </button>
        </a>
      </div>
      <a href="show.co" class="text-blue-600">
        Show more
      </a>
    </div>
  );
}

function TrendTopics() {
  return (
    <div class="ml-6 mt-6 p-3 bg-gray-200 rounded-lg">
      <h1 class="font-bold text-lg">Trends for you</h1>
      <div class="mt-3">
        <h1 class="text-gray-500">Sports . Trending</h1>
        <h2 class="font-bold">Manchester United</h2>
        <h3 class="text-gray-500">100k Tweets</h3>
      </div>
      <div class="mt-3">
        <h1 class="text-gray-500">Trending in Kenya</h1>
        <h2 class="font-bold">Vikings</h2>
        <h3 class="text-gray-500">10k Tweets</h3>
      </div>
      <div class="mt-3">
        <h1 class="text-gray-500">Trending</h1>
        <h2 class="font-bold">Game of Thrones</h2>
        <h3 class="text-gray-500">15k Tweets</h3>
      </div>
    </div>
  );
}

export default function Trends() {
  return (
    <div>
      <Search />
      <Media />
      <WhoToFollow />
      <TrendTopics />
    </div>
  );
}
