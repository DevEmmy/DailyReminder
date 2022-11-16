import { RiDeleteBin2Line, RiDeleteBin7Line, RiDownload2Fill, RiDownload2Line, RiEdit2Line, RiEditLine, RiFacebookCircleFill, RiInstagramFill, RiMailCloseFill, RiMailFill, RiSendPlane2Line, RiSendPlaneLine, RiShareForward2Fill, RiShareForwardFill, RiShareLine, RiTwitterFill, RiWhatsappFill } from "react-icons/ri"
import { reminder } from "../Components/dummy"
import { Container, InlineFlex, ProfileContainer, RemindersContainer, Text } from "../Components/StyledComponent"

const profile = () => {
  return (
    <ProfileContainer>
        <div className="edit">
            Edit Profile
        </div>
        <img src={reminder.postedBy.cover} className="cover" />
        <img src={reminder.postedBy.profilePicture} alt="" className="profilePicture" />
        <Text>{reminder.postedBy.firstName + " " + reminder.postedBy.lastName}</Text>
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

        <div className="postReminder">
            <textarea placeholder="Upload a Reminder"/>
            <RiSendPlaneLine size={25}/>
        </div>

        <Container>
            <RemindersContainer>
                {
                    [1,2,3,4].map((n, i)=>{
                        return(
                            <div className="reminder" key={i}>
                                <h3>{reminder.content}</h3>
                                <div className="options">
                                    <RiShareLine size={20}/>
                                    <RiDownload2Line size={20}/>
                                    <RiEditLine size={20}/>
                                    <RiDeleteBin2Line size={20}/>
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

export default profile