import { Button, Container, Form, Logo, Text } from "../Components/StyledComponent"


const login = () => {
  return (
    <Container>
        <Logo>
            DailyReminder
        </Logo>
        <Text>
            Sign In
        </Text>

        <Form>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <Button>
                sign in
            </Button>
        </Form>
    </Container>
  )
}

export default login