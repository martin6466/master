import React, { Component } from 'react'
import styles from './Links.module.css'
import {NavLink} from 'react-router-dom'

 class Links extends Component {
    render() {
        return (
            <nav>
                <NavLink exact className={styles.link}  activeClassName="active"  to='/'>Home</NavLink>
                <NavLink exact className={styles.link} activeClassName="active" to='/login'>Login</NavLink>
                <NavLink exact className={styles.link} activeClassName="active" to='/products'>Products</NavLink>

            </nav>
        )
    }
}

export default Links

