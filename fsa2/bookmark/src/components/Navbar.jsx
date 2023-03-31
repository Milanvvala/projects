import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav style={{marginBottom:'40px'}}>
        <ul>
          <li><Link to="/"><strong>Brand</strong></Link></li>
        </ul>
        <ul>
          {/* <kbd style={{ marginRight: '10px', color: 'white', backgroundColor: 'blue' }}>Primary</kbd> */}
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/SignUP">Signup</Link></li>
          <li><Link to="/explore">explore</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar