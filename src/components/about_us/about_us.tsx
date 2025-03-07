import React from "react";

const AboutUs = () => {
    return (
        <div className="flex flex-col">
            <div className="flex bg-[#382F2D] py-[35px] px-20 items-center gap-5 border border-[3px] border-transparent border-t-gray-200 border-b-gray-200">
                <a className="" href="https://www.facebook.com/">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="31" viewBox="0 0 32 32">
                        <path d="M 16 4 C 9.3844276 4 4 9.3844276 4 16 C 4 22.615572 9.3844276 28 16 28 C 22.615572 28 28 22.615572 28 16 C 28 9.3844276 22.615572 4 16 4 z M 16 6 C 21.534692 6 26 10.465308 26 16 C 26 21.027386 22.311682 25.161277 17.488281 25.878906 L 17.488281 18.916016 L 20.335938 18.916016 L 20.783203 16.023438 L 17.488281 16.023438 L 17.488281 14.443359 C 17.488281 13.242359 17.882859 12.175781 19.005859 12.175781 L 20.810547 12.175781 L 20.810547 9.6523438 C 20.493547 9.6093438 19.822688 9.515625 18.554688 9.515625 C 15.906688 9.515625 14.355469 10.913609 14.355469 14.099609 L 14.355469 16.023438 L 11.632812 16.023438 L 11.632812 18.916016 L 14.355469 18.916016 L 14.355469 25.853516 C 9.6088556 25.070647 6 20.973047 6 16 C 6 10.465308 10.465308 6 16 6 z"></path>
                    </svg>
                </a>
                <a className="" href="https://www.instagram.com/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>
                </a>
            </div>
            <div className="flex flex-col bg-[#382F2D]">
                <div className="container mx-auto">
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
                            <p></p>
                            <p></p>
                            <a href="" className="text-[#382F2D] hover:text-neutral-500 duration-300">Bộ định vị Cửa hàng</a>
                            <a href="" className="text-[#382F2D] hover:text-neutral-500 duration-300">Dành cho Đối tác</a>
                        </div>
                        <div className="flex col-span-1 justify-end items-start">
                            <img src="/asset/starbuck.png" className=""></img>
                        </div>
                    </div>
                    <div className="px-3 flex flex-col gap-4 pb-[45px]">
                        <div className="flex gap-2 items-center">
                            <img className="w-[15px] h-[11px]" src="/asset/VietNam_tcm89-24771_w1024_n.png"></img>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            <p>|</p>
                            <p className="md:pr-4 pr-1 text-sm">Tiếng Việt(VN)</p>
                            <a href="/" className="text-sm text-[#382F2D] hover:text-neutral-500 duration-300">English</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-3">
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
                </div>
            </div>
        </div>
    )
}
export default AboutUs;