import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import {createMuiTheme, ThemeProvider, IconButton, InputBase, Typography} from "@material-ui/core";
import useCounter from "../hook/useCounter";
import PauseIcon from '@material-ui/icons/Pause';
import Repeatable from 'react-repeatable';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    inputBase: {
        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            "-webkit-appearance": 'none',
            margin: 0,
        },
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.shape.borderRadius,
        margin: theme.spacing(1),
        textAlign: 'center'
    },

    buttonAndInputContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },

    counter: {
        margin: 'auto',
    },

    icon: {
        fontSize: 'xxx-large',
        color: theme.palette.common.black,
    },

    inputBaseContainer: {
        alignSelf: 'center',
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(0, 1, 0, 1),
        },
    },

    repeatable: {
        display: 'flex',
        justifyContent: 'center',
    },

    enableResetIcon: {
        color: theme.palette.common.black,
        fontSize:'xxx-large',
    },

    disableResetIcon: {
        color: theme.palette.disable,
        fontSize:'xxx-large',
    },
}));

const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            input: {
                textAlign: 'center',
            },
        },
    },
});

export default function Counter() {
    const classes = useStyles();
    const counterHook = useCounter();

    const handleInputChange = (e) => {
        counterHook.changeInput(Number(e.target.value));
    };

    return (
        <div className={classes.container}>
            <Typography variant="h1" className={classes.counter}>{counterHook.counter}</Typography>

            <div className={classes.buttonAndInputContainer}>
                <IconButton
                    onClick={counterHook.reset}
                    disabled={!counterHook.isActive}
                >
                    <ReplayOutlinedIcon className={counterHook.isActive ? classes.enableResetIcon : classes.disableResetIcon} />
                </IconButton>
                <Repeatable
                    repeatInterval={100}
                    onPress={() => counterHook.decrease(100)}
                    onHold={() => counterHook.decrease(100)}
                    className={classes.repeatable}
                >
                    <IconButton>
                        <RemoveOutlinedIcon className={classes.icon}/>
                    </IconButton>
                </Repeatable>
                <div className={classes.inputBaseContainer}>
                    <ThemeProvider theme={theme}>
                        <InputBase
                            type="number"
                            className={classes.inputBase}
                            onChange={handleInputChange}
                            value={counterHook.input}
                        />
                    </ThemeProvider>
                </div>
                <Repeatable
                    repeatInterval={100}
                    onPress={() => counterHook.increase(100)}
                    onHold={() => counterHook.increase(100)}
                    className={classes.repeatable}
                >
                    <IconButton>
                        <AddOutlinedIcon className={classes.icon}/>
                    </IconButton>
                </Repeatable>
                <IconButton
                    onClick={counterHook.startPause}
                >
                    {counterHook.isPaused
                        ? <PlayArrowIcon className={classes.icon}/>
                        : <PauseIcon className={classes.icon}/>
                    }

                </IconButton>
            </div>

        </div>
    );
}
