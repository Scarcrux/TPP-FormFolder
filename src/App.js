import logo from './logo.svg';
import './App.css';
import Folder from './components/Folder'
import FormEdit from './components/FormEdit'
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col sm="12" className="d-flex justify-content-center" md={{ size: 6, offset: 3 }}>
          <FormEdit firstName={"Jonathan"}
                  lastName={"Scarpelli"}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12" className="d-flex justify-content-center" md={{ size: 6, offset: 3 }}>
          <Folder />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
