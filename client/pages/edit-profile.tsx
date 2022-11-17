import { RiCamera2Line, RiCameraLensLine } from "react-icons/ri"
import { reminder } from "../Components/dummy"
import Return from "../Components/Return"
import { Button, Container, Form, GridForm } from "../Components/StyledComponent"


const edit = () => {
  return (
    // <Container>
    <>
    <Return />
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

                <GridForm>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="text" placeholder="Display Name"/>
                    {/* <input type="text" />
                    <input type="text" /> */}
                    <Button>
                        Save
                    </Button>
                </GridForm>
                
            </Form>
    </>
        
    // </Container>
    
  )
}

export default edit