import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
// import classes from './Meals.module.css'
import { Fragment } from "react";

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )
}

export default Meals