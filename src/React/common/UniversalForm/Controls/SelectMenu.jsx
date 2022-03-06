import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAngleDown,
} from '@fortawesome/free-solid-svg-icons';


/* Components ---------------------------*/
import ControlHOC from './ControlHOC.jsx';

const SelectMenu = ({thisField, onChange, id, value='', options=[]}) => {
    return (
        <SelectMenuStyled className='SelectMenu'>
            <select 
                id={ id }
                value={ thisField ? thisField.value : value }
                onChange={ onChange }
            >
                {
                    options.map((o,idx) => {
                        return  <option key={ idx } value={ o.value }>{ o.display }</option>    
                    })
                }
            </select>
            <FontAwesomeIcon className='caret' icon={ faAngleDown } />
        </SelectMenuStyled>
    );
}

export default ControlHOC(SelectMenu);

const SelectMenuStyled = styled.div`
    position: relative;

    select {
        width: 100%;
        padding: 10px 40px 10px 15px;
        font-size: 20px;

        /* Hide auto generated caret in favor of ours */
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        outline: none;


        &:focus {
            background-color: #eee;
            border-color: #999;
        }
        &.error {
            border: solid 2px red;
        }
    }

    .caret {
        position: absolute;
        right: 14px;
        top: 12px;
        font-size: 25px;
        color: #666;
    }
`;