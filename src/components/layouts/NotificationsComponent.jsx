import Aside from "../common/sidebar/Aside";
import WhoToFollow from "../common/whotofollow/WhoToFollow";
import Policy from "../common/policies/Policy";
import { FiSettings } from "react-icons/fi";
import SearchTwitter from "../common/search/SearchTwitter";

function MiddleNav() {
  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="flex">
        <div className="flex-1 m-2">
          <h2 className="px-4 py-2 text-xl font-semibold text-black">
            Notifications
          </h2>
        </div>

        <FiSettings size={20} className="mt-5 mr-5" />
      </div>
      <div className=" flex text-base h-14">
        <div className="w-1/2 hover:bg-gray-200 pt-3">
          <span className="dark:hover:bg-gray-800 dark:hover:text-gray-200 border-b-4 border-blue-500 ml-20 pb-4">
            <a href="twts.com">All</a>
          </span>
        </div>
        <div className="w-1/2 hover:bg-gray-200 pt-3">
          <span className="dark:hover:bg-gray-800 dark:hover:text-gray-200 ml-20 pb-4">
            <a href="twts.com">Verified</a>
          </span>
        </div>

        <div className="w-1/2 hover:bg-gray-200 pt-3">
          <span className="dark:hover:bg-gray-800 dark:hover:text-gray-200 border-b-indigo-500 ml-20 pb-4">
            <a href="twts.com">Mentions</a>
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
}

function TrendTopics() {
  return (
    <div className="sticky">
      <div className="ml-6 mt-6 p-3 bg-gray-200 rounded-lg ">
        {/* <div className="max-w-sm rounded-lg bg-gray-200 overflow-hidden shadow-lg m-4 mr-20"> */}
        <div className="flex">
          <div className="flex-1 m-2">
            <h2 className="px-4 py-2 text-xl w-48 font-semibold text-black">
              Kenya trends
            </h2>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href="/"
              className=" text-2xl rounded-full text-black hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                className="m-2 h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* <!--first trending tweet--> */}
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              1 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-black">#Kilimani</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              5,466 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href="/"
              className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* <!--second trending tweet--> */}

        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              2 . Politics . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-black">#DPGachagua</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              8,464 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href="/"
              className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              3 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-black">#Shaffie</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              5,466 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href="/"
              className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* <!--third trending tweet--> */}

        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              4 . Rock . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-black">#Ferrari</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              5,586 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href="/"
              className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* <!--forth trending tweet--> */}

        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              5 . Auto Racing . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold text-black">#vettel</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              9,416 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href="/"
              className=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* <!--show more--> */}

        <div className="flex">
          <div className="flex-1 p-4">
            <a href="kh.c">
              <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">
                Show more
              </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="w-1/2 border border-gray-200 h-auto  border-t-0">
      <MiddleNav />
      <div className="hover:bg-gray-100">
        <div className="space-y-3 ">
          <a href="home.com" className="flex items-center px-4 -mx-2">
            <img
              className="object-cover mx-2 rounded-full h-11 w-11 mt-3"
              src="https://pbs.twimg.com/profile_images/1413618669750525952/K690cdc7_400x400.jpg"
              alt="avatar"
            />
            <div>
              <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
                G
              </span>
              <span className="mx-2 font-medium text-gray-500 dark:text-gray-200">
                @HICCUP_o
              </span>
              <span>Apr 9</span>
              <div>
                <span className="ml-2 text-gray-500">
                  Replying to{" "}
                  <a href="/profile" className="text-blue-500">
                    @Jrowah
                  </a>
                </span>
              </div>
            </div>
          </a>
        </div>
        <a href="twee.co">
          <p className="ml-20">As it is</p>
        </a>
        <div className="flex ml-20">
          <div className="w-full">
            <div className="flex items-center">
              <div className="flex-1 text-center">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
        <hr className="mt-2" />
      </div>
      <div className="hover:bg-gray-100">
        <div className="space-y-3 ">
          <a href="home.com" className="flex items-center px-4 -mx-2">
            <img
              className="object-cover mx-2 rounded-full h-11 w-11 mt-3"
              src="https://pbs.twimg.com/profile_images/1644792042780762113/yU1ZyRdc_400x400.jpg"
              alt="avatar"
            />
            <div>
              <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
                WELIMO BSc🇰🇪
              </span>
              <span className="mx-2 font-medium text-gray-500 dark:text-gray-200">
                @WelimoBusuku
              </span>
              <span>Apr 7</span>
              <div>
                <span className="ml-2 text-gray-500">
                  Replying to{" "}
                  <a href="/profile" className="text-blue-500">
                    @Jrowah
                  </a>
                </span>
              </div>
            </div>
          </a>
        </div>
        <a href="twee.co">
          <p className="ml-20">Ndio kuwa mkenya.</p>
        </a>
        <div className="flex ml-20">
          <div className="w-full">
            <div className="flex items-center">
              <div className="flex-1 text-center">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
        <hr className="mt-2" />
      </div>
      <div className="hover:bg-gray-100">
        <div className="space-y-3 ">
          <a href="home.com" className="flex items-center px-4 -mx-2">
            <img
              className="object-cover mx-2 rounded-full h-11 w-11 mt-3"
              src="https://pbs.twimg.com/profile_images/1504385195037843457/p5kNTiBq_400x400.jpg"
              alt="avatar"
            />
            <div>
              <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
                Jay Rowah
              </span>
              <span className="mx-2 font-medium text-gray-500 dark:text-gray-200">
                @JRowah
              </span>
              <span>Oct 25, 2022</span>
            </div>
          </a>
        </div>
        <a href="twee.co">
          <p className="ml-20">
            Day 07 of the challenge{" "}
            <span className="text-blue-400">#100DaysOfCode</span>I was wondering
            what I can do with{" "}
            <span className="text-blue-400">#tailwindcss</span>, so just started
            building Twitter UI using Tailwind and so far it looks so promising.
            I will post my code after completion. [07/100]
            <span className="text-blue-400"> #WomenWhoCode #CodeNewbie</span>
          </p>
          <div className="md:flex-shrink pr-6 pt-3">
            <img
              className="rounded-lg w-4/5 h-64 ml-20"
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
              alt="Woman paying for a purchase"
            />
          </div>
        </a>
        <div className="flex ml-20">
          <div className="w-full">
            <div className="flex items-center">
              <div className="flex-1 text-center">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
        <hr className="mt-2" />
      </div>
      <div className="hover:bg-gray-100">
        <div className="space-y-3 ">
          <a href="home.com" className="flex items-center px-4 -mx-2">
            <img
              className="object-cover mx-2 rounded-full h-11 w-11 mt-3"
              src="https://pbs.twimg.com/profile_images/1504385195037843457/p5kNTiBq_400x400.jpg"
              alt="avatar"
            />
            <div>
              <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
                Jay Rowah
              </span>
              <span className="mx-2 font-medium text-gray-500 dark:text-gray-200">
                @JRowah
              </span>
              <span>Oct 25, 2022</span>
            </div>
          </a>
        </div>
        <a href="twee.co">
          <p className="ml-20">
            Day 07 of the challenge{" "}
            <span className="text-blue-400">#100DaysOfCode</span>I was wondering
            what I can do with{" "}
            <span className="text-blue-400">#tailwindcss</span>, so just started
            building Twitter UI using Tailwind and so far it looks so promising.
            I will post my code after completion. [07/100]
            <span className="text-blue-400"> #WomenWhoCode #CodeNewbie</span>
          </p>
          <div className="md:flex-shrink pr-6 pt-3">
            <img
              className="rounded-lg w-4/5 h-64 ml-20"
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
              alt="Woman paying for a purchase"
            />
          </div>
        </a>
        <div className="flex ml-20">
          <div className="w-full">
            <div className="flex items-center">
              <div className="flex-1 text-center">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
        <hr className="mt-2" />
      </div>
      <div className="hover:bg-gray-100">
        <div className="space-y-3 ">
          <a href="home.com" className="flex items-center px-4 -mx-2">
            <img
              className="object-cover mx-2 rounded-full h-11 w-11 mt-3"
              src="https://pbs.twimg.com/profile_images/1504385195037843457/p5kNTiBq_400x400.jpg"
              alt="avatar"
            />
            <div>
              <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
                Jay Rowah
              </span>
              <span className="mx-2 font-medium text-gray-500 dark:text-gray-200">
                @JRowah
              </span>
              <span>Oct 25, 2022</span>
            </div>
          </a>
        </div>
        <a href="twee.co">
          <p className="ml-20">
            Day 07 of the challenge{" "}
            <span className="text-blue-400">#100DaysOfCode</span>I was wondering
            what I can do with{" "}
            <span className="text-blue-400">#tailwindcss</span>, so just started
            building Twitter UI using Tailwind and so far it looks so promising.
            I will post my code after completion. [07/100]
            <span className="text-blue-400"> #WomenWhoCode #CodeNewbie</span>
          </p>
          <div className="md:flex-shrink pr-6 pt-3">
            <img
              className="rounded-lg w-4/5 h-64 ml-20"
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
              alt="Woman paying for a purchase"
            />
          </div>
        </a>
        <div className="flex ml-20">
          <div className="w-full">
            <div className="flex items-center">
              <div className="flex-1 text-center">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
        <hr className="mt-2" />
      </div>
      <div className="hover:bg-gray-100">
        <div className="space-y-3 ">
          <a href="home.com" className="flex items-center px-4 -mx-2">
            <img
              className="object-cover mx-2 rounded-full h-11 w-11 mt-3"
              src="https://pbs.twimg.com/profile_images/1504385195037843457/p5kNTiBq_400x400.jpg"
              alt="avatar"
            />
            <div>
              <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
                Jay Rowah
              </span>
              <span className="mx-2 font-medium text-gray-500 dark:text-gray-200">
                @JRowah
              </span>
              <span>Oct 25, 2022</span>
            </div>
          </a>
        </div>
        <a href="twee.co">
          <p className="ml-20">
            Day 07 of the challenge{" "}
            <span className="text-blue-400">#100DaysOfCode</span>I was wondering
            what I can do with{" "}
            <span className="text-blue-400">#tailwindcss</span>, so just started
            building Twitter UI using Tailwind and so far it looks so promising.
            I will post my code after completion. [07/100]
            <span className="text-blue-400"> #WomenWhoCode #CodeNewbie</span>
          </p>
          <div className="md:flex-shrink pr-6 pt-3">
            <img
              className="rounded-lg w-4/5 h-64 ml-20"
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
              alt="Woman paying for a purchase"
            />
          </div>
        </a>
        <div className="flex ml-20">
          <div className="w-full">
            <div className="flex items-center">
              <div className="flex-1 text-center">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
        <hr className="mt-2" />
      </div>
      <div className="hover:bg-gray-100">
        <div className="space-y-3 ">
          <a href="home.com" className="flex items-center px-4 -mx-2">
            <img
              className="object-cover mx-2 rounded-full h-11 w-11 mt-3"
              src="https://pbs.twimg.com/profile_images/1504385195037843457/p5kNTiBq_400x400.jpg"
              alt="avatar"
            />
            <div>
              <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
                Jay Rowah
              </span>
              <span className="mx-2 font-medium text-gray-500 dark:text-gray-200">
                @JRowah
              </span>
              <span>Oct 25, 2022</span>
            </div>
          </a>
        </div>
        <a href="twee.co">
          <p className="ml-20">
            Day 07 of the challenge{" "}
            <span className="text-blue-400">#100DaysOfCode</span>I was wondering
            what I can do with{" "}
            <span className="text-blue-400">#tailwindcss</span>, so just started
            building Twitter UI using Tailwind and so far it looks so promising.
            I will post my code after completion. [07/100]
            <span className="text-blue-400"> #WomenWhoCode #CodeNewbie</span>
          </p>
          <div className="md:flex-shrink pr-6 pt-3">
            <img
              className="rounded-lg w-4/5 h-64 ml-20"
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
              alt="Woman paying for a purchase"
            />
          </div>
        </a>
        <div className="flex ml-20">
          <div className="w-full">
            <div className="flex items-center">
              <div className="flex-1 text-center">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
        <hr className="mt-2" />
      </div>
    </div>
  );
}
export default function NotificationsComponent() {
  return (
    <div className="mx-20 mt-4 flex">
      <Aside />
      <Main />
      <div>
        <SearchTwitter />
        <TrendTopics />
        <WhoToFollow />
        <Policy />
      </div>
    </div>
  );
}
