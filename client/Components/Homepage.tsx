import { reminder } from "./dummy"
import { Bordered, Container, Logo, ReminderContainer, TopFlex } from "./StyledComponent"
import { RiDownload2Line, RiHeart2Line, RiHeart3Fill, RiHeart3Line, RiShareLine } from "react-icons/ri"
import Link from "next/link"


const Homepage = () => {
  return (
   <Container>
    <TopFlex>
      <Logo>
          DailyReminder
      </Logo>

      <Bordered>
        <Link href="/signup">
          Register
        </Link>
      </Bordered>
    </TopFlex>

    <ReminderContainer>
      <div className="postedBy">
        <img src={reminder.postedBy.profilePicture} alt={reminder.postedBy.displayName} />
        <p>- {reminder.postedBy.displayName}</p>
      </div>
      <h3>
        {reminder.content}
      </h3>

      <div className="reaction">
        <RiHeart2Line size={25}/>
        <RiShareLine size={25}/>
        <RiDownload2Line size={25}/>
      </div>
    </ReminderContainer>
      
   </Container>
  )
}

export default Homepage