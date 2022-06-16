import React from 'react';
import styled from 'styled-components';
import PageRoutes from './pages/PageRoutes';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import ScrollToTop from './components/ScrollToTop';

const Container = styled.div`
	color: ${(props) => (props.theme === 'light' ? '#262626' : '#fcf6f6c5')};
	background-color: ${(props) =>
		props.theme === 'light' ? '#fcf6f6c5' : '#262626'};
`;

function App() {
	const theme = useSelector((state: RootState) => state.theme.value);
	return (
		<ScrollToTop>
			<Container theme={theme}>
				<PageRoutes />
			</Container>
		</ScrollToTop>
	);
}

export default App;
