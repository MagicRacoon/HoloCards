import './Layout.css'
import Navbar from './Navbar';

const Layout = ({ children }: any) => {
    return (
        <div className='layout'>
            <div className='layout_navbar'>
                <Navbar />
            </div>
            <div className='layout_child'>
                {children}
            </div>
        </div>
    );
}

export default Layout;