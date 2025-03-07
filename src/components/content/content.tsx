import React from "react";
import Link from "next/link";

const Content = () => {
    return (
        <div className="flex flex-col">
            <div className="relative">
                <img className="h-[560px] object-cover" src="/asset/hero-banner-desktop-copy-2-1.jpg"></img>
            </div>
            <div className="flex bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-24 py-[70px]">
                            <div className="flex flex-col gap-4 flex-1 px-6">
                                <p className="text-2xl font-bold">CÀ PHÊ ESPRESSO CỦA CHÚNG TÔI, LATTE CỦA BẠN</p>
                                <p className="text-[18px] font-bold italic">Cà phê espresso đậm vị và bốc hơi sữa - ngon tuyệt hảo khi thưởng thức riêng hay khi thêm đường</p>
                                <div className="flex">
                                    <Link href={''} className="flex border border-transparent border-px border-b-gray-100 items-center gap-1">
                                        <p className="text-[17px] font-bold">Hãy thưởng thức ngay</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-3">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-1">
                                <img src="/asset/our-espresso_tcm89-24616_w1024_n.png"></img>
                            </div>
                        </div>
                        <div className="flex items-center gap-24 py-[70px]">
                            <div className="flex-1">
                                <img src="/asset/opportunity_tcm89-24617_w1024_n.png"></img>
                            </div>
                            <div className="flex flex-col gap-4 flex-1 px-6">
                                <p className="text-2xl font-bold">CƠ HỘI</p>
                                <p className="text-[18px] font-bold italic">Không chỉ là nhân viên, mà còn là cộng sự</p>
                                <div className="flex">
                                    <Link href={''} className="flex border border-transparent border-px border-b-gray-100 items-center gap-1">
                                        <p className="text-[17px] font-bold">Tham gia cùng chúng tôi</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-3">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;