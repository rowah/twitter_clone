import React from "react";
import Aside from "../common/sidebar/Aside";
import { FiSettings } from "react-icons/fi";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";

function MiddleNav() {
  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="flex">
        <div className="flex-1">
          <h2 className="px-4 py-1 text-xl font-semibold text-black w-1/2">
            Messages
          </h2>
        </div>
        <FiSettings className="mt-2 mr-6" size={17} />

        <MdOutlineForwardToInbox className="mt-2 mr-5" size={17} />
      </div>
      <div className="flex mt-4 ml-2">
        <button>
          <BsArrowLeft className="rounded-full hover:bg-gray-300 h-10 w-10" />
        </button>
        <input
          className="border h-10 w-3/4 mx-4 rounded-full pl-4"
          placeholder="Search Direct Messages"
        ></input>
      </div>
      <p className="mt-8 ml-6 text-gray-500">
        Try searching for people, groups, or messages
      </p>
    </div>
  );
}

export default function MessageComponent() {
  return (
    <div className="mx-20 mt-4 flex">
      <Aside />
      <div className="w-1/3 border border-gray-200 h-auto  border-t-0">
        {/* <!--middle wall--> */}
        <MiddleNav />

        {/* 

        <hr className="border-gray-200" />
        <CreateTweet />

        <CreateTweetIcons />

        <hr className="border-gray-200 border-1" />
        <FirstTweet />

        <hr className="border-gray-200" /> */}

        {/* <SecondTweetHandle /> */}
        {/* <SecondTweet />

        <hr className="border-gray-200" />

        <ThirdTweet />

        <hr className="border-gray-200" /> */}
      </div>

      <div />
      <div className="border-r-2 border-black-400">
        <div class="h-screen flex items-center justify-center">
          <div class="w-2/3 p-4">
            <h1 className="font-bold text-3xl">Select a message</h1>
            <h2 className="text-gray-400">
              Choose from your existing conversations, start a new one, or just
              keep swimming.
            </h2>
            <button className="bg-blue-400 w-48 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              New message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
