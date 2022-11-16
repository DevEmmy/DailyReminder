import { reminder } from "./dummy"
import { Bordered, Container, Logo, ReminderContainer, TopFlex } from "./StyledComponent"


const Homepage = () => {
  return (
   <Container>
    <TopFlex>
      <Logo>
          DailyReminder
      </Logo>

      <Bordered>
        Register
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

      </div>
    </ReminderContainer>
      
   </Container>
  )
}

export default Homepage