import {ThemeProvider} from '@material-ui/core/styles';

import getTheme from '../../utils/theme';

const AppThemeProvider = ({children}) => {
    const theme = getTheme();

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default AppThemeProvider;
