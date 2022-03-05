/*===================================
||
|| This is just to test some of the features of this app
|| More than likely you will be removing this for your app
||
===================================*/
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

/* Scipts ---------------------------*/
import api from 'React/common/api.js';

const WebStarterSample = () => {

    const [sampleData, sampleDataUpdate] = useState([]);

    useEffect(() => {
        api.get('/api/sample').then((response) => {
            console.log('Sample Data test', response.data);
            sampleDataUpdate(response.data);
        });
    }, []);

    return (
        <WebStarterSampleStyled className='WebStarterSample'>
            <h1>Web Starter Project</h1>
            <p>
                This repo is a combination of an enhanced Create React App and Express Server.
                Intention is to be used for teaching web concepts.
            </p>

            <div className="sample">
                {
                    sampleData.map((item,idx) => {
                        return (
                            <div key={ idx }>
                                <img src={ item.thumbnailUrl } alt={ item.title } />
                            </div>
                        )
                    })
                }
            </div>

        </WebStarterSampleStyled>
    );
}

export default WebStarterSample;

const WebStarterSampleStyled = styled.div`
    max-width: 1600px;
    margin: 0px auto;
    padding: 50px 20px 20px;
    text-align: center;

    .sample {

        margin: 50px 0px;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        > div {
            width: 150px;
            margin: 5px;

            img {
                max-width: 100%;
                display: block;
            }
        }
    }
`;