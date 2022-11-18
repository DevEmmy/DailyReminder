import axios from "axios"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { RiDeleteBin2Line, RiDeleteBin7Line, RiDownload2Fill, RiDownload2Line, RiEdit2Line, RiEditLine, RiFacebookCircleFill, RiInstagramFill, RiMailCloseFill, RiMailFill, RiSendPlane2Line, RiSendPlaneLine, RiShareForward2Fill, RiShareForwardFill, RiShareLine, RiTwitterFill, RiWhatsappFill } from "react-icons/ri"
import Delete from "../Components/Delete"
import { reminder } from "../Components/dummy"
import Return from "../Components/Return"
import { BASE_URL } from "../Components/service"
import { Container, InlineFlex, ProfileContainer, RemindersContainer, Text } from "../Components/StyledComponent"

const profile = () => {

    const [toggle, setToggle] = useState(0)
   
    const [profile, setProfile] = useState({})
    useEffect(() => {
        // Perform localStorage action
        setProfile(JSON.parse(localStorage.getItem("user")))
      }, [])
      const contentRef = useRef()

      const upload = async ()=>{
        var reminder = {content:" contentRef.current.value"}
        console.log(reminder)
        await axios.post(`${BASE_URL}/reminder/`, {content: contentRef.current.value},
        { headers: {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
          }
          })
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
      }

  return (
    <ProfileContainer>
        <Return />
        {/* <Delete /> */}
        <Link href={"/edit-profile"}>
            <div className="edit">
                Edit Profile
            </div>
        </Link>
        
        <img src={profile.cover} className="cover" />
        <img src={profile.profilePicture} alt="" className="profilePicture" />
        <Text>{profile.firstName + " " + profile.lastName}</Text>
        <Text
        style={{
            background: "rgba(0,0,0,0.1)",
            padding: "10px",
            fontSize: "12px",
            color: "rgb(100,100,100)",
            margin: 0,
            borderRadius: "20px",
        }}
        >{profile.email}</Text>
        <InlineFlex>
            <RiTwitterFill size={25}/>
            <RiFacebookCircleFill size={25}/>
            <RiWhatsappFill size={25}/>
        </InlineFlex>

        <div className="postReminder">
            <textarea ref={contentRef} placeholder="Upload a Reminder"/>
            <RiSendPlaneLine onClick={upload} size={25}/>
        </div>

        <div className="toggle">
            <div 
            className={`${toggle==0 && "active"}`}
            onClick={()=> setToggle(0)}
            >
                Reminders
            </div>

            <div className={`${toggle==1 && "active"}`}
            onClick={()=> setToggle(1)}
            >
                Favourites
            </div>
        </div>


        <Container>
            {
                toggle === 0 ?
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
            :
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
            }
            

            
        </Container>

    </ProfileContainer>
  )
}

export default profile