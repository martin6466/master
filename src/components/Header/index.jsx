import React,{Component} from 'react'
import styles from './Header.module.css'
import Links from '../Links';



class Header extends Component{
    render(){
        return(

<header className={styles.header__conatiner}>
<h1 className={styles.h1}>Logo</h1>
<Links/>

</header>



   
   
   





        );
    }
}
export default Header;