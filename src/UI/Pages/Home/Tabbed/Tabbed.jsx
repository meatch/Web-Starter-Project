import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { tabbedData } from 'UI/common/data/tabbedData.js';

/* Components ---------------------------*/
import TabbedMenu from './TabbedMenu/TabbedMenu.jsx';
import Content from './Content.jsx';

const Tabbed = () => {

    const [chosenTab, chosenTabUpdate] = useState(tabbedData[0]);

    return (
        <TabbedStyled className='Tabbed'>
            <TabbedMenu chosenTab={ chosenTab } chosenTabUpdate={ chosenTabUpdate } tabbedData={ tabbedData }/>
            <Content chosenTab={ chosenTab } />
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`

`;