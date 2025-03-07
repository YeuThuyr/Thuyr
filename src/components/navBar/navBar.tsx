import React from "react";
import StoreLocatorButton from "./store_locator_button/store_locator_button";

const NavBar = () => {
    return (
    <div className="sticky top-0 bg-white z-10">
        <div className="flex bg-green-200 h-3 block"></div>
        <div className="flex xl:px-24 lg:px-[30px] md:px-6">
            <div className="flex [@media(max-width:950px)]:flex-col [@media(max-width:950px)]:gap-0 flex-row flex-1 gap-5">
                <div className="py-4">
                  <a>
                    <img className="object-cover" src="./asset/star_buck.png"></img>
                  </a>
                </div>
                <div className="flex">
                  <div className="flex relative group items-end">
                    <a href="/coffe" className="p-[14px] text-sm cursor-pointer group-hover:bg-black hover:bg-black hover:border-transparent hover:border-2 hover:border-b-white">CÀ PHÊ</a>
                    <div className="container mx-auto w-max absolute top-24 bg-white text-white p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100">
                      <div className="grid grid-cols-5">
                        <div className="col-span-4 pt-[10px] pb-[20px] flex flex-col w-full">
                          <div className="grid grid-cols-4">
                            <div className="flex col-span-4">
                              <div className="flex flex-col pl-[30px] text-[13px] w-full">
                                <a href="">
                                  <p className="font-bold hover:bg-green-200 duration-300 inline-block">Cà phê của Chúng tôi</p>
                                </a>
                                <a href="">
                                  <p className="hover:bg-green-200 duration-300 inline-block">Cà phê Nguyên Hạt</p>
                                </a>
                                <a href="">
                                  <p className="hover:bg-green-200 duration-300 inline-block">Xem Tất cả các loại Cà phê</p>
                                </a>
                              </div>
                              <div className="flex flex-col pl-[30px] text-[13px] w-full">
                                <a className="font-bold" href="">
                                  <p className="hover:bg-green-200 duration-300 inline-block">Tìm loại Cà phê Hoàn hảo của Bạn</p>
                                </a>
                              </div>
                              <div className="flex flex-col pl-[30px] text-[13px] w-full">
                                <a href="">
                                  <p className="hover:bg-green-200 duration-300 inline-block font-bold">Espresso</p>
                                </a>
                                <a href="">Thành phần</a>
                                <a href="">Thiết bị Tốt nhất</a>
                                <a href="">Nhân viên Pha chế Cà phê</a>
                              </div>
                              <div className="flex flex-col pl-[30px] text-[13px] w-full">
                                <a href="" className="font-bold">Cách Pha Cà phê</a>
                                <a href="">Coffee Press</a>
                                <a href="">Pour-Over</a>
                                <a href="">Iced Pour-Over</a>
                                <a href="">Coffee Brewer</a>
                              </div>
                            </div>
                            <div className="flex col-span-2 mb-8">
                              <div className="flex flex-col text-[13px] pl-[30px] w-full">
                                <a href="" className="font-bold">Tìm nguồn Cung ứng có Đạo đức</a>
                                <a href="">Cà phê được Vun trồng có Trách nhiệm</a>
                                <a href="">Chất lượng cà phê</a>
                                <a href="">Hỗ trợ Nông dân</a>
                              </div>
                              <div className="flex flex-col text-[13px] pl-[30px] w-full">
                                <a href="" className="font-bold">Tìm hiểu Thêm</a>
                                <a href="">Dòng sản phẩm Cà phê Rang Starbucks</a>
                                <a href="">Những hương vị trong Cốc cà phê của bạn</a>
                                <a href="">Câu hỏi Thường Gặp về Cà phê</a>
                              </div>
                            </div>
                            <div className="flex col-span-4">
                              <div className="flex flex-col flex-1 pr-2">
                                <div className="pt-3 px-1 border border-transparent border-t-yellow-500 mb-3 flex-1">Bạn đang tìm kiếm các loại Đồ uống Cà phê?</div>
                                <a href="">
                                  <p className="text-[13px] font-bold px-1">Thức uống</p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex relative col-span-1">
                          <img className="w-full h-full object-cover" src="/asset/background-1.jpg"></img>
                          <div className="flex absolute px-[15px] w-4/5">
                            <a href="/" className="my-5 p-[5px]">
                              <div className="px-3 py-2 hover:bg-green-200 duration-300">
                                <img className="mb-1" src="/asset/blonde_roast_coffee_tcm89-15926.jpg"></img>
                                <p className="text-sm font-bold mb-1">Blonde Roast</p>
                                <p className="text-sm font-medium mb-1">Nhẹ và ngọt dịu, loại cà phê rang qua hoàn hảo.</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex relative group items-end">
                    <a className="p-[14px] text-sm cursor-pointer group-hover:bg-black hover:bg-black hover:border-transparent hover:border-2 hover:border-b-white">THỰC ĐƠN</a>
                    <div className="container mx-auto w-max left-[-80] absolute top-24 bg-white text-white p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100">
                      <div className="grid grid-cols-5">
                        <div className="col-span-4 pt-[10px] pb-[20px] flex flex-col w-full">
                          <div className="flex mb-8">
                            <div className="flex flex-col text-[13px] pl-[30px] flex-1">
                              <a href="">
                                <p className="inline-block hover:bg-green-200 duration-300 font-bold">Thức ăn</p>
                              </a>
                              <a href="">
                                <p className="inline-block hover:bg-green-200 duration-300">Bánh</p>
                              </a>
                              <a href="">
                                <p className="inline-block hover:bg-green-200 duration-300">Bánh Muffin</p>
                              </a>
                              <a href="">
                                <p className="inline-block hover:bg-green-200 duration-300">Bánh cookie</p>
                              </a>
                              <a href="">
                                <p className="inline-block hover:bg-green-200 duration-300">Bánh Ngọt</p>
                              </a>
                              <a href="">
                                <p className="inline-block hover:bg-green-200 duration-300">Bánh mì sandwiches</p>
                              </a>
                            </div>
                            <div className="flex flex-col text-[13px] pl-[30px] flex-1">
                              <a href="">
                                <p className="inline-block hover:bg-green-200 duration-300 font-bold">Thức uống</p>
                              </a>
                              <a href="">
                                <p className="inline-block hover:bg-green-200 duration-300">Thức uống Espresso</p>
                              </a>
                              <a href="">
                                <p className="inline-block hover:bg-green-200 duration-300">Thức uống với Socola</p>
                              </a>
                              <a href="">
                                <p className="inline-block hover:bg-green-200 duration-300">Cà phê Xay Frappuccino®</p>
                              </a>
                              <a href="">
                                <p className="inline-block hover:bg-green-200 duration-300">Kem Trộn Frappuccino®</p>
                              </a>
                              <a href="">
                                <p className="inline-block hover:bg-green-200 duration-300">Trà pha</p>
                              </a>
                            </div>
                            <div className="flex-1"></div>
                            <div className="flex-1"></div>
                          </div>
                          <div className="pr-3">
                            <div className="px-1 pt-3 mb-3 border border-transparent border-t-yellow-500 text-base">Bạn đang tìm kiếm Cà phê để thưởng thức tại Nhà?</div>
                            <p className="inline-block hover:bg-green-300 duration-300 text-[13px] font-bold mr-2 md:mr-4">
                              Tìm hiểu về Dòng sản phẩm cà phê rang Starbucks Roast
                            </p>
                            <p className="text-[13px] inline-block">Cà phê</p>
                          </div>
                        </div>
                        <div className="flex relative col-span-1">
                          <img className="w-full h-full object-cover" src="/asset/background-1.jpg"></img>
                          <div className="flex absolute px-[15px] w-5/6">
                            <a href="/" className="my-5 p-[5px]">
                              <div className="px-3 py-2 hover:bg-green-200 duration-300">
                                <img className="mb-1" src="/asset/menu_blueberries_tcm89-16461.jpg"></img>
                                <p className="text-sm font-bold mb-1">Đồ ăn Thực thụ, Cực Ngon</p>
                                <p className="text-sm font-medium mb-1">Xem những lựa chọn món ăn mới trong cửa hàng của chúng tôi.</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex relative group items-end">
                    <a className="p-[14px] text-sm cursor-pointer group-hover:bg-black group-hover: hover:bg-black hover:border-transparent hover:border-2 hover:border-b-white">QUÁN CÀ PHÊ</a>
                    <div className="container mx-auto w-max absolute top-24 left-[-185] bg-white text-white p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">     
                      <div className="grid grid-cols-5">
                        <div className="col-span-4 pt-[10px] pb-[20px] flex flex-col w-full">
                          <div className="flex text-[13px] mb-8">
                            <div className="pl-[30px] flex flex-col flex-1">
                              <a href="">
                                <p className="font-bold inline-block hover:bg-green-300 duration-300">Chương trình Chuyên gia cà phê</p>
                              </a>
                            </div>
                            <div className="pl-[30px] flex flex-col flex-1">
                              <a href="">
                                <p className="font-bold inline-block hover:bg-green-300 duration-300">Cộng đồng Trực tuyến</p>
                              </a>
                            </div>
                            <div className="pl-[30px] flex flex-col flex-1">
                              <a href="">
                                <p className="font-bold hover:bg-green-300 inline-block duration-300">Thiết kế Cửa hàng</p>
                              </a>
                            </div>
                            <div className="pl-[30px] flex flex-col flex-1">
                              <a href="">
                                <p className="font-bold inline-block hover:bg-green-300 duration-300">Sản phẩm</p>
                              </a>
                              <a href="">
                                <p className="inline-block hover:bg-green-300 duration-300">Dụng cụ uống</p>
                              </a>
                              <a href="">
                                <p className="inline-block hover:bg-green-300 duration-300">Dụng cụ pha chế</p>
                              </a>
                              <a href="">
                                <p className="inline-block hover:bg-green-300 duration-300">Phụ kiện</p>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col pr-3">
                            <div className="px-1 pt-3 border border-transparent border-t-yellow-300 mb-3">Bạn đang tìm kiếm Điều gì Khác?</div>
                            <div className="flex md:gap-4 gap-2 text-[13px] px-1">
                              <a href="">
                                <p className="font-bold hover:bg-green-300">Thức uống</p>
                              </a>
                              <p>giới thiệu về Chúng tôi</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex relative col-span-1">
                          <img className="object-cover" src="/asset/background-1.jpg"></img>
                          <div className="flex absolute px-[15px] w-5/6">
                            <a href="/" className="my-5 p-[5px]">
                              <div className="flex flex-col px-3 py-2 hover:bg-green-200 duration-300">
                                <img className="mb-1" src="/asset/coffeehouse-teaser_tcm89-3864.jpg"></img>
                                <div className="text-sm font-bold mb-1">Cà phê của chúng tôi đưa mọi người lại gần nhau</div>
                                <div className="text-sm font-medium mb-1">Vui chơi, mơ giấc mơ lớn và vui chơi với bạn bè.</div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex relative group items-end">
                    <a className="p-[14px] text-sm cursor-pointer hover:bg-black hover:border-transparent hover:border-2 hover:border-b-white">TRÁCH NHIỆM</a>
                    <div className="container mx-auto w-max absolute top-24 bg-white text-white p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"></div>
                  </div>
                  <div className="flex relative group items-end">
                    <a className="p-[14px] text-sm cursor-pointer hover:bg-black hover:border-transparent hover:border-2 hover:border-b-white" href="/about-us">VỀ CHÚNG TÔI</a>
                    <div className="container mx-auto w-max absolute top-24 bg-white text-white p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"></div>
                  </div>
                  <div className="flex relative group items-end">
                    <a className="p-[14px] text-sm cursor-pointer hover:bg-black hover:border-transparent hover:border-2 hover:border-b-white">THẺ</a>
                    <div className="container mx-auto w-max absolute top-24 bg-white text-white p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"></div>
                  </div>
                </div>
            </div>
            <StoreLocatorButton></StoreLocatorButton>
        </div>
      </div>
    )
};
export default NavBar;