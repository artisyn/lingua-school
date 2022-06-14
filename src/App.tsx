import React from 'react';
import styled from 'styled-components';
import PageRoutes from './pages/PageRoutes';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const Container = styled.div`
	color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
	background-color: ${(props) =>
		props.theme === 'light' ? 'white' : 'black'};
`;

function App() {
	const theme = useSelector((state: RootState) => state.theme.value);
	return (
		<Container theme={theme}>
			<PageRoutes />
		</Container>
	);
}

export default App;
