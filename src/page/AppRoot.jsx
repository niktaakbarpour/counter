import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Counter from "../component/Counter";
const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.background.default,
        overflow: "hidden",

    },
}));

export default function AppRoot() {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Counter />
        </div>
    );
}
