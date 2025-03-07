import Link from "next/link";
import React from "react";

const CoffeContent = () => {
    return (
        <div>
            <div className="flex flex-col">
                <div className="">
                    <img className="object-cover h-[560px]" src="/asset/fy19-summer-1_tcm89-50260.jpg"></img>
                </div>
                <div className="bg-black border border-4 border-transparent border-b-gray-200 border-t-gray-200">
                    <div className="container mx-auto">
                        <div className="flex gap-16 items-center py-20">
                            <div className="flex-1 px-14 flex flex-col gap-5">
                                <p className="text-2xl font-bold">TÌM THẤY CÀ PHÊ</p>
                                <p className="text-[17px] font-bold italic">Những bậc thầy về cà phê của chúng tôi đã đúc kết nhiều năm
                                    kinh nghiệm nếm thử cà phê của họ trong ba câu hỏi đơn giản
                                    để giúp bạn tìm loại cà phê mà bạn cahcws hẳn sẽ thích.
                                </p>
                                <div className="flex">
                                    <Link href={''} className="flex gap-1 border border-transparent border-b-gray-200 items-center">
                                        <p className="text-[17px] font-bold">Bắt đầu</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                                            <path fill-rule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                            <path fill-rule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="flex">
                                    <Link href={''} className="flex gap-1 border border-transparent border-b-gray-200 items-center">
                                        <p className="text-[17px] font-bold">Duyệt tất cả các loại cà phê</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                                            <path fill-rule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                            <path fill-rule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-1">
                                <img src="/asset/coffee-finder-circles_tcm89-3966_w1024_n.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-full absolute z-[-5]" src="/asset/bg-how_to_brew-mobile.jpg"></img>
                    <div className="px-24">
                        <div className="w-1/2 mb-8">
                            <p className="text-[18px] font-bold mt-[34px] mb-[15px]">CÁCH PHA CÀ PHÊ</p>
                            <p className="text-[42px] font-bold mb-[11px]">Bình ép cà phê</p>
                            <p className="text-[18px] font-medium">Pha bằng bình ép cà phê giữ lại các loại dầu tự nhiên quý giá mà giấy
                                lọc hấp thu và chiết xuất toàn bộ hương vị của cà phê, trong khi vẫn
                                giữ nguyên độ đậm và sánh của cà phê
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default CoffeContent;