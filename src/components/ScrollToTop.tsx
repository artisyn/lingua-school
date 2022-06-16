import React, { FC } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';


interface ScrollInterface {

    children?: React.ReactNode; 
}


const ScrollToTop: FC<ScrollInterface> = ({children}) => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [location]);

	return <>{children}</>;
};

export default ScrollToTop;