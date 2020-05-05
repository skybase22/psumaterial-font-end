
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <footer className="py-5">
          <Container>
            <Row className="align-items-center justify-content-xl-between">
              <Col xl="2" className="ml-auto">
                <div className="copyright text-center text-xl-left text-muted">
                  <a
                    className="font-weight-bold ml-1"
                    href="/admin/index"
                  >
                    PSU Material
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Login;
