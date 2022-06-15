import React, { FC, useEffect, useState } from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { pageChange } from '../features/currentPage/currentPageSlice';
import styled from 'styled-components';
import Nav from '../components/navbar/Nav';
import LogoSection from '../components/LogoSection';
import Footer from '../components/Footer';
import PlacementTest from '../components/placementTest/PlacementTest';
import TestLevel from '../components/placementTest/TestLevel';
import TestResults from '../components/placementTest/TestResults';
const Container = styled.div``;

const PlacementTestPage: FC = () => {
	const page = useSelector((state: RootState) => state.page.value);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(pageChange('PLACEMENT TEST'));
	}, []);

	const [testStage, setTestStage] = useState<string>('testLevel');
	const [testLevel, setTestLevel] = useState<string>('');
	const handleLevel = (val: string): void => {
		setTestLevel(val);
	};
	const handleStage = (val: string): void => {
		setTestStage(val);
	};
	return (
		<Container>
			<Nav />
			<LogoSection />
			{testStage === 'testLevel' && (
				<TestLevel
					setLevel={handleLevel}
					levelValue={testLevel}
					changeStage={handleStage}
				/>
			)}
			{testStage === 'testStart' && (
				<PlacementTest testLevel={testLevel} />
			)}
			{testStage === 'testFinish' && <TestResults />}
			<Footer />
		</Container>
	);
};

export default PlacementTestPage;
