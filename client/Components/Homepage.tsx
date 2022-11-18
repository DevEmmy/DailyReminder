import { reminder } from "./dummy"
import { Bordered, Container, GridForm, Logo, ReminderContainer, TopFlex } from "./StyledComponent"
import { RiDownload2Line, RiHeart2Line, RiHeart3Fill, RiHeart3Line, RiShareLine } from "react-icons/ri"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Share from "./Share"


const Homepage = () => {
  const [user, setUser] = useState({})

  useEffect(()=>{
    setUser(localStorage.getItem("user"))
  }, [])

  const router = useRouter()
  const logout = ()=>{
    router.push("/login")
    localStorage.clear()
  }
  return (
   <Container>
    <TopFlex>
      <Logo>
          DailyReminder
      </Logo>

      
        {
          !user ?
          <Bordered>
          <Link href="/signup">
            Register
          </Link>
          </Bordered>
          :
            <div>
            <Bordered>
              <Link href="/profile">
              My Profile
              </Link>
             </Bordered>
             <span onClick={logout} style={{textDecoration: "underline",cursor:"pointer",color: "rgb(150,150,150)"}}>
              logout
             </span>
            </div>
             
          

        }
      
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
      <Share />
   </Container>
  )
}

export default Homepage