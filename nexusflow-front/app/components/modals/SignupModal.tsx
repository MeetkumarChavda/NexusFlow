'use client'

import { useState } from "react"
import Modal from "./Modal"
import CustomButton from "../forms/CustomButton"
import useSignupModal from "@/app/hooks/UseSignupModal"

const SignupModal = () =>{
    const signupModal = useSignupModal()

    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="email" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                <input placeholder="password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                <input placeholder="confirm password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                <div className="p-5 bg-nexus text-white rounded-xl opacity-80">
                    the Error Message
                </div>
                <CustomButton
                    label="Submit"
                    onClick={()=>console.log("test")}
                />
            </form>
        </>
    )
    return(
        <Modal
            isOpen = {signupModal.isOpen}
            close = {signupModal.close}
            label="Sign up"
            content = {content}
        />
    )
}
export default SignupModal