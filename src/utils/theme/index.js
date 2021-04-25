import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import memoize from 'lodash/memoize';
import {blueGrey, green, grey} from "@material-ui/core/colors";

const getTheme = memoize(() => {
    const baseTheme = createMuiTheme({
        spacing: 8,
        shape: {
            borderRadius: 5,
        },
        palette: {
            primary: {
                main: grey[200],
            },
            background: {
                default: green["A200"],
            },
            disable: blueGrey[400]
        },
        typography: {
            fontFamily: ['Open Sans', 'sans-serif'],
        },
    });
    return responsiveFontSizes(baseTheme);
});

export default getTheme;
