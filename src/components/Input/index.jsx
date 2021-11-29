import React, { Component } from 'react'
import styles from './Input.module.css'

 class Input extends Component {
    render() {
        const {type='text',handleChange,name,value,placeholder}=this.props
        return (
            <input
            className={styles.inp}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            value={value}
            type={type}/>
        )
    }
}

export default Input
