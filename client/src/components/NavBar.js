import React from 'react'
import { Link, useLocation, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

// const NavBar = (props) => {
//     const { pathname } = useLocation()
//     return(

//         <Menu>
//             <Link to='/'>
//               <Menu.Item active={pathname == '/'} >
//                 Home
//               </Menu.Item >
//             </Link>
//             <Link to='/about'>
//               <Menu.Item active={pathname == '/about'} >
//                 About    
//              </Menu.Item >
//             </Link>
//         </Menu>
//     )
// }

// const NavBar = (props) => {
//     const { location } = props
//     return(
//         <Menu>
//             <Link to='/'>
//               <Menu.Item active={location.pathname == '/'} >
//                 Home
//               </Menu.Item >
//             </Link>
//             <Link to='/about'>
//               <Menu.Item active={location.pathname == '/about'} >
//                 About    
//              </Menu.Item >
//             </Link>
//         </Menu>
//     )
// }

class NavBar extends React.Component {
    render(){
        // const { location } = props
        const { location } = this.props
        return(

            <Menu>
                <Link to='/'>
                  <Menu.Item active={location.pathname == '/'} >
                    Home
                  </Menu.Item >
                </Link>
                <Link to='/available'>
                  <Menu.Item active={location.pathname == '/available'} >
                    Available
                  </Menu.Item >
                </Link>
                <Link to='/cities'>
                  <Menu.Item active={location.pathname == '/cities'} >
                    City
                  </Menu.Item >
                </Link>
                <Link to='/homes'>
                  <Menu.Item active={location.pathname == '/homes'} >
                    Homes
                  </Menu.Item >
                </Link>
                <Link to='/cityCost'>
                  <Menu.Item active={location.pathname == '/cityCost'} >
                    City Cost
                  </Menu.Item >
                </Link>
                {/* <Link to='/users'>
                  <Menu.Item active={location.pathname == '/users'} >
                    Users    
                 </Menu.Item >
                </Link>
                <Link to='/grades'>
                  <Menu.Item active={location.pathname == '/grades'} >
                    Grades    
                 </Menu.Item >
                </Link>
                <Link to='/skills'>
                  <Menu.Item active={location.pathname == '/skills'} >
                    Skills    
                 </Menu.Item >
                </Link>
                <Link to='/about'>
                  <Menu.Item active={location.pathname == '/about'} >
                    About    
                 </Menu.Item >
                </Link> */}
                <Link to='/componentDemo'>
                  <Menu.Item active={location.pathname == '/componentDemo'} >
                    Component Demo    
                 </Menu.Item >
                </Link>
            </Menu>
        )

    }
}

export default withRouter(NavBar)


