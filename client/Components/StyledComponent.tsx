import styled from "styled-components";

export const Container = styled.div`
    min-height:100vh;
    padding: 20px;
    background-color: white;

    a {
        color: inherit;
        text-decoration: ${(prop) => prop.anchor ?"underline" : "none"};
    }
`

export const TopFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Bordered = styled.div`
    border: 2px solid black;
    padding: 8px 10px;
    font-size: 12px;
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

    a{
        text-decoration: none;
    }
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
        background-color:white;
        box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        display: flex;
        gap: 20px;
        margin: 20px auto 0;
    }
`
export const Text = styled.p`
    text-align: ${(prop)=> prop.centered ? 'center' : 'start'};
    font-size: ${(prop)=> prop.fontSize || '14px'};
    font-weight: ${(prop)=> prop.fontWeight || '500'};
`

export const Form = styled.form`
    display: grid;
    gap: 20px;

    input{
        padding: 12px 16px;
        border: 1px solid black;
        width: 100%;
    }

    input:focus{
        outline: none;
    }
`
export const Vector = styled.img`
    width: 80%;
    height: auto;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Button = styled.div`
    background-color: black;
    color: white;
    padding: 12px;
    text-align: center;
    cursor: pointer;
`