import { RiCamera2Line, RiCameraLensLine } from "react-icons/ri"
import { reminder } from "../Components/dummy"
import { Container, Form } from "../Components/StyledComponent"


const edit = () => {
  return (
    // <Container>
        <Form>
            <div className="cover">
                <img src={reminder.postedBy.cover} alt="" />
                <div className="icon">
                    <RiCameraLensLine size={25} color="white"/>
                </div>
                
            </div>

            <div className="profilePicture">
                <img src={reminder.postedBy.profilePicture}/>
                <div className="icon">
                    <RiCameraLensLine size={25} color="white"/>
                </div>
            </div>

            <Container>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </Container>
            
        </Form>
    // </Container>
    
  )
}

export default edit