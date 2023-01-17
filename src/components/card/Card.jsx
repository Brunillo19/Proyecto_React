import { Card, Col, Row, Button, Text, css } from "@nextui-org/react";
import { Link } from "react-router-dom";

const BottonText= {
    textDecoration:"none"
}
export const Card4 = ({element}) => (
  <Card css={{ w: "70%", h: "350px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text h3 color="gray">
          {element.name}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={element.img}
        width="100%"
        height="100%"
        alt={element.name}
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={16}>
            ${element.price}
          </Text>

        </Col>
        <Col>
          <Row justify="flex-end">
            <Link to={`/item/${element.id}`} >

                <Button flat auto rounded color="secondary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
                text-decoration="none"
        
                >
                Ver detalle
              </Text>
            </Button>
                  </Link>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);