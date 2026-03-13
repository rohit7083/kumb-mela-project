import { Layout } from "antd";

const { Footer } = Layout;

const FooterIndex = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#fff",
        borderTop: "1px solid #eee",
      }}
    >
      Nashik ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  );
};

export default FooterIndex;