// report
// date slider
// video

import "../customcss.css";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid className="vh-100" id="width">
      <div className="Home">
        <Row>
          <h1>Home</h1>
        </Row>
        <Row>
          <p>
            Stockings is a website for users who wish to analyse the stock
            markets Nasdaq-100 and there respected industries.
          </p>
        </Row>
        <Row id="marginBottom">
          <p>
            You are on the landing page. From here you can select any of the
            links from the navbar or select the 'Start Here!' button below.
          </p>
        </Row>
        <Row id="flexWrap">
          <Col className="col-sm-4">
            <Row>
              <h3>Stocks</h3>
            </Row>
            <Row>
              <p>
                The Stocks page can be accessed directly from the navbar and
                displays a list of the Nasdaq-100. It includes a list of each
                companies symbol, name and corresponding industry. You can
                filter through the list by typing in the ssearch box of
                selecting an Industry from the doprdown list. If you would like
                to see a particular stock in more detail, you can click on the
                name of the symbol of that stock within the Table.
              </p>
            </Row>
          </Col>
          <Col className="col-sm-4">
            <Row>
              <h3>Price History</h3>
            </Row>
            <Row>
              <p>
                The Price History page can be accessed by selecting a stock from
                the table within the Stocks page. Once there, you will be able
                to see a brief description of that stock as well as a table
                listing and a chart displaying it's performance history. Using
                the date selector, you can refine this dates in which you would
                like to analyse.
              </p>
            </Row>
          </Col>
          <Col className="col-sm-4">
            <Row>
              <h3>Industry</h3>
            </Row>
            <Row>
              <p>
                The Industry page can be reach from either the navbar or by
                selecting any industry from the table within the Stocks page.
                Once there, you will be able to see a detailed list of industry
                performance measured at a number of historical points. By
                clicking the column heading, you will be able to sort the data
                in either ascending or descending order from better analyses,
              </p>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-sm-center">
          <Button variant="success" id="button" href="./stocks">
            Start here!
          </Button>
        </Row>
      </div>
    </Container>
  );
}
