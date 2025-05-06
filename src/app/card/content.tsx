import React from "react";
import Image from "next/image";
import EmailForm from "./sign_in_form/email_form";
import singInDescription from "./sign_in_description";

const Content = () => {
    return (
        <div className="bg-[#181A1B]">
            <div>
                <Image src='./asset/bg-login-full.8385e597.png' alt="" width={1490} height={255}></Image>
            </div>
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <div className="p-[80px]">
                        <div className="text-[32px] mb-10 font-bold">
                            <p>Sign in</p>
                        </div>
                        <EmailForm></EmailForm>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="p-[80px]">
                        <div>
                            <p className="text-[32px] mb-10 font-bold">Not a member?</p>
                        </div>
                        <div className="text-[#0000008F]">
                            <p>With a Starbucks Rewards accound, you can register your Starbucks Card,
                                manage your account and participate in Starbucks Rewards program.
                            </p>
                            <p className="mt-4">Pay with your registered Starbucks Rewards account any way you like and earn Rewards</p>
                        </div>
                        <div>
                            <p className="mt-6 text-[#0000008F]">Collect Stars to reach Gold Status faster with the mobile app:</p>
                            <div className="flex gap-4 my-4">
                                {singInDescription.map((item, index) => (
                                    <div className="flex-1 bg-[#D4E9E2] rounded-2xl place-items-center">
                                        <Image src={item.name} width={120} height={120} alt="" className="p-2"></Image>
                                        <p className="pb-10 text-[#0000008F]">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mb-4 text-[#0000008F]">
                                Collect 100 Stars within one year to reach Gold Status.
                            </p>
                        </div>
                        <div>
                            <button className="font-bold text-base px-4 py-2 mr-2 bg-green-200 rounded-full hover:-translate-y-1 duration-300">Join now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;