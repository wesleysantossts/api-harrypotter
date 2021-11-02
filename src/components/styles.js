import styled from 'styled-components';

// let url = ""

export const Container = styled.div`
    height: 100%;
    min-height: 720px;
    margin: 0;
    padding: 0;
    // background-color: #B32830;
    // background-image: url(https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80);
    // background-repeat: repeat;
    // background-size: cover;
    display: flex;
    flex-direction: column;
    // grid-template: auto / 10% auto;


`;

export const Head = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    padding-top: 20px; 
    padding-bottom: 20px; 
    border-radius: 15px;
    border-bottom: solid #EEE 2px;
    box-sizing: border-box;

    @media screen and (max-width: 600px) {
        padding-right: 40px;
        padding-left: 40px;
        // margin-right: 25px;
    }
    
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin: auto;
    }
`;