import styled from "styled-components";

const ContentStyled = styled.div`
    overflow: auto;
    border: 1px solid darkgray;
`

export function Content(){
    return (
        <ContentStyled id="content">
            <p>content</p>
        </ContentStyled>
    )
}