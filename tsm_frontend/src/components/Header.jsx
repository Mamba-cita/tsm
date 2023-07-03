import {  Badge, Image, Space, Typography } from "antd";
import {  MailOutlined,BellFilled } from "@ant-design/icons";

import tsmlogo from "../../src/components/assets/tsmlogo.png"
function Header() {
  return (
    <div className="TsmHeader">
      <Image src={tsmlogo} width={40}>
      </Image>
      <Typography.Title>TSM</Typography.Title>
      <Space>
        <Badge count={12} dot>
        <MailOutlined style={{fontSize:24}}/>
        </Badge >
        <Badge count={20}>
        <BellFilled style={{fontSize:24}}/>
        </Badge>
      </Space>
      
      
      </div>
  );
}

export default Header;
