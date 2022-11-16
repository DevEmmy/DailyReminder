import styled from "styled-components";

export const Container = styled.div`
    min-height:100vh;
    padding: 20px;
    background-color: white;
`

export const TopFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Bordered = styled.div`
    border: 2px solid black;
    padding: 10px 15px;
    /* border-radius: 6px; */
    cursor: pointer;
    background-color: black;
    color: white;
`

export const Logo = styled.div`
    padding: 0px;
    font-family: 'Engagement', cursive;
    font-weight: 700;
    font-size: 28px;
    color: black;
`

export const ReminderContainer = styled.div`
    margin: 70px auto 30px;
    width: 85%;
    color: black;

    .postedBy{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0;

        img{
            width: 30vw;
            height: 30vw;
            object-fit: cover;
            border-radius: 50%;
            padding: 0;
            /* border: 2px solid; */
            /* box-shadow: 0 5px 25px rgba(00,0,0,0.3); */
        }

        p{
            padding: 10px 0;
            margin: 0;
        }
    }

    h3{
        margin: 0;
        font-size: 40px;
    }

    h3::first-letter{
        font-size: 70px;
        padding: 0;
        margin: 0;
    }

    .reaction{
        width: fit-content;
        padding: 10px 20px;
        border-radius: 26px;
        background-color: red;
        box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        display: flex;
        margin: 10px auto;
    }
`
export const Text = styled.p`
    
`

export const Form = styled.form`
    display: grid;
    gap: 20px;

    input{
        padding: 10px 16px;
        border: 1px solid black;
        width: 100%;
    }
`

export const Button = styled.div`
    background-color: black;
    color: white;
    padding: 10px;
    text-align: center;
    cursor: pointer;
`