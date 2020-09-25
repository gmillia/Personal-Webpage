import React from 'react';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Routes from './Routes';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const browserHistory = createBrowserHistory();

function App() {
	const theme = createMuiTheme({
		page: {
			//50px navbar, 15 top and bottom paddings
			height: 'calc(100vh - 51px - 15px - 15px - 15px - 15px)',
			padding: 15,
			margin: 15
		},
		block: {
			padding: 15,
			margin: 15,
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<Router history={browserHistory}>
				<Routes />
			</Router>
		</ThemeProvider>
  	);
}

export default App;
