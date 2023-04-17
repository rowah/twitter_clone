import React from "react";
import { Space, Spin } from "antd";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      Loading....Please wait...
      <Space size={"middle"}>
        <Spin size="large" />
      </Space>
    </div>
  );
}
