import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Button, Row, Col } from "antd";
import {
  randomizeShapes,
  moveShapeLeft,
  moveShapeRight,
  movePosition,
} from "../store/shapeSlice";
import { useTranslation } from "react-i18next";

const Shapes: React.FC = () => {
  const shapes = useSelector((state: RootState) => state.shapes.shapes);
  const positions = useSelector((state: RootState) => state.shapes.positions);
  const row1Style = useSelector((state: RootState) => state.shapes.row1Style);
  const row2Style = useSelector((state: RootState) => state.shapes.row2Style);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const renderShapesForRow = (rowStyle: React.CSSProperties, startIndex: number, endIndex: number) => {
    return Object.keys(positions)
      .slice(startIndex, endIndex + 1)
      .map((keyStr) => {
        const key = parseInt(keyStr);
        const [row, col] = positions[key];
        return (
          <Col
            key={key}
            span={8}
            style={{ gridColumn: col + 1, gridRow: row + 1, ...rowStyle }}
          >
            <div className="shape-box">
              <Button
                className={`shape shape-${shapes[key]}`}
                onClick={() => dispatch(randomizeShapes())}
              >
                {/* {shapes[key]}  */}
              </Button>
            </div>
          </Col>
        );
      });
  };

  return (
    <div className="shapes-container">
      <Row>
        <h1>Layout & Style</h1>
      </Row>
      <Row className="shape-button" gutter={[16, 16]} justify="center">
        <Col>
          <Button
            onClick={() => dispatch(moveShapeLeft())}
            className="shape-box"
          >
            <div className="shape-triangle-left"></div>
            <div className="shape-label">{t("move_shape_left")}</div>
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => dispatch(movePosition())}
            className="shape-box"
          >
            <div className="shape-triangle shape-triangle-up"></div>
            <div className="shape-triangle shape-triangle-down"></div>
            <div className="shape-label">{t("move_position")}</div>
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => dispatch(moveShapeRight())}
            className="shape-box"
          >
            <div className="shape-triangle-right"></div>
            <div className="shape-label">{t("move_shape_right")}</div>
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={row1Style}>
        {renderShapesForRow(row1Style, 0, 2)}
      </Row>
      <Row gutter={[16, 16]} style={row2Style}>
        {renderShapesForRow(row2Style, 3, 5)}
      </Row>
    </div>
  );
};

export default Shapes;
