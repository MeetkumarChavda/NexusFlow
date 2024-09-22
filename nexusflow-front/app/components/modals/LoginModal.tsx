'use client'

import { useState } from "react"
import Modal from "./Modal"
import useLoginModal from "@/app/hooks/useLoginModal"
import CustomButton from "../forms/CustomButton"

const LoginModal = () =>{
    const loginModal = useLoginModal()

    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="email" type="email" name="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                <input placeholder="password" type="password" name="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
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
            isOpen = {loginModal.isOpen}
            close = {loginModal.close}
            label="Log in "
            content = {content}
        />
    )
}
export default LoginModal