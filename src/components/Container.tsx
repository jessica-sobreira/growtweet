import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    margin: auto;
    background-color: pink;
    max-width: 1200px;

    #left{
        background-color: red;
        min-width: 280px;
    }

    #content{
        background-color: green;
        flex: 1;
    }

    #right{
        background-color: blue;
        min-width: 400px;
    }
`