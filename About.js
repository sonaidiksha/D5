import React, {Component} from 'react' //here compoent is a parent class
import styles from "../css/style1.module.css"
export default class About extends Component{  //About is a chikd class from the component class
    render(){ //it is mainly used for execute the javascript code
        return(
            <div> 
                <h1 style={{color: 'black',background: 'white'}}>This is Class Components.</h1>
                <h2 className={styles.b}>We apply module Css in React.</h2>
                <h2 className={styles.c}>We apply module Css in React.</h2>
            </div>
        )
    }
}