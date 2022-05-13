import './index.css'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="header">
                <h2>AUTOMART </h2>
                <button>Create Item</button>
            </div>
            {
                children
            }
            <footer><p>created by omoalfa, 2022</p></footer>
        </div>
    )
}

export default Layout;
