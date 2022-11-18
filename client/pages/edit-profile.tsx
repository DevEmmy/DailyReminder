import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { RiCamera2Line, RiCameraLensLine } from "react-icons/ri"
import { reminder } from "../Components/dummy"
import Return from "../Components/Return"
import { BASE_URL } from "../Components/service"
import { Button, Container, Form, GridForm } from "../Components/StyledComponent"


const edit = () => {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        // Perform localStorage action
        setProfile(JSON.parse(localStorage.getItem("user")))
      }, [])

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const displayNameRef = useRef()

    const router = useRouter()

    const update = async ()=>{
        await axios.patch(`${BASE_URL}/user/update`, {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            displayName: displayNameRef.current.value
        },{ headers: {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
          }
          })
          .then(resp => {
            localStorage.setItem("user", JSON.stringify(resp.data));
            router.push("/profile")
          })
          .catch(err => console.log(err))
    }

  return (
    // <Container>
    <>
    <Return />
        <Form>
                
                <div className="cover">
                    <img src={profile.cover} alt="" />
                    <div className="icon">
                        <RiCameraLensLine size={25} color="white"/>
                    </div>
                    
                </div>

                <div className="profilePicture">
                    <img src={profile.profilePicture}/>
                    <div className="icon">
                        <RiCameraLensLine size={25} color="white"/>
                    </div>
                </div>

                <GridForm>
                    <input defaultValue={profile.firstName} ref={firstNameRef} type="text" placeholder="First Name"/>
                    <input type="text" ref={lastNameRef} defaultValue={profile.lastName} placeholder="Last Name"/>
                    <input type="text" ref={displayNameRef} defaultValue={profile.displayName}  placeholder="Display Name"/>
                    {/* <input type="text" />
                    <input type="text" /> */}
                    <Button onClick={update}>
                        Save
                    </Button>
                </GridForm>
                
            </Form>
    </>
        
    // </Container>
    
  )
}

export default edit