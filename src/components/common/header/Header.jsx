import './header.scss'

const Header = ({ active, setActive }) => {
    return (
        <div className='header'>
            <div className="header__content">
                <div className="logo">Mirzayevsky</div>
                <div className={`menu-toggle ${active ? 'active' : ''}`}
                    onClick={() => setActive(!active)} >
                    <i className='bx bx-menu'/>
                    <i className='bx bx-x'/>
                </div>
            </div>
        </div>
    )
}

export default Header