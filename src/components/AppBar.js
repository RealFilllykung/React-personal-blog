import { Navbar, Container } from 'react-bootstrap'

function AppBar(){
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            My Personal Blog
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default AppBar