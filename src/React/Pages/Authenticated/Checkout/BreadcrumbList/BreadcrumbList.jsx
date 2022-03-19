import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Breadcrumb from './Breadcrumb.jsx';

const BreadcrumbList = () => {

    const { checkout } = useSelector((state) => state);

    return (
        <BreadcrumbListStyled className='BreadcrumbList'>
            {
                checkout.map((step, idx) => {
                    return <Breadcrumb key={ idx } step={ step } />
                })
            }
        </BreadcrumbListStyled>
    );
}

export default BreadcrumbList;

const BreadcrumbListStyled = styled.div`
    margin: 30px 0px;
    display: flex;

`;