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
export const GridForm = styled.div`
    display: grid;
    gap: 20px;
    width: 90%;
    margin: 0 auto;
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
    margin:  ${(prop)=> prop.margin || '5px'};
`

export const Form = styled.form`
    display: grid;
    gap: 20px;

    .cover{
        width: 100%;
        height: 20vh;
        position: relative;
        z-index: -1;

        .icon{
            position: absolute;
            top: 15vh;
            right: 5%;
            background-color: rgba(0,0,0,0.3);
            width: 30px;
            height: 30px;
            border-radius: 50%;
            padding: 5px;
            align-items: center;
            display: flex;
            justify-content: center;
        }
        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .profilePicture{
        width: 30vw;
        height: 30vw;
        margin-top: -20vw;
        display: flex;
        margin: -20vw auto 0;
        position: relative;

        .icon{
            position: absolute;
            top: 12vh;
            right: 5%;
            background-color: rgba(0,0,0,0.3);
            width: 30px;
            height: 30px;
            border-radius: 50%;
            padding: 5px;
            align-items: center;
            display: flex;
            justify-content: center;
        }
        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            border: 2px solid white;
        }
    }

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

export const ProfileContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
        position: relative;
        /* justify-content: center; */

    .toggle{
        display: flex;
        gap: 0px;
        background-color: white;
        border: 2px solid black;
        padding: 0px;
        margin: 10px auto;
        /* border-radius: 10px; */

        div{
            padding: 4px 20px;
            /* border-radius: 8px; */
        }

        div.active{
            background-color: black;
            color: white;

        }
    }

    .edit{
        position: absolute;
        top: 22vh;
        right: 3%;
        background-color: black;
        color: white;
        font-size: 12px;
        padding: 7px 10px;
        cursor: pointer;
    }
    img.cover{
        width: 100%;
        height: 20vh;
        object-fit: cover;
    }

    img.profilePicture{
        width: 30vw;
        height: 30vw;
        object-fit: cover;
        border-radius: 50%;
        padding: 0;
        margin-top: -15vw;
        border: 3px solid white;
    }

    .postReminder{
        display: flex;
        width: 80%;
        align-items: center;

        textarea{
            padding: 7px 15px;
            height: 40px;
            width: 100%;
            border: 2px solid;
            border-radius: 36px;
            font-family: "Lato";
        }
    }
`

export const RemindersContainer = styled.div`
    .reminder{
        border: 2px solid;
        margin: 0px auto 50px;
        padding: 10px 30px 50px;

        h3{
            font-size: 30px;
        }

        h3::first-letter{
            font-size: 50px;
        }

        .options{
            width: fit-content;
            padding: 10px 20px;
            border-radius: 26px;
            background-color:white;
            box-shadow: 0 6px 20px rgba(0,0,0,0.2);
            display: flex;
            gap: 20px;
            margin: 20px auto 0;
        }
    }
`

export const InlineFlex = styled.div`
    display: flex;
    gap: 10px;
    padding: 10px;
`

export const ReturnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 3%;
    top: 10px;
    color: white;
    background-color: rgba(0,0,0,0.4);
    padding: 5px;
    border-radius: 50%;
`

export const DeleteContainer = styled.div`
    display: grid;
    gap: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    align-content: center;
    justify-items: center;

    .yes{
        background-color: #18d218;
    }

    .no{
        background-color: red;
    }
    div{
        color: white;
        padding: 6px 12px;
        width: 70%;
        text-align: center;
    }
`

export const ShareContainer = styled.div`
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    
    

    .actions{
        height: 15vh;
        padding: 20px 0;
        background-color: white;
        position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;

    div{
        display: flex;
        flex-direction: column;
        gap: 0;
        align-items: center;

        font-size: 12px;
    }
    }
    .darkBg{
        position: absolute;
        z-index: 1;
        background-color: rgba(0,0,0,0.3);
        height: 100vh;
        width: 100%;
    }
`