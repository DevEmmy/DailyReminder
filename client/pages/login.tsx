import Link from "next/link"
import { Button, Container, Form, Logo, Text, Vector } from "../Components/StyledComponent"
import vector from "../icons/signin.svg"


const login = () => {
  return (
    <Container anchor>
        <Logo>
            <Link href="/">
                DailyReminder
            </Link>
        </Logo>

        <Vector src={vector.src} />
        
        <Text centered fontSize="26px" fontWeight="600">
            Sign In
        </Text>

        <Form>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <Button>
                sign in
            </Button>
        </Form>

        <Text centered>
            I don't have an account yet, <Link href={"/signup"}>Sign up</Link> 
        </Text>
    </Container>
  )
}

export default login