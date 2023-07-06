import classes from  './Header.module.css'
import { Fragment } from 'react'
import mealImg from '../../assets/meals.webp'
import HeaderCartButton from './HeaderCartButton'


const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1> Meals</h1>
                <HeaderCartButton onClick={props.onClick}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImg} alt="The main banner" />
            </div>
        </Fragment>
    )
}

export default Header