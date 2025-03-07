const locations = [
    { name: "NEW WORLD", lat: 10.771473682405858, lng: 106.69394224129506, time: "6:30 - 00:00", address: "Góc đường Phạm Hồng Thái và Nguyễn Thị Nghĩa, 76 Le Lai, Quận 1, Tp. Hồ Chí Minh", tel: '+842838237952' },
    { name: "PHAN XÍCH LONG", lat: 10.797702456219882, lng: 106.69003354109006 },
    { name: "PANORAMA", lat: 10.72147167882946, lng: 106.71405139344306 },
    { name: "PANDORA", lat: 10.8067867763326, lng: 106.63451676831396 },
    { name: "VIVOCITY", lat: 10.729963061994722, lng: 106.70385699529605 },
    { name: "THẢO ĐIỀN", lat: 10.803294298823506, lng: 106.73768085296932 },
    { name: "KUMHO", lat: 10.781510699471294, lng: 106.70033892598586 },
    { name: "NGUYỄN HUỆ", lat: 10.773522008925488, lng: 106.7038214633851 },
    { name: "EMART", lat: 10.823800772715696, lng: 106.69303413762526 },
    { name: "LAKAI", lat: 10.754129920871591, lng: 106.66977885296856 },
    { name: "SÂN BAY TÂN SƠN NHẤT", lat: 10.813349294349218, lng: 106.66315471249472 },
    { name: "NGUYỄN VĂN TRỖI", lat: 10.795262775396479, lng: 106.67738386038076 },
    { name: "THE VISTA", lat: 10.80543006158116, lng: 106.7516162222804 },
    { name: "LEMAN BUILDING", lat: 10.778071559941408, lng: 106.68988499529684 },
    { name: "IBIS BUILDING", lat: 10.813546839195793, lng: 106.66610381064183 },
    { name: "CMT8", lat: 10.77665368178551, lng: 106.68377176646061 },
    { name: "VẠN HẠNH MALL", lat: 10.77043778774195, lng: 106.67009732413284 },
    { name: "CRESCENT STRIP", lat: 10.728117719930145, lng: 106.71866041064055 },
    { name: "ESTELLA", lat: 10.802252457454692, lng: 106.74871572228042 },
    { name: "RIVERPARK", lat: 10.725372066159572, lng: 106.70828694132952 },
    { name: "LANDMARK 81", lat: 10.795147495981764, lng: 106.72238704318337 },
    { name: "VINCOM ĐỒNG KHỞI", lat: 10.778152736764513, lng: 106.70202031041597 },
    { name: "GATEWAY THẢO ĐIỀN", lat: 10.803686520574027, lng: 106.74656506197047 },
    { name: "GOLDVIEW", lat: 10.756999914931129, lng: 106.69183932413254 },
    { name: "SENSE CITY", lat: 10.82832166984936, lng: 106.72213258365885 },
    { name: "SAIGON CENTRE", lat: 10.773955646792478, lng: 106.7009996376244 },
    { name: "HAPPY RESIDENCE", lat: 10.717729331227197, lng: 106.72828632227912 },
    { name: "ETOWN 5", lat: 10.802531970380208, lng: 106.64138023321158 },
    { name: "SAIGON MIA", lat: 10.733098400298077, lng: 106.68917763762383 },
    { name: "SAIGON PEARL", lat: 10.79058989373587, lng: 106.72006300878869 },
    { name: "LOTTE NAM SAIGON", lat: 10.741107216293589, lng: 106.70279401382493 },
    { name: "LOTTE PICO", lat: 10.801100638204709, lng: 106.65374892917028 },
    { name: "MÊ LINH POINT", lat: 10.774668525947591, lng: 106.70650601011961 },
    { name: "URBAN HILL", lat: 10.728430250291442, lng: 106.71189505296825 },
    { name: "GOLDEN MANSION", lat: 10.809229297392022, lng: 106.67136614503647 },
    { name: "THẢO ĐIỀN PEARL", lat: 10.801401215615877, lng: 106.73353323525043 },
    { name: "SAIGON ROYAL", lat: 10.767178888651115, lng: 106.70411806038037 },
    { name: "THE EMPORIUM", lat: 10.764765926053665, lng: 106.6557236454127 },
    { name: "HƯNG PHƯỚC", lat: 10.73137305383196, lng: 106.706859794427 },
    { name: "AEON MALL BÌNH TÂN", lat: 10.742953901327242, lng: 106.61258555526503 },
    { name: "FELIZ EN VISTA", lat: 10.777680964325583, lng: 106.75654689574048 },
    { name: "THISO", lat: 10.772218365513297, lng: 106.72303610923193 },
    { name: "AEON MALL TÂN PHÚ", lat: 10.801830492883141, lng: 106.61822307061033 },
    { name: "MIDTOWN", lat: 10.72511648640903, lng: 106.72873134177323 },
    { name: "SUN AVENUE", lat: 10.785123608426797, lng: 106.74717287854315 },
    { name: "CENTRAL 2", lat: 10.791184426891636, lng: 106.72198828412827 },
    { name: "NGUYỄN THỊ MINH KHAI", lat: 10.782344874879346, lng: 106.6975161920347 },
    { name: "COBI", lat: 10.730792607702332, lng: 106.72498804600065 },
    { name: "VINHOMES GRAND PARK ORIGAMI", lat: 10.844257134191407, lng: 106.83989283013592 },
    { name: "AEON MALL BÌNH DƯƠNG CANARY", lat: 10.932574696264556, lng: 106.71223918595652 },
    { name: "HIKARI", lat: 11.058576035054221, lng: 106.68472511298718 },
    { name: "NEW HORIZON BÌNH DƯƠNG", lat: 10.97691117023208, lng: 106.67007625156235 },
    { name: "VINPEARL BEACHFRONT", lat: 12.233422054878291, lng: 109.1979842399404 },
    { name: "NHA TRANG CENTER", lat: 40.758896, lng: -73.985130 },
    { name: "VINWONDERS", lat: 40.758896, lng: -73.985130 },
    { name: "BEACH HOUSE SUN PRIMAVERA", lat: 40.758896, lng: -73.985130 },
    { name: "BẠCH ĐẰNG", lat: 40.758896, lng: -73.985130 },
    { name: "BÀ NÀ HILLS", lat: 40.758896, lng: -73.985130 },
    { name: "BÀ NÀ MAIN GATE", lat: 40.758896, lng: -73.985130 },
    { name: "VINCOM NGÔ QUYỀN", lat: 40.758896, lng: -73.985130 },
    { name: "TRẦN HƯNG ĐẠO, HỘI AN", lat: 40.758896, lng: -73.985130 },
    { name: "TRẦN PHÚ", lat: 40.758896, lng: -73.985130 },
    { name: "VĂN CAO BUILDING", lat: 40.758896, lng: -73.985130 },
    { name: "LÊ HỒNG PHONG", lat: 40.758896, lng: -73.985130 },
    { name: "BÀ TRIỆU", lat: 40.758896, lng: -73.985130 },
    { name: "IPH", lat: 40.758896, lng: -73.985130 },
    { name: "THE GARDEN", lat: 40.758896, lng: -73.985130 },
    { name: "VINCOM PHẠM NGỌC THẠCH", lat: 40.758896, lng: -73.985130 },
    { name: "SOMERSET WEST POINT", lat: 40.758896, lng: -73.985130 },
    { name: "NHÀ THỜ", lat: 40.758896, lng: -73.985130 },
    { name: "CHARMVIT TOWER", lat: 40.758896, lng: -73.985130 },
    { name: "KEANGNAM", lat: 40.758896, lng: -73.985130 },
    { name: "DUY TÂN", lat: 40.758896, lng: -73.985130 },
    { name: "THE LEGEND", lat: 40.758896, lng: -73.985130 },
    { name: "SEASONS AVENUE", lat: 40.758896, lng: -73.985130 },
    { name: "VINCOM METROPOLIS", lat: 40.758896, lng: -73.985130 },
    { name: "VINCOM STAR CITY", lat: 40.758896, lng: -73.985130 },
    { name: "SÂN BAY NỘI BÀI", lat: 40.758896, lng: -73.985130 },
    { name: "VINMEC HÀ NỘI", lat: 40.758896, lng: -73.985130 },
    { name: "AEON MALL HÀ ĐÔNG", lat: 40.758896, lng: -73.985130 },
    { name: "ROYAL CITY", lat: 40.758896, lng: -73.985130 },
    { name: "ECOPARK", lat: 40.758896, lng: -73.985130 },
    { name: "TASCO MALL", lat: 40.758896, lng: -73.985130 },
    { name: "TRUNG HÒA", lat: 40.758896, lng: -73.985130 },
    { name: "SÂN BAY QUỐC TẾ NỘI BÀI", lat: 40.758896, lng: -73.985130 },
    { name: "PACIFIC PLACE", lat: 40.758896, lng: -73.985130 },
    { name: "AEON MALL LONG BIÊN", lat: 40.758896, lng: -73.985130 },
    { name: "VINCOM LONG BIÊN", lat: 40.758896, lng: -73.985130 },
    { name: "LOTTE LIỄU GIAI", lat: 40.758896, lng: -73.985130 },
    { name: "NESTA HOTEL", lat: 40.758896, lng: -73.985130 },
    { name: "GOLDEN FIELD", lat: 40.758896, lng: -73.985130 },
    { name: "SÂN BAY NỘI BÀI - CỔNG 12", lat: 40.758896, lng: -73.985130 },
    { name: "SORA MALL", lat: 40.758896, lng: -73.985130 },
    { name: "VINHOMES SKYLAKE", lat: 40.758896, lng: -73.985130 },
    { name: "OCEAN PARK S2", lat: 40.758896, lng: -73.985130 },
    { name: "OCEAN PARK HẢI ÂU VILLA", lat: 40.758896, lng: -73.985130 },
    { name: "LOTTE WEST LAKE", lat: 40.758896, lng: -73.985130 },
    { name: "VINCOM MEGA MALL THẢO ĐIỀN", lat: 40.758896, lng: -73.985130 },
    { name: "CII TOWER", lat: 40.758896, lng: -73.985130 },
    { name: "HÙNG VƯƠNG PLAZA", lat: 40.758896, lng: -73.985130 },
    { name: "TRẦN HƯNG ĐẠO ĐÀ NẴNG", lat: 40.758896, lng: -73.985130 },
    { name: "NGUYỄN HỮU HUÂN", lat: 40.758896, lng: -73.985130 },
    { name: "Q2 TERRACE", lat: 40.758896, lng: -73.985130 },
    { name: "THE WATERFRONT SAIGON", lat: 40.758896, lng: -73.985130 },
    { name: "CELADON BOULEVARD", lat: 40.758896, lng: -73.985130 },
    { name: "STARBUCKS NOI BAI INTERNATIONAL AIRPORT - GATE 34 35", lat: 40.758896, lng: -73.985130 },
    { name: "STARBUCKS SÂN BAY NỘI BÀI NỘI ĐỊA CỔNG 6", lat: 40.758896, lng: -73.985130 },
    { name: "HÀNG ĐIẾU", lat: 40.758896, lng: -73.985130 },
    { name: "KIM LONG VILLA", lat: 40.758896, lng: -73.985130 },
    { name: "WATERBUS THỦ THIÊM", lat: 40.758896, lng: -73.985130 },
    { name: "VÕ THỊ SÁU", lat: 40.758896, lng: -73.985130 },
    { name: "BÀ NÀ GOLDEN BRIDGE", lat: 40.758896, lng: -73.985130 },
    { name: "GOLDEN PLAZA", lat: 40.758896, lng: -73.985130 },
    { name: "VIET TOWER", lat: 40.758896, lng: -73.985130 },
    { name: "DIAMOND PLAZA", lat: 40.758896, lng: -73.985130 },
    { name: "WATERBUS BACH DANG", lat: 40.758896, lng: -73.985130 },
    { name: "STARBUCKS GALAXY TULIPS", lat: 40.758896, lng: -73.985130 },
    { name: "STARBUCKS PHU QUOC DOMESTIC GATE 5", lat: 40.758896, lng: -73.985130 },
    { name: "VINCOM HA LONG", lat: 40.758896, lng: -73.985130 },
    { name: "VINWONDERS PHÚ QUỐC", lat: 40.758896, lng: -73.985130 },
    { name: "STARBUCKS SÔNG HƯƠNG", lat: 40.758896, lng: -73.985130 },
    { name: "STARBUCKS SUN PLAZA SAPA", lat: 40.758896, lng: -73.985130 },
    { name: "STARBUCKS VINCOM BẮC NINH", lat: 40.758896, lng: -73.985130 },
    { name: "STARBUCKS VINCOM THANH HÓA", lat: 40.758896, lng: -73.985130 },
    { name: "STARBUCKS CAM RANH NỘI BÀI CỔNG 1", lat: 40.758896, lng: -73.985130 },
    { name: "STARBUCKS QUANG TRUNG HÀ NỘI RESERVE", lat: 40.758896, lng: -73.985130 }
  ];
export default locations;