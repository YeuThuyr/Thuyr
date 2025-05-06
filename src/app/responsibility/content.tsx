import React from "react";
import Image from "next/image";

const Content = () => {
    return (
        <div className="bg-[#000]">
            <div className="container mx-auto">
                <div className="py-5 w-2/3">
                    <div className="">
                        <p className="text-[30px] font-medium mb-6 flex">Trở thành một Công ty Có trách nhiệm</p>
                        <p className="text-2xl font-medium mb-2">Chúng tôi đã luôn tin rằng doanh nghiệp có thể và nên có tác động tích cực đến cộng đồng phục vụ.</p>
                        <Image src='./asset/responsibilities.jpg' width={579} height={330} alt='' className="mb-6"></Image>
                        <p className="font-bold text-sm mb-6">bởi vậy, kể từ khi mở cừa hàng đầu tiên vào năm 1971, chúng tôi đã chuyên tâm phục vụ để có được lòng tin và sự tôn trọng của
                            khách hàng, cộng sự(nhân viên) và những người láng giềng. Bằng cách nào? Bằng cách biết chịu trách nhiệm và làm những
                            điều tốt đẹp cho nhau, cho hành tinh của chúng ta.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="">
                            <p>
                                <a href="" className="font-bold text-[26px] text-[#2A8A15]">Môi trường</a>
                            </p>
                            <p className="font-bold text-sm mb-6">
                                Chúng tôi đang tìm cách giảm thiểu dấu ấn môi trường, giải quyết vấn đề biến đổi khí hậu và khơi nguồn cảm hứng để
                                những người khác cùng tham gia.
                            </p>
                            <p>
                                <a href="" className="font-bold text-sm text-[#2A8A15]">Tái chế</a>
                            </p>
                            <p>
                                <a href="" className="font-bold text-sm text-[#2A8A15]">Năng lượng</a>
                            </p>
                            <p>
                                <a href="" className="font-bold text-sm text-[#2A8A15]">Nước</a>
                            </p>
                            <p>
                                <a href="" className="font-bold text-sm text-[#2A8A15]">Công trình Xanh</a>
                            </p>
                            <p className="mb-6">
                                <a href="" className="font-bold text-sm text-[#2A8A15]">Biến đổi Khí hậu</a>
                            </p>
                            <p>
                                <a href="" className="font-bold text-sm text-[#2A8A15]">Tìm hiểu Thêm Về Môi trường</a>
                            </p>
                        </div>
                        <div className="">
                            <p>
                                <a href="" className="font-bold text-[26px] text-[#2A8A15]">Tìm nguồn Cung ứng có Đạo đức</a>
                            </p>
                            <p className="font-bold text-sm mb-4">Chúng tôi cam kết mua và phục vụ loại cà phê được vun
                                trồng có trách nhiệm, được buôn bán có đạo đức với chất
                                lượng cao nhất nhằm tạo nên tương lai tốt đẹp hơn cho người trồng cà phê.
                            </p>
                            <p>
                                <a href="" className="font-bold text-sm text-[#2A8A15]">Cà phê</a>
                            </p>
                            <p>
                                <a href="" className="font-bold text-sm text-[#2A8A15]">Hỗ trợ Nông dân</a>
                            </p>
                            <p>
                                <a href="" className="font-bold text-sm text-[#2A8A15]">Trà</a>
                            </p>
                            <p className="mb-6">
                                <a href="" className="font-bold text-sm text-[#2A8A15]">Ca cao</a>
                            </p>
                            <p>
                                <a href="" className="font-bold text-sm text-[#2A8A15]">Tìm hiểu Thêm Về Hoạt động Tìm nguồn Cung ứng có Đạo đức</a>
                            </p>
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;