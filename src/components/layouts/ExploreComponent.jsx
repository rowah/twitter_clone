import React from "react";
import Aside from "../common/sidebar/Aside";
import WhoToFollow from "../common/whotofollow/WhoToFollow";
import Policy from "../common/policies/Policy";

function NBAGames() {
  return (
    <div>
      <h1 class="ml-8 mt-4 font-bold">What's happening</h1>
      <div class="ml-8 mr-6 mt-4">
        <span>KPL</span>
        <span>Final . GOR Won</span>
        <h1 class="bg-blue-900 h-10 text-white pt-2 pl-8">
          AFC Leopards<span>1</span>
        </h1>
        <h1 class="bg-green-600 h-10 pt-2 pl-8">
          Gor Mahia FC<span>4</span>
        </h1>
      </div>
      <div class="ml-8 mr-6 mt-4">
        <span>KPL</span>
        <span>Final . Sofapaka Won</span>
        <h1 class="bg-purple-300 h-10 pt-2 pl-8">
          Sofapaka FC<span>2</span>
        </h1>

        <h1 class="bg-red-900 h-10 pt-2 pl-8">
          Mathari United<span>0</span>
        </h1>
      </div>
      <div class="ml-8 mr-6 mt-4">
        <span>EPL</span>
        <span>Final . Man Utd Won</span>
        <h1 class="bg-red-600 h-10 text-white pt-2 pl-8">
          Manchester United FC<span>2</span>
        </h1>
        <h1 class="bg-blue-600 h-10 pt-2 pl-8">
          Everton FC<span>0</span>
        </h1>
      </div>
      <div class="ml-8 mr-6 mt-4">
        <span>NBA</span>
        <span>Final . LA Won</span>
        <h1 class="bg-blue-900 h-10 text-white pt-2 pl-8">
          LA Galaxy<span>133</span>
        </h1>
        <h1 class="bg-green-600 h-10 pt-2 pl-8">
          Golden State Warriors<span>130</span>
        </h1>
      </div>
      <div class="flex">
        <div class="flex-1 p-4">
          <a href="kh.c">
            <h2 class="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>
          </a>
        </div>
      </div>
      <hr />
      <div class="">
        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 ">
          <g>
            <path d="M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div class="w-1/2 border-r border-black-600">
      <div class="ml-2 mt-4 p-2">
        {/* <div class="max-w-sm rounded-lg bg-gray-200 overflow-hidden shadow-lg m-4 mr-20"> */}
        <div class="flex sticky top-1 bg-white">
          <div class="flex-1 m-2">
            <form class="ml-3 flex">
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
          <div class="flex-1 px-4 py-2 m-2">
            <a
              href="/"
              class=" text-2xl rounded-full text-black hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                class="m-2 h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </a>
          </div>
        </div>
        <h1 class="ml-4 font-bold">Trends For You</h1>

        {/* <!--first trending tweet--> */}
        <div class="flex">
          <div class="flex-1">
            <p class="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              1 . Trending
            </p>
            <h2 class="px-4 ml-2 w-48 font-bold text-black">#Kilimani</h2>
            <p class="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              5,466 Tweets
            </p>
          </div>
          <div class="flex-1 px-4 py-2 m-2">
            <a
              href="/"
              class=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                class="m-2 h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* <!--second trending tweet--> */}

        <div class="flex">
          <div class="flex-1">
            <p class="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              2 . Politics . Trending
            </p>
            <h2 class="px-4 ml-2 w-48 font-bold text-black">#DPGachagua</h2>
            <p class="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              8,464 Tweets
            </p>
          </div>
          <div class="flex-1 px-4 py-2 m-2">
            <a
              href="/"
              class=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                class="m-2 h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1">
            <p class="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              3 . Trending
            </p>
            <h2 class="px-4 ml-2 w-48 font-bold text-black">#Shaffie</h2>
            <p class="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              5,466 Tweets
            </p>
          </div>
          <div class="flex-1 px-4 py-2 m-2">
            <a
              href="/"
              class=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                class="m-2 h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* <!--third trending tweet--> */}

        <div class="flex">
          <div class="flex-1">
            <p class="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              4 . Rock . Trending
            </p>
            <h2 class="px-4 ml-2 w-48 font-bold text-black">#Ferrari</h2>
            <p class="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              5,586 Tweets
            </p>
          </div>
          <div class="flex-1 px-4 py-2 m-2">
            <a
              href="/"
              class=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                class="m-2 h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* <!--forth trending tweet--> */}

        <div class="flex">
          <div class="flex-1">
            <p class="px-4 ml-2 mt-3 w-48 text-xs text-gray-600">
              5 . Auto Racing . Trending
            </p>
            <h2 class="px-4 ml-2 w-48 font-bold text-black">#vettel</h2>
            <p class="px-4 ml-2 mb-3 w-48 text-xs text-gray-600">
              9,416 Tweets
            </p>
          </div>
          <div class="flex-1 px-4 py-2 m-2">
            <a
              href="/"
              class=" text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
            >
              <svg
                class="m-2 h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
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
      <hr />
      <NBAGames />
    </div>
  );
}

export default function ExploreComponent() {
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
