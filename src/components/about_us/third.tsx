import React from "react";

const Third = () => {
    return (
        <div className="px-3 flex flex-col gap-4 pb-[45px]">
            <div className="flex gap-2 items-center">
                <img className="w-[15px] h-[11px]" src="./asset/VietNam_tcm89-24771_w1024_n.png"></img>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
                <p>|</p>
                <p className="md:pr-4 pr-1 text-sm">Tiếng Việt(VN)</p>
                <a href="/" className="text-sm text-[#382F2D] hover:text-neutral-500 duration-300">English</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <div className="flex gap-2">
                <p className="text-[#382F2D] hover:text-neutral-500 duration-300">
                    <a href="">Khả năng truy cập Web</a>
                </p>
                <p>|</p>
                <p className="text-[#382F2D] hover:text-neutral-500 duration-300">
                    <a href="">Chính Sách Bảo Mật Thông Tin</a>
                </p>
                <p>|</p>
                <p className="text-[#382F2D] hover:text-neutral-500 duration-300">
                    <a href="">Điều Khoản Sử dụng</a>
                </p>
                <p>|</p>
                <p className="text-[#382F2D] hover:text-neutral-500 duration-300">
                    <a href="">Sờ đồ Trang Web</a>
                </p>
                <p>|</p>
                <p className="text-[#382F2D] hover:text-neutral-500 duration-300">
                    <a href="">Tùy Chọn Cookie</a>
                </p>
            </div>
            <div>
                <p className="text-[10px] text-[#382F2D] mb-[25px]">© 2025 Starbucks Coffee Company. Mọi quyền được bảo lưu.</p>
            </div>
        </div>
    )
}
export default Third;