import React from 'react'
import styled from 'styled-components'

const DonationWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 290px;
    padding: 30px;
    background-color: #FFF691;
    margin: 10px 0 10px 0;
`

const Donation = () => {
    return (
        <DonationWrapper>
            <h3>Donation</h3>
        </DonationWrapper>
    )
}

export default Donation
