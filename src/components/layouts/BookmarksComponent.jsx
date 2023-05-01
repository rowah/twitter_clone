import React from "react";
import Aside from "../common/sidebar/Aside";
import SearchTwitter from "../common/search/SearchTwitter";
import WhoToFollow from "../common/whotofollow/WhoToFollow";
import TrendTopics from "../common/trends/TrendTopics";

export default function BookmarksComponent() {
  return (
    <div className="mx-20 mt-4 flex">
      <Aside />
      <div className="w-3/5 border border-gray-200 h-auto  border-t-0"></div>

      <div />
      <div>
        <SearchTwitter />
        <WhoToFollow />
        <TrendTopics />
      </div>
    </div>
  );
}
