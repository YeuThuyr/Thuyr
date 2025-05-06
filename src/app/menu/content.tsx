import React from "react";
import Image from "next/image";

const MenuContent = () => {
    return (
        <div className="bg-[#000]">
            <div className="container mx-auto">
                <div className="py-5 w-2/3">
                    <div className="">
                        <p className="text-[30px] font-medium mb-6 flex">Thực đơn</p>
                        <p className="text-2xl flex mb-1">Đồ uống ngon được pha chế thủ công và đồ ăn có hương vị tuyệt vời. Bí quyết giúp cuộc sống tốt đẹp hơn</p>
                        <Image src='./asset/meny_tcm89-11058_w1024_n.jpg' width={480} height={270} alt='' className="mb-6"></Image>
                        <p className="text-sm font-bold flex mb-6">Đúng vậy. Cốc cà phê hoàn hảo và một chút đồ nư nhẹ thơm ngon, bổ dưỡng có thể mang đến cho bạn một ngày hiệu quả. Vì
                            vậy chúng tôi đảm bảo mọi thứ bạn chọn có chất lượng tốt nhất. Chẳng phải cuộc sống thực sự cần được như vậy sao?
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="">
                            <p>
                                <a href="" className="font-bold text-[26px] text-[#2A8A15]">Đồ uống</a>
                            </p>
                            <p className="font-bold text-sm">Cà phê tuyệt hảo từ khắp nơi trên thế giới. Các loại đồ
                                uống được pha chế theo cách thủ công để bạn khám
                                phá và thưởng thức. Chúng tôi mong muốn mang tới
                                cho bạn những sản phẩm này.
                            </p>
                        </div>
                        <div className="">
                            <p>
                                <a href="" className="font-bold text-[26px] text-[#2A8A15]">Đồ ăn tươi</a>
                            </p>
                            <p className="font-bold text-sm">Các loại bánh ngọt và bánh sandwich của chúng tôi
                                được làm bằng nguyên liệu đơn giản, chất lượng cao. Vì
                                vậy tất cả hương vị tuyệt hảo mà thưởng thức là đồ ăn
                                thực thụ, cực ngon.
                            </p>
                        </div>
                        <div>
                            <p>
                                <a href="" className="font-bold text-sm text-[#2A8A15]">Đồ uống tại Starbucks</a>
                            </p>
                        </div>
                        <div>
                            <p>
                                <a href="" className="font-bold text-sm text-[#2A8A15]">Đồ ăn tại StarBucks</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MenuContent;