import styled from "styled-components";

export const LoginStyled = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: #242424;
    

    #esquerdo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #1DA1F2;
        width: 50vw;
        height: 100vh;
    }
    
    
        h1 {
            font-size: 3em;
            margin-bottom: 10px;
            color: white;
        }

        h3 {
            font-size: 1.4em;
            margin-bottom: 20px;
            color: white;
        }

        p {
            font-size: 1.2em;
            color: white;
            line-height: 1.4;
            margin-left: 40px;

        }

        #direito {
           display: flex;
           flex-direction: column;
           justify-content: center;
           margin-left: 10em; 
        }

        h2 {
            font-size: 2em;
            margin-bottom: 20px;
            color: white;
        }

        form {
            display: flex;
            flex-direction: column;

            input {
                margin-bottom: 15px;
                padding: 10px;
                font-size: 14px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }

            button {
                padding: 10px;
                font-size: 16px;
                background-color: #1DA1F2;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s;

                &:hover {
                    background-color: darkblue;
                }
            }
        }
    }
`;

