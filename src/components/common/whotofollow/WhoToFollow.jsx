export default function WhoToFollow() {
  return (
    <div class="ml-6 mt-6 p-3 bg-gray-200 rounded-lg">
      <div class="flex">
        <div class="flex-1 m-2">
          <h2 class="px-4 py-2 text-xl w-48 font-semibold text-black">
            Who to follow
          </h2>
        </div>
      </div>

      {/* <!--first person who to follow-->  */}

      <div class="flex flex-shrink-0">
        <div class="flex-1 ">
          <div class="flex items-center w-48">
            <div>
              <img
                class="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                alt=""
              />
            </div>
            <div class="ml-3 mt-3">
              <p class="text-base leading-6 font-medium text-black">
                Luo Things
              </p>
              <p class="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                @LuoThings
              </p>
            </div>
          </div>
        </div>
        <div class="flex-1 px-4 py-2 m-2">
          <a href="/" class=" float-right">
            <button class="bg-black hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
              Follow
            </button>
          </a>
        </div>
      </div>

      {/* <!--first person who to follow-->  */}

      <div class="flex flex-shrink-0">
        <div class="flex-1 ">
          <div class="flex items-center w-48">
            <div>
              <img
                class="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
                alt=""
              />
            </div>
            <div class="ml-3 mt-3">
              <p class="text-base leading-6 font-medium text-black">
                Elon Musk
              </p>
              <p class="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                @elonmusk
              </p>
            </div>
          </div>
        </div>
        <div class="flex-1 px-4 py-2 m-2">
          <a href="/" class=" float-right">
            <button class="bg-black hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
              Follow
            </button>
          </a>
        </div>
      </div>

      {/* <!--second person who to follow-->  */}

      <div class="flex flex-shrink-0">
        <div class="flex-1 ">
          <div class="flex items-center w-48">
            <div>
              <img
                class="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                src="https://pbs.twimg.com/profile_images/1625208971136012322/5kVpZfoG_400x400.jpg"
                alt=""
              />
            </div>
            <div class="ml-3 mt-3">
              <p class="text-base leading-6 font-medium text-black">
                Larry Madowo
              </p>
              <p class="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                @LarryMadowo
              </p>
            </div>
          </div>
        </div>
        <div class="flex-1 px-4 py-2 m-2">
          <a href="/" class=" float-right">
            <button class="bg-black hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
              Follow
            </button>
          </a>
        </div>
      </div>

      {/* <!--show more--> */}

      <div class="flex">
        <div class="flex-1 p-4">
          <a href="kh.c">
            <h2 class="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>
          </a>
        </div>
      </div>
    </div>
  );
}
