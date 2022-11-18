import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { useRef } from "react"
import { BASE_URL } from "../Components/service"
import { Button, Container, Form, Logo, Text, Vector } from "../Components/StyledComponent"
import vector from "../icons/signin.svg"


const login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const router = useRouter()

    const logIn = async ()=>{
        await axios.post(`${BASE_URL}/user/sign-in`,{
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
        .then(resp => {
            localStorage.setItem("token", resp.data.token)
            localStorage.setItem("user", JSON.stringify(resp.data.user))
            router.push("/")
            // console.log(resp.data)
        })
        .catch(err => console.error(err))
    }
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
            <input type="email" ref={emailRef} placeholder="Email"/>
            <input type="password" ref={passwordRef} placeholder="Password"/>
            <Button onClick={logIn}>
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