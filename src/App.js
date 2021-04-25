import React from 'react';
import AppRoot from "./page/AppRoot";
import AppThemeProvider from './component/common/AppThemeProvider';

function App() {
    return (
        <AppThemeProvider>
            <AppRoot />
        </AppThemeProvider>
    );
}

export default App;
