import Link from "next/link"
import { Button, Container, Form, Logo, Text, Vector } from "../Components/StyledComponent"
import vector from "../icons/signup.svg"


const signup = () => {
  return (
    <Container anchor>
        <Logo>
            <Link href="/">
                DailyReminder
            </Link>
        </Logo>

        {/* <Vector src={vector.src} /> */}
        
        <Text centered fontSize="26px" fontWeight="600">
            Sign up
        </Text>

        <Form>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name" />
            <input type="password" placeholder="Password"/>
            <Button>
                sign up
            </Button>
        </Form>

        <Text centered>
            I already have an account, <Link href="/login">Sign In</Link>
        </Text>
    </Container>
  )
}

export default signup