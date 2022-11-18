import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { useRef, useState } from "react"
import { BASE_URL } from "../Components/service"
import { Button, Container, Form, Logo, Text, Vector } from "../Components/StyledComponent"
import vector from "../icons/signup.svg"


const signup = () => {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const router = useRouter()

    const signUp = async ()=>{
        axios.post(`${BASE_URL}/user/sign-up`, {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
        .then(resp => {
            localStorage.setItem("token", resp.data.token)
            localStorage.setItem("user", JSON.stringify(resp.data.user))
            router.push("/edit-profile")
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

        {/* <Vector src={vector.src} /> */}
        
        <Text centered fontSize="26px" fontWeight="600">
            Sign up
        </Text>

        <Form>
            <input type="email" ref={emailRef} placeholder="Email"/>
            <input type="text" ref={firstNameRef} placeholder="First Name"/>
            <input type="text" ref={lastNameRef} placeholder="Last Name" />
            <input type="password" ref={passwordRef} placeholder="Password"/>
            <Button onClick={()=> signUp()}>
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