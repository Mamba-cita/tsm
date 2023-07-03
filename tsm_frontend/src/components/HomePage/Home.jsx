import { Space, Typography } from "antd";
import React from "react";
import "../../App.css";
import "./Home.css";
import HomeCard from "./Card/HomeCard";
import Orders from "../Orders/Orders";

export default function Home() {
  return (
    <div className="">
      <Typography.Title level={4}> Home</Typography.Title>

      <Space direction="horizontal">
        <HomeCard/>
      </Space>
      <Space >
        <Orders/>
      </Space>
    </div>
  );
}
