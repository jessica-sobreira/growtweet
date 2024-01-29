import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    margin: auto;
    max-width: 1200px;


    #left{
        min-width: 280px;

    }

    #content{
        flex: 1;

    }

    #right{
        min-width: 400px;
    }
`