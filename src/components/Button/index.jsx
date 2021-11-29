import React, { Component } from 'react'
import styles from "./Button.module.css"

 class Button extends Component {
    render() {
        const {title,handleClick,disabled}=this.props;
        return (
            <button className={styles.btn} onClick={handleClick}  disabled={disabled}>{title}</button>
        )
    }
}

export default Button
