import { MenuOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Input, Layout, Menu, Row } from "antd";
import { useState } from "react";

const { Header } = Layout;
const { Search } = Input;

const items = [
  { key: "1", label: "Home" },
  { key: "2", label: "About Us" },
  { key: "3", label: "Services" },
  { key: "4", label: "Pages" },
  { key: "5", label: "Blog" },
  { key: "6", label: "Contact Us" },
];

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <Header style={{ background: "#fff", padding: "0 20px" }}>
      <Row align="middle" justify="space-between">
        
        {/* Logo */}
        <Col>
          <div style={{ fontWeight: "bold", fontSize: 18 }}>
            Discover Nashik
          </div>
        </Col>

        {/* Desktop Menu */}
        <Col xs={0} md={14}>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Col>

        {/* Desktop Search */}
        <Col xs={0} md={6}>
          <Search placeholder="Search..." />
        </Col>

        {/* Mobile Menu Button */}
        <Col xs={4} md={0}>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
          />
        </Col>

      </Row>

      {/* Mobile Drawer Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Menu mode="vertical" items={items} />
      </Drawer>
    </Header>
  );
};

export default App;