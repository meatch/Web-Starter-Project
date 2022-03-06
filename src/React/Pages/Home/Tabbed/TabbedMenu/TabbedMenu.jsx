import React from 'react';
import styled from 'styled-components';

import TabbedMenuItem from './TabbedMenuItem.jsx';

const TabbedMenu = ({ chosenTab, chosenTabUpdate, tabbedData }) => {

    return (
        <TabbedMenuStyled className='TabbedMenu'>
            {
                tabbedData.map((item, idx) => {
                    return  <TabbedMenuItem
                                key={ idx } 
                                item={ item } 
                                chosenTab={ chosenTab } 
                                chosenTabUpdate={ chosenTabUpdate }
                            />
                })
            }
        </TabbedMenuStyled>
    );
}

export default TabbedMenu;

const TabbedMenuStyled = styled.div`
    display: flex;
`;