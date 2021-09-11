import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminButton from './AppBarComponent/AdminButton'
import CreatePostButton from './AppBarComponent/CreatePostButton'

function AppBar(props){

  const isLogin = props.isLogin

    return(
        <Navbar bg="dark" variant="dark">
        <Container>
            <Link to="/" style={{textDecoration: 'none'}}>
                <Navbar.Brand>
                    My Personal Blog
                </Navbar.Brand>
            </Link>
          <Navbar.Collapse className="justify-content-end">
            <CreatePostButton isLogin={isLogin}></CreatePostButton>
            <AdminButton isLogin={isLogin}></AdminButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default AppBar