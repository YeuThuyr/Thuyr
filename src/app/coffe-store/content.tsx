import React from "react";
import Image from "next/image";

const Content = () => {
    return (
        <div className="bg-[#000]">
            <div className="container mx-auto">
                <div className="py-5 w-2/3">
                    <div className="">
                        <p className="text-[30px] font-medium mb-6 flex">Quán cà phê</p>
                        <Image src='./asset/coffeehouse.jpg' width={579} height={330} alt='' className="mb-6"></Image>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="">
                            <p>
                                <a href="" className="font-bold text-[26px] text-[#2A8A15]">Cộng đồng Trực tuyến</a>
                            </p>
                            <p className="font-bold text-sm mb-4">Cộng đồng nghĩa là chúng ta cùng nhau sống tốt hơn.
                                Trong các cửa hàng của chúng tôi và trên khắp thế giới.
                                Trò chuyện, kết nối và tham gia.
                            </p>
                            <p className="font-bold text-sm">Tham gia với chúng tôi trên <a href="https://www.facebook.com/starbucksvietnam" target="_blank" className="text-[#2A8A15]">Facebook</a></p>
                        </div>
                        <div className="">
                            <p>
                                <a href="" className="font-bold text-[26px] text-[#2A8A15]">Thiết kế Cửa hàng</a>
                            </p>
                            <p className="font-bold text-sm mb-4">Điều gì khiến quán cà phê Starbucks trở thành không gian
                                sống động và hấp dẫn đến vậy? Triết lý về trách nhiệm với
                                cộng đồng và môi trường.
                            </p>
                            <a href="" className="font-bold text-sm text-[#2A8A15]">Tìm hiểu thêm</a>
                        </div>
                        <div>
                            <p>
                                <a href="" className="font-bold text-[#2A8A15] text-[26px]">Chương trình Chuyên gia Cà phê</a>
                            </p>
                            <p className="font-bold text-sm mb-4">
                                Gặp gỡ các Chuyên gia Cà phê của chúng tôi (bạn sẽ nhận ra
                                họ qua chiếc tạp dề màu đen mà họ đeo). Tìm hiểu những
                                yếu tố cần thiết để trở thành một chuyên gia như vậy. Và
                                khám phá đồ uống hoàn hảo mang thương hiệu Starbucks
                                của chúng tôi.
                            </p>
                            <a href="" className="font-bold text-sm text-[#2A8A15]">Tìm hiểu thêm</a>
                        </div>
                        <div>
                            <p>
                                <a href="" className="font-bold text-[#2A8A15] text-[26px]">Thương mại</a>
                            </p>
                            <p className="font-bold text-sm mb-4">Đối với mỗi đồ uống hoàn hảo, có một chiếc cốc hoàn hảo</p>
                            <a href="" className="font-bold text-sm text-[#2A8A15]">Tìm hiểu thêm</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;