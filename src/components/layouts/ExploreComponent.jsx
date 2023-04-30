import React from "react";
import Aside from "../common/sidebar/Aside";
import WhoToFollow from "../common/whotofollow/WhoToFollow";
import Policy from "../common/policies/Policy";
import SearchTwitter from "../common/search/SearchTwitter";

function NBAGames() {
  return (
    <div>
      <h1 className="ml-8 mt-4 font-bold">What's happening</h1>
      <div className="ml-8 mr-6 mt-4">
        <span>KPL</span>
        <span>Final . GOR Won</span>
        <h1 className="bg-blue-900 h-10 text-white pt-2 pl-8">
          AFC Leopards<span>1</span>
        </h1>
        <h1 className="bg-green-600 h-10 pt-2 pl-8">
          Gor Mahia FC<span>4</span>
        </h1>
      </div>
      <div className="ml-8 mr-6 mt-4">
        <span>KPL</span>
        <span>Final . Sofapaka Won</span>
        <h1 className="bg-purple-300 h-10 pt-2 pl-8">
          Sofapaka FC<span>2</span>
        </h1>

        <h1 className="bg-red-900 h-10 pt-2 pl-8">
          Mathari United<span>0</span>
        </h1>
      </div>
      <div className="ml-8 mr-6 mt-4">
        <span>EPL</span>
        <span>Final . Man Utd Won</span>
        <h1 className="bg-red-600 h-10 text-white pt-2 pl-8">
          Manchester United FC<span>2</span>
        </h1>
        <h1 className="bg-blue-600 h-10 pt-2 pl-8">
          Everton FC<span>0</span>
        </h1>
      </div>
      <div className="ml-8 mr-6 mt-4">
        <span>NBA</span>
        <span>Final . LA Won</span>
        <h1 className="bg-blue-900 h-10 text-white pt-2 pl-8">
          LA Galaxy<span>133</span>
        </h1>
        <h1 className="bg-green-600 h-10 pt-2 pl-8">
          Golden State Warriors<span>130</span>
        </h1>
      </div>
      <div className="flex">
        <div className="flex-1 p-4">
          <a href="kh.c">
            <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">
              Show more
            </h2>
          </a>
        </div>
      </div>
      <hr />
      <div className="">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 ">
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
    <div className="border-r border-black-600">
      <div>
        <div className="flex sticky top-1 bg-gray-100 w-full">
          <SearchTwitter />
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
        <h1 className="ml-4 font-bold">Trends For You</h1>

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
      <hr />
      <NBAGames />
    </div>
  );
}

export default function ExploreComponent() {
  return (
    <div className="mx-20 mt-4 flex">
      <Aside />
      <div className="w-1/2">
        <Main />
      </div>

      <div className="">
        <WhoToFollow />
        <Policy />
      </div>
    </div>
  );
}
