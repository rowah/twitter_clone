import React from "react";
import Aside from "../common/sidebar/Aside";

export default function MessageComponent() {
  return (
    <div className="mx-20 mt-4 flex">
      <Aside />
      <div className="w-1/4 border border-gray-200 h-auto  border-t-0">
        {/* <!--middle wall--> */}
        <h1>Messages</h1>
        {/* <MiddleNav />

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
      <div>
        <h1>Select Messages</h1>
      </div>
    </div>
  );
}
