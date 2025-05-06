import React from "react";

const Second = () => {
    return (
        <div className="grid grid-cols-6 mb-6">
            <div className="col-span-1 pt-16 flex flex-col gap-3">
                <p>
                    <a href="/about-us" className="font-bold text-[#382F2D] hover:text-neutral-500 duration-300">VỀ CHÚNG TÔI</a>
                </p>
                <p>
                    <a href="" className="text-[#382F2D] hover:text-neutral-500 duration-300">Di sản</a>
                </p>
                <p>
                    <a href="" className="text-[#382F2D] hover:text-neutral-500 duration-300">Công ty</a>
                </p>
                <p>
                    <a href="" className="text-[#382F2D] hover:text-neutral-500 duration-300">Cơ hội nghề nghiệp</a>
                </p>
            </div>
            <div className="col-span-1 pt-16 flex flex-col gap-3">
                <p>
                    <a href="" className="font-bold text-[#382F2D] hover:text-neutral-500 duration-300">DỊCH VỤ KHÁCH HÀNG</a>
                </p>
                <p>
                    <a href="" className="text-[#382F2D] hover:text-neutral-500 duration-300">Câu hỏi Thường Gặp</a>
                </p>
            </div>
            <div className="col-span-3 pt-16 flex flex-col gap-3">
                <p>
                    <a href="" className="font-bold font-bold text-[#382F2D] hover:text-neutral-500 duration-300">LIÊN KẾT NHANH</a>
                </p>
                <p>
                    <a href="" className="text-[#382F2D] hover:text-neutral-500 duration-300">Bộ định vị Cửa hàng</a>
                </p>
                <p>
                    <a href="" className="text-[#382F2D] hover:text-neutral-500 duration-300">Dành cho Đối tác</a>
                </p>
            </div>
            <div className="flex col-span-1 justify-end items-start">
                <img src="./asset/starbuck.png" className=""></img>
            </div>
        </div>
    )
}
export default Second;