import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginButton from './AppBarComponent/AdminButton'

function AppBar(){
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
            <Link to="/" style={{textDecoration: 'none'}}>
                <Navbar.Brand>
                    My Personal Blog
                </Navbar.Brand>
            </Link>
          <Navbar.Collapse className="justify-content-end">
            <LoginButton></LoginButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default AppBar