'use client';

import React, { FormEvent } from "react";
import FormDisplay from "./form_display";
import types from "./types";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const EmailForm = () => {
    const [ captcha, setCaptcha ] = useState<string | null>(null);

    const handleSubmit = (events: FormEvent) => {
        events.preventDefault();
        console.log(captcha)
        if (captcha){
            console.log("ReCAPTCHA verified")
        }
    }

    return (
        <form className="shadow" onSubmit={handleSubmit}>
            <div className="relative mb-4 bg-[#F7F7F7] p-2 rounded-2xl">
                {types.map((type, index) => (
                    <FormDisplay key={index}>{type}</FormDisplay>
                ))}
            </div>
            <div className="flex mb-7">
                <div className="flex gap-3">
                    <input type="checkbox" className="w-7 h-7 hover:-translate-y-1 duration-300"></input>
                    <p className="inline-block pointer-events-none text-[#0000008F]">Keep me sign in</p>
                </div>
                <div className="flex-1 justify-items-end">
                    <p>Forgot your <a href="" className="text-green-300 underline">password</a> or <a className="text-green-300 underline">email</a>?</p>
                </div>
            </div>
            <div className="mb-10">
                <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""} onChange={setCaptcha}></ReCAPTCHA>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Login
            </button>
        </form>
    )
}
export default EmailForm;