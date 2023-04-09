import Aside from "./Aside";
import TrendTopics from "./TrendTopics";
import WhoToFollow from "./WhoToFollow";

function CreateTweet() {
  return (
    <div class="flex">
      <div class="m-2 w-10 py-1">
        <img
          class="inline-block h-10 w-10 rounded-full"
          src="https://pbs.twimg.com/profile_images/1504385195037843457/p5kNTiBq_400x400.jpg"
          alt=""
        />
      </div>
      <div class="flex-1 px-2 pt-2 mt-2">
        <textarea
          class=" bg-transparent text-gray-400 font-medium text-lg w-full"
          rows="2"
          cols="50"
          placeholder="What's happening?"
        ></textarea>
      </div>
    </div>
  );
}

function CreateTweetIcons() {
  return (
    <div class="flex">
      <div class="w-10"></div>

      <div class="w-64 px-2">
        <div class="flex items-center">
          <div class="flex-1 text-center px-1 py-1 m-2">
            <a
              href="/"
              class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
            >
              <svg
                class="text-center h-7 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </a>
          </div>
          <div class="flex-1 text-center px-1 py-1 m-2">
            <a
              href="/"
              class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
            >
              <svg
                class="text-center h-7 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path>
              </svg>
            </a>
          </div>

          <div class="flex-1 text-center py-2 m-2">
            <a
              href="/"
              class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
            >
              <svg
                class="text-center h-7 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </a>
          </div>

          <div class="flex-1 text-center py-2 m-2">
            <a
              href="/"
              class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
            >
              <svg
                class="text-center h-7 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </a>
          </div>

          <div class="flex-1 text-center py-2 m-2">
            <a
              href="/"
              class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
            >
              <svg
                class="text-center h-7 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <button class="bg-blue-400 mt-5 hover:bg-blue-600 text-black font-bold py-2 px-8 rounded-full mr-8 float-right">
          Tweet
        </button>
      </div>
    </div>
  );
}
function MiddleNav() {
  return (
    <div class="bg-white sticky top-0 z-50">
      <div class="flex">
        <div class="flex-1 m-2">
          <h2 class="px-4 py-2 text-xl font-semibold text-black">Home</h2>
        </div>
        <div class="flex-1 px-4 py-2 m-2">
          <a
            href="/"
            class=" text-2xl font-medium rounded-full text-black hover:bg-blue-800 hover:text-blue-300 float-right"
          >
            <svg class="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <g>
                <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="mt-3 ml-10 flex text-lg">
        <span class="mr-20 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 border-b-4 border-blue-500">
          <a href="twts.com">For you</a>
        </span>
        <span class="mr-20 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 border-b-indigo-500">
          <a href="twts.com">Verified</a>
        </span>
        <span class="mr-20 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 border-b-indigo-500">
          <a href="twts.com">Following</a>
        </span>
      </div>
    </div>
  );
}

function FirstTweet() {
  return (
    <div class="hover:bg-gray-100">
      <div class="space-y-3 ">
        <a href="home.com" class="flex items-center px-4 -mx-2">
          <img
            class="object-cover mx-2 rounded-full h-11 w-11 mt-3"
            src="https://pbs.twimg.com/profile_images/1545796996216377346/Q1Ef_usA_400x400.jpg"
            alt="avatar"
          />
          <div>
            <span class="mx-2 font-medium text-gray-800 dark:text-gray-200">
              DHOLUO DISCTIONARY
            </span>
            <span class="mx-2 font-medium text-gray-500 dark:text-gray-200">
              @Thriving_luos
            </span>
            <span class="text-gray-500">Oct 25, 2022</span>
          </div>
        </a>
      </div>
      <a href="twee.co">
        <p class="ml-20 mr-1">
          "Let me die an African" is a powerful statement that reflects the
          desire of people to die within their own cultural setting. Many
          Africans believe that they have a spiritual connection to their land,
          which prompts them to want to remain there until they pass away.
        </p>
      </a>
      <div class="flex ml-20">
        <div class="w-full">
          <div class="flex items-center">
            <div class="flex-1 text-center">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </a>
            </div>

            <div class="flex-1 text-center py-2 m-2">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                </svg>
              </a>
            </div>

            <div class="flex-1 text-center py-2 m-2">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </a>
            </div>

            <div class="flex-1 text-center py-2 m-2">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                </svg>
              </a>
            </div>
            <div class="flex-1 text-center py-2 m-2">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                </svg>
              </a>
            </div>
            <div class="flex-1 text-center py-2 m-2">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-2" />
    </div>
  );
}

function SecondTweet() {
  return (
    <div class="hover:bg-gray-100">
      <div class="space-y-3 ">
        <a href="home.com" class="flex items-center px-4 -mx-2">
          <img
            class="object-cover mx-2 rounded-full h-11 w-11 mt-3"
            src="https://pbs.twimg.com/profile_images/1504385195037843457/p5kNTiBq_400x400.jpg"
            alt="avatar"
          />
          <div>
            <span class="mx-2 font-medium text-gray-800 dark:text-gray-200">
              Jay Rowah
            </span>
            <span class="mx-2 font-medium text-gray-500 dark:text-gray-200">
              @JRowah
            </span>
            <span class="text-gray-500 dark:text-gray-200">Oct 25, 2022</span>
          </div>
        </a>
      </div>
      <a href="twee.co">
        <p class="ml-20">
          Day 07 of the challenge{" "}
          <span class="text-blue-400">#100DaysOfCode</span> I was wondering what
          I can do with <span class="text-blue-400">#tailwindcss</span>, so just
          started building Twitter UI using Tailwind and so far it looks so
          promising. I will post my code after completion.
          <span class="text-blue-400"> #CodeNewbie</span>
        </p>
        <div class="md:flex-shrink pr-6 pt-3">
          <img
            class="rounded-lg w-4/5 h-64 ml-20"
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
            alt="Woman paying for a purchase"
          />
        </div>
      </a>
      <div class="flex ml-20">
        <div class="w-full">
          <div class="flex items-center">
            <div class="flex-1 text-center">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </a>
            </div>

            <div class="flex-1 text-center py-2 m-2">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                </svg>
              </a>
            </div>

            <div class="flex-1 text-center py-2 m-2">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </a>
            </div>

            <div class="flex-1 text-center py-2 m-2">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                </svg>
              </a>
            </div>
            <div class="flex-1 text-center py-2 m-2">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                </svg>
              </a>
            </div>
            <div class="flex-1 text-center py-2 m-2">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-2" />
    </div>
  );
}

function ThirdTweet() {
  return (
    <div class="hover:bg-gray-100">
      <div class="space-y-3 ">
        <a href="home.com" class="flex items-center px-4 -mx-2">
          <img
            class="object-cover mx-2 rounded-full h-11 w-11 mt-3"
            src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
            alt="avatar"
          />
          <div>
            <span class="mx-2 font-medium text-gray-800 dark:text-gray-200">
              Sonali Hirave
            </span>
            <span class="mx-2 font-medium text-gray-500 dark:text-gray-200">
              @ShonaDesign
            </span>
            <span class="text-gray-500">Oct 25, 2022</span>
          </div>
        </a>
      </div>
      <a href="twee.co">
        <p class="ml-20 mr-1">
          Day 07 of the challenge{" "}
          <span class="text-blue-400">#100DaysOfCode</span>I was wondering what
          I can do with <span class="text-blue-400">#tailwindcss</span>, so just
          started building Twitter UI using Tailwind and so far it looks so
          promising. I will post my code after completion. [07/100]
          <span class="text-blue-400"> #WomenWhoCode #CodeNewbie</span>
        </p>
      </a>
      <div class="flex ml-20">
        <div class="w-full">
          <div class="flex items-center">
            <div class="flex-1 text-center">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </a>
            </div>

            <div class="flex-1 text-center py-2 m-2">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                </svg>
              </a>
            </div>

            <div class="flex-1 text-center py-2 m-2">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </a>
            </div>

            <div class="flex-1 text-center py-2 m-2">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                </svg>
              </a>
            </div>
            <div class="flex-1 text-center py-2 m-2">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                </svg>
              </a>
            </div>
            <div class="flex-1 text-center py-2 m-2">
              <a
                href="/"
                class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-2" />
    </div>
  );
}
function Search() {
  return (
    // <div class="w-2/5 h-12">

    <div class="w-full mt-4 sticky top-2 z-50">
      <form class="ml-10 flex sticky top-4 z-50">
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
export default function Home() {
  return (
    <div class="bg-white">
      <div class="mx-20 mt-4 flex">
        <Aside />
        <div class="w-3/5 border border-gray-200 h-auto  border-t-0">
          {/* <!--middle wall--> */}
          <MiddleNav />

          <hr class="border-gray-200" />
          <CreateTweet />

          <CreateTweetIcons />

          <hr class="border-gray-200 border-1" />
          <FirstTweet />

          <hr class="border-gray-200" />

          {/* <SecondTweetHandle /> */}
          <SecondTweet />

          <hr class="border-gray-200" />

          <ThirdTweet />

          <hr class="border-gray-200" />
        </div>

        <div />
        <div>
          <Search />
          <WhoToFollow />
          <TrendTopics />
        </div>
      </div>
    </div>
  );
}