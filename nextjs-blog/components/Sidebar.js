import styled from 'styled-components';
import React from 'react';
import Avatar from '@mui/material/Avatar';



const Container = styled.div``;
const Header = styled.div``;
const AvaTar = styled(Avatar)`
margin-top:10px;
`;
const IconsContainer = styled.div``;



function Sidebar() {
    return (

        <Container>
            <Header>
                <AvaTar />
                <IconsContainer></IconsContainer>
            </Header>
        </Container>
        //<h1>why are you not working</h1>


    );
}

export default Sidebar;
