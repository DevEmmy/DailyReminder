import { useRouter } from 'next/router'
import React from 'react'
import { RiDeleteBin2Line, RiDownload2Line, RiEditLine, RiFacebookCircleFill, RiHeart2Fill, RiHeart2Line, RiShareLine, RiTwitterFill, RiWhatsappFill } from 'react-icons/ri'
import { reminder } from '../../Components/dummy'
import Return from '../../Components/Return'
import { Container, InlineFlex, ProfileContainer, RemindersContainer, Text } from '../../Components/StyledComponent'

const User = () => {
    const router = useRouter()
    const {displayName} = router.query
  return (
    <ProfileContainer>
        <Return />
        <img src={reminder.postedBy.cover} alt="" className="cover" />
        <img src={reminder.postedBy.profilePicture} alt="" className="profilePicture" />
        <Text>
            {reminder.postedBy.firstName + " " + reminder.postedBy.lastName}
        </Text>
        <Text
        style={{
            background: "rgba(0,0,0,0.1)",
            padding: "10px",
            fontSize: "12px",
            color: "rgb(100,100,100)",
            margin: 0,
            borderRadius: "20px",
        }}
        >{reminder.postedBy.email}</Text>

        <InlineFlex>
            <RiTwitterFill size={25}/>
            <RiFacebookCircleFill size={25}/>
            <RiWhatsappFill size={25}/>
        </InlineFlex>

        <Container>
            <Text
            style={{
                background: "black",
                color: "white",
                padding: "10px",
                width: "fit-content",
                margin: 0,
                cursor: "pointer",
            }}
            >
                Turn on Notifications
            </Text>
            <RemindersContainer>
                {
                [1,2,3,4].map((n, i)=>{
                    return(
                        <div className="reminder" key={i}>
                            <h3>{reminder.content}</h3>
                            <div className="options">
                                <RiHeart2Line size={20} />
                                <RiShareLine size={20}/>
                                <RiDownload2Line size={20}/>
                                </div>
                            </div>
                        )
                    })
                }
            </RemindersContainer>
        </Container>

    </ProfileContainer>
  )
}

export default User