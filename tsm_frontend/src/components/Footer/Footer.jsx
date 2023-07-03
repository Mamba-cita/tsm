import { Typography } from "antd";
import React from "react";

export default function Footer() {
  return (
    <div className="TsmFooter">
      <Typography.Link href="#">TSM GROUP</Typography.Link>
      <Typography.Link href="#"> Tech Suport </Typography.Link>
      <Typography.Link href="#"> Terms of use</Typography.Link>
      <Typography.Link href="#">@2023</Typography.Link>
    </div>
  );
}
