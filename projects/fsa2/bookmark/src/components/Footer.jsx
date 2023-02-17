import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer style={{ display: 'flex', justifyContent: 'space-between' }} className='grid'>
            <div>
                <p>
                <Link to="/"> Contact </Link> 
                | <Link to="/login"> Privacy Policy </Link>
                | <Link to="/SignUP"> Terms & Conditions </Link> 
                </p>
            </div>
            <div>
                <p>© 2020 Copyright: <a target="_blank" href="/">Example.com</a></p>
            </div>
            </footer>
        </>
    )
}

export default Footer