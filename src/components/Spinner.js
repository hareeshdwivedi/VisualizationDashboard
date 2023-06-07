import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';

const StyledSpinner = styled(Spinner)`
&#spinner {
   border-bottom-color: #3376BC;
   border-left-color: #3376BC;
   border-top-color: #3376BC;

}
`;

const OurSpinner = () => {
	return <StyledSpinner animation="border" id="spinner" />;
};

export default OurSpinner;
