import { Button, Col, Image, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import NightView from "../../../assets/nightview.jpg";

function BannerOne() {
  return (
    <Header
      style={{
        position: "relative",
        padding: 0,
        height: "400px",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Image
        src={NightView}
        alt="no image"
        preview={false}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 70%",
          opacity:0.5
        }}
      />

      {/* Overlay Content */}
      <Row
        justify="center"
        align="middle"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          textAlign: "center",
          color: "#fff",
          padding: "0 20px",
        }}
      >
        <Col xs={24} md={18} lg={12}>
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 72px)",
              margin: 0,
            }}
          >
            Explore Nashik
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 20px)",
              marginTop: 2,
            }}
          >
            Discover the beauty of vineyards and culture
          </p>

          <Button
            type="primary"
            size="large"
            style={{ marginTop: 0 }}
          >
            Explore
          </Button>
        </Col>
      </Row>
    </Header>
  );
}

export default BannerOne;