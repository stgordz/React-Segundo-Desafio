import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <div className={styles.cartWidget}>
                <Link to='/' className={styles.logo}>VaPOD <span>SHOP</span></Link>
                <CartWidget />
            </div>
            <div className={styles.navLinks}>
                <NavLink to='/' className={({isActive}) => isActive ? styles.active : styles.inactive}>Todos los productos</NavLink>
                <NavLink to={'/category/equipos'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Equipos</NavLink>
                <NavLink to={'/category/liquidos'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Liquidos</NavLink>
                <NavLink to={'/category/resistencias'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Resistencias</NavLink>
                <NavLink to={'/category/baterias'} className={({isActive}) => isActive ? styles.active : styles.inactive}>Baterias</NavLink>
            </div>
        </nav>
    )
}

export default Navbar