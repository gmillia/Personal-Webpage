import React from 'react';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Routes from './Routes';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const browserHistory = createBrowserHistory();

function App() {
	const theme = createMuiTheme();

	return (
		<ThemeProvider theme={theme}>
			<Router history={browserHistory}>
				<Routes />
			</Router>
		</ThemeProvider>
  	);
}

export default App;
