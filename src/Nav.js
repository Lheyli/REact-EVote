import { Link, useMatch, useResolvedPath} from "react-router-dom";


export default function Nav() {
    return <nav className="nav">
        <Link to="/" className="site-title">E Vote</Link>
        <ul>
           <CustomLink to="/Dashboard">Dashboard</CustomLink>
           <CustomLink to="/Start">Start Voting</CustomLink>
           <CustomLink to="/Reset">Reset</CustomLink>
           <CustomLink to="/Edit">Edit Home</CustomLink>
           <CustomLink to="/Logo">Change Logo</CustomLink>
           <CustomLink to="/Logout">Log out</CustomLink>
           
        </ul>
    </nav>
    
    
}

function CustomLink({to, children, ...props}){
   const resolvedPath = useResolvedPath (to)
   const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return(
        <li className={isActive ? "active" : "" }>
            <Link to={to} {...props}>
                {children}
                </Link>
        </li>
    );


}

            