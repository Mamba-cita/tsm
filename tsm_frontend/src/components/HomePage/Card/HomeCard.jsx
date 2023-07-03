import React from "react";
import { Card, Space, Statistic } from "antd";
import { CarOutlined } from "@ant-design/icons";
export default function HomeCard() {
  return (
    <>
      <Card>
        <Space direction="horizontal">
          <CarOutlined
            style={{
              color: "blue",
              backgroundColor: "rgba(0.255,0,0.25)",
              borderRadius: 18,
              fontSize: 24,
              padding:8,
            }}
          />
          <Statistic title="Orders" value={234} />
        </Space>
      </Card>
    </>
  );
}
