import { Navbar, Container } from 'react-bootstrap'
import LoginButton from './AppBarComponent/LoginButton'

function AppBar(){
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            My Personal Blog
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <LoginButton></LoginButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default AppBar