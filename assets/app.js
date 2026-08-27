
const OTQ_LANGS = {
  ko: {label:'한국어', html:'ko'},
  vi: {label:'Tiếng Việt', html:'vi'},
  zh: {label:'中文', html:'zh-CN'},
  en: {label:'English', html:'en'}
};

const OTQ_I18N = {
  "인쇄 후공정 외주를 찾고 비교하고 맡기세요.": {"vi":"Tìm đối tác gia công sau in, so sánh báo giá và đặt hàng.","zh":"寻找印后加工供应商，比较报价并下单。","en":"Find print finishing suppliers, compare quotes and outsource with confidence."},"외주 견적요청": {"vi": "Yêu cầu báo giá", "zh": "外协询价", "en": "Request Quote"}, "가공업체 찾기": {"vi": "Tìm nhà gia công", "zh": "寻找加工厂", "en": "Find Suppliers"}, "중고설비": {"vi": "Thiết bị đã qua sử dụng", "zh": "二手设备", "en": "Used Equipment"}, "물류": {"vi": "Logistics", "zh": "物流", "en": "Logistics"}, "업체 입점": {"vi": "Đăng ký đối tác", "zh": "供应商入驻", "en": "Join as Partner"}, "대시보드": {"vi": "Bảng điều khiển", "zh": "控制台", "en": "Dashboard"}, "관리자": {"vi": "Quản trị", "zh": "管理员", "en": "Admin"}, "무료 견적 요청": {"vi": "Yêu cầu báo giá miễn phí", "zh": "免费询价", "en": "Free Quote Request"}, "무료 견적 요청하기": {"vi": "Gửi yêu cầu báo giá miễn phí", "zh": "提交免费询价", "en": "Request Free Quote"}, "가공업체 검색": {"vi": "Tìm nhà gia công", "zh": "搜索加工厂", "en": "Search Suppliers"}, "전체 업체 보기 →": {"vi": "Xem tất cả nhà cung cấp →", "zh": "查看全部供应商 →", "en": "View all suppliers →"}, "전체 설비 보기 →": {"vi": "Xem tất cả thiết bị →", "zh": "查看全部设备 →", "en": "View all equipment →"}, "견적 등록 →": {"vi": "Đăng yêu cầu →", "zh": "发布询价 →", "en": "Post RFQ →"}, "물류 요청 →": {"vi": "Yêu cầu logistics →", "zh": "物流询价 →", "en": "Request logistics →"}, "무료 입점 신청": {"vi": "Đăng ký đối tác miễn phí", "zh": "免费入驻", "en": "Join Free"},   "인쇄, 라미네이팅, 금박, 톰슨, 접착, 검수, 포장부터 물류와 중고설비까지. 복잡한 외주 거래를 하나의 플랫폼에서 관리합니다.": {"vi": "Quản lý in ấn, cán màng, ép kim, bế, dán, kiểm hàng, đóng gói, logistics và thiết bị cũ trên một nền tảng.", "zh": "从印刷、覆膜、烫金、模切、粘盒、检验、包装到物流与二手设备，在一个平台统一管理。", "en": "Manage printing, lamination, foil stamping, die cutting, gluing, inspection, packaging, logistics and used equipment on one platform."}, "등록 공급업체": {"vi": "Nhà cung cấp đăng ký", "zh": "注册供应商", "en": "Registered suppliers"}, "견적 응답 목표": {"vi": "Mục tiêu phản hồi", "zh": "报价响应目标", "en": "Quote response target"}, "전문 공정": {"vi": "Công đoạn chuyên môn", "zh": "专业工序", "en": "Specialized processes"}, "옵셋인쇄": {"vi": "In offset", "zh": "胶印", "en": "Offset Printing"}, "라미네이팅": {"vi": "Cán màng", "zh": "覆膜", "en": "Lamination"}, "금박/은박": {"vi": "Ép kim/ép bạc", "zh": "烫金/烫银", "en": "Foil Stamping"}, "톰슨/도무송": {"vi": "Bế khuôn", "zh": "模切", "en": "Die Cutting"}, "접착/제본": {"vi": "Dán/đóng cuốn", "zh": "粘合/装订", "en": "Gluing/Binding"}, "검수/포장": {"vi": "Kiểm hàng/đóng gói", "zh": "检验/包装", "en": "Inspection/Packing"}, "외주거래의 불확실성을 줄입니다": {"vi": "Giảm rủi ro trong giao dịch gia công", "zh": "降低外协交易的不确定性", "en": "Reduce outsourcing uncertainty"}, "가격뿐 아니라 생산능력, 납기, 설비, 물류까지 한 번에 비교합니다.": {"vi": "So sánh giá, năng lực sản xuất, tiến độ, thiết bị và logistics cùng lúc.", "zh": "一次比较价格、产能、交期、设备和物流。", "en": "Compare price, capacity, lead time, equipment and logistics at once."}, "한 번의 견적요청": {"vi": "Một yêu cầu báo giá", "zh": "一次询价", "en": "One RFQ"}, "여러 업체에 전화하거나 Zalo를 반복하지 않고 한 번에 RFQ를 배포합니다.": {"vi": "Không cần gọi nhiều nơi hay nhắn Zalo lặp lại; gửi RFQ một lần đến nhiều nhà cung cấp.", "zh": "无需反复打电话或发 Zalo，一次即可向多家供应商发送询价。", "en": "Send one RFQ to multiple suppliers without repeated calls or Zalo messages."}, "총비용 비교": {"vi": "So sánh tổng chi phí", "zh": "总成本比较", "en": "Total cost comparison"}, "가공비 + 물류비 + 부대비용을 함께 비교해 실제 납품비용을 판단합니다.": {"vi": "So sánh phí gia công, logistics và chi phí phụ để biết chi phí giao hàng thực tế.", "zh": "综合比较加工费、物流费和附加费用，判断实际到货成本。", "en": "Compare processing, logistics and ancillary costs to see the real delivered cost."}, "검증된 생산능력": {"vi": "Năng lực đã xác minh", "zh": "已验证产能", "en": "Verified capacity"}, "보유설비, 최대 작업폭, MOQ, 일 생산능력, 거래평점을 기반으로 비교합니다.": {"vi": "So sánh theo thiết bị, khổ tối đa, MOQ, công suất ngày và đánh giá giao dịch.", "zh": "基于设备、最大加工宽度、MOQ、日产能和交易评分进行比较。", "en": "Compare based on equipment, max width, MOQ, daily capacity and ratings."}, "공정 진행 추적": {"vi": "Theo dõi tiến độ", "zh": "工序进度追踪", "en": "Production tracking"}, "견적부터 생산, 공정간 이동, 검수, 납품까지 하나의 주문번호로 관리합니다.": {"vi": "Từ báo giá, sản xuất, chuyển công đoạn, kiểm hàng đến giao hàng đều theo một mã đơn.", "zh": "从报价、生产、工序间运输、检验到交付，都用一个订单号管理。", "en": "Manage quote, production, inter-process transport, inspection and delivery under one order."}, "추천 가공업체": {"vi": "Nhà gia công đề xuất", "zh": "推荐加工厂", "en": "Recommended Suppliers"}, "최근 견적요청": {"vi": "Yêu cầu báo giá gần đây", "zh": "最新询价", "en": "Recent RFQs"}, "공정 물류": {"vi": "Logistics công đoạn", "zh": "工序物流", "en": "Process Logistics"}, "추천 중고설비": {"vi": "Thiết bị cũ đề xuất", "zh": "推荐二手设备", "en": "Recommended Used Equipment"}, "좋은 설비와 기술이 있다면": {"vi": "Nếu bạn có thiết bị và kỹ thuật tốt", "zh": "如果您拥有优秀设备与技术", "en": "If you have great equipment and expertise"}, "OTQ에서 새로운 일감을 만나세요.": {"vi": "Hãy tìm đơn hàng mới trên OTQ.", "zh": "在 OTQ 获取新的订单。", "en": "Find new jobs on OTQ."}, "업체 페이지, 설비정보, 생산능력, 포트폴리오를 등록하고 실제 외주 요청에 견적을 제출할 수 있습니다.": {"vi": "Đăng hồ sơ công ty, thiết bị, năng lực và portfolio để báo giá cho các yêu cầu thực tế.", "zh": "登记公司页面、设备、产能和案例，并对真实外协需求提交报价。", "en": "Register your company, equipment, capacity and portfolio, then quote on real outsourcing requests."}, "신규 견적요청": {"vi": "RFQ mới", "zh": "新询价", "en": "New RFQs"}, "평균 견적 응답": {"vi": "Phản hồi báo giá TB", "zh": "平均报价响应", "en": "Avg. quote response"}, "월간 거래 예시": {"vi": "Giao dịch tháng (demo)", "zh": "月交易示例", "en": "Monthly GMV demo"}, "외주 견적 요청": {"vi": "Yêu cầu báo giá gia công", "zh": "外协询价", "en": "Outsourcing RFQ"}, "한 번의 요청으로 적합한 인쇄·후공정 업체의 견적을 비교하세요.": {"vi": "Chỉ với một yêu cầu, hãy so sánh báo giá từ các nhà in và gia công phù hợp.", "zh": "一次提交，即可比较合适的印刷与后加工供应商报价。", "en": "Compare quotes from suitable printing and finishing suppliers with one request."}, "기본 작업정보": {"vi": "Thông tin công việc", "zh": "基本作业信息", "en": "Job Information"}, "제품명": {"vi": "Tên sản phẩm", "zh": "产品名称", "en": "Product"}, "희망 납기": {"vi": "Ngày giao mong muốn", "zh": "期望交期", "en": "Required Date"}, "규격": {"vi": "Quy cách", "zh": "规格", "en": "Size"}, "수량": {"vi": "Số lượng", "zh": "数量", "en": "Quantity"}, "재질": {"vi": "Vật liệu", "zh": "材料", "en": "Material"}, "납품지역": {"vi": "Khu vực giao hàng", "zh": "交货地区", "en": "Delivery Area"}, "필요한 공정": {"vi": "Công đoạn cần thiết", "zh": "所需工序", "en": "Required Processes"}, "물류 포함 여부": {"vi": "Có bao gồm logistics", "zh": "是否包含物流", "en": "Include Logistics"}, "물류 포함 견적": {"vi": "Báo giá gồm logistics", "zh": "含物流报价", "en": "Quote incl. logistics"}, "가공비만 견적": {"vi": "Chỉ báo giá gia công", "zh": "仅加工费报价", "en": "Processing only"}, "상세 요청사항": {"vi": "Yêu cầu chi tiết", "zh": "详细要求", "en": "Detailed Requirements"}, "도면/샘플/작업지시서 첨부": {"vi": "Đính kèm bản vẽ/mẫu/chỉ thị", "zh": "上传图纸/样品/作业指示", "en": "Attach drawings/samples/work instructions"}, "검증된 가공업체 찾기": {"vi": "Tìm nhà gia công đã xác minh", "zh": "寻找已验证加工厂", "en": "Find Verified Suppliers"}, "지역과 공정, 설비, 생산능력으로 업체를 비교하세요.": {"vi": "So sánh nhà cung cấp theo khu vực, công đoạn, thiết bị và năng lực.", "zh": "按地区、工序、设备和产能比较供应商。", "en": "Compare suppliers by location, process, equipment and capacity."}, "필터": {"vi": "Bộ lọc", "zh": "筛选", "en": "Filters"}, "지역": {"vi": "Khu vực", "zh": "地区", "en": "Location"}, "공정": {"vi": "Công đoạn", "zh": "工序", "en": "Process"}, "최소수량": {"vi": "Số lượng tối thiểu", "zh": "最小数量", "en": "Minimum Quantity"}, "필터 적용": {"vi": "Áp dụng bộ lọc", "zh": "应用筛选", "en": "Apply Filters"}, "등록업체": {"vi": "Nhà cung cấp", "zh": "注册企业", "en": "Suppliers"}, "추천순": {"vi": "Đề xuất", "zh": "推荐排序", "en": "Recommended"}, "평점순": {"vi": "Theo đánh giá", "zh": "评分排序", "en": "By Rating"}, "응답빠른순": {"vi": "Phản hồi nhanh", "zh": "响应速度", "en": "Fastest Response"}, "견적 요청": {"vi": "Yêu cầu báo giá", "zh": "询价", "en": "Request Quote"}, "인쇄·후공정 중고설비": {"vi": "Thiết bị in & sau in đã qua sử dụng", "zh": "印刷及后加工二手设备", "en": "Used Printing & Finishing Equipment"}, "설비 가격뿐 아니라 해체, 운송, 설치, 기술자 비용까지 총비용으로 비교합니다.": {"vi": "So sánh cả giá máy, tháo dỡ, vận chuyển, lắp đặt và chi phí kỹ thuật viên.", "zh": "不仅比较设备价格，还包括拆卸、运输、安装和技术人员费用。", "en": "Compare machine price plus dismantling, transport, installation and technician costs."}, "전체 설비": {"vi": "Tất cả thiết bị", "zh": "全部设备", "en": "All Equipment"}, "검색": {"vi": "Tìm kiếm", "zh": "搜索", "en": "Search"}, "작동영상": {"vi": "Video vận hành", "zh": "运行视频", "en": "Running Video"}, "예상 도입 총비용": {"vi": "Tổng chi phí dự kiến", "zh": "预计导入总成本", "en": "Estimated Total Acquisition Cost"}, "이전·설치 견적": {"vi": "Báo giá di dời & lắp đặt", "zh": "搬迁安装报价", "en": "Relocation & Installation Quote"}, "공정 물류 견적": {"vi": "Báo giá logistics công đoạn", "zh": "工序物流报价", "en": "Process Logistics Quote"}, "원자재 픽업, 공정 간 이동, 완제품 납품, 설비 운송을 한 번에 요청하세요.": {"vi": "Yêu cầu lấy nguyên liệu, chuyển công đoạn, giao thành phẩm và vận chuyển thiết bị cùng lúc.", "zh": "一次申请原材料提货、工序间运输、成品配送和设备运输。", "en": "Request raw-material pickup, inter-process transport, finished-goods delivery and machine transport at once."}, "운송 구간": {"vi": "Tuyến vận chuyển", "zh": "运输区间", "en": "Route"}, "출발지": {"vi": "Điểm đi", "zh": "出发地", "en": "Origin"}, "도착지": {"vi": "Điểm đến", "zh": "目的地", "en": "Destination"}, "픽업 날짜": {"vi": "Ngày lấy hàng", "zh": "提货日期", "en": "Pickup Date"}, "희망 시간": {"vi": "Thời gian mong muốn", "zh": "期望时间", "en": "Preferred Time"}, "화물 정보": {"vi": "Thông tin hàng hóa", "zh": "货物信息", "en": "Cargo Information"}, "화물 종류": {"vi": "Loại hàng", "zh": "货物类型", "en": "Cargo Type"}, "예상 중량": {"vi": "Trọng lượng dự kiến", "zh": "预计重量", "en": "Estimated Weight"}, "차량": {"vi": "Loại xe", "zh": "车辆", "en": "Vehicle"}, "차량 형태": {"vi": "Kiểu xe", "zh": "车型", "en": "Vehicle Type"}, "부가 서비스": {"vi": "Dịch vụ bổ sung", "zh": "附加服务", "en": "Additional Services"}, "상하차 인력": {"vi": "Nhân công bốc xếp", "zh": "装卸人员", "en": "Loading Crew"}, "지게차": {"vi": "Xe nâng", "zh": "叉车", "en": "Forklift"}, "크레인": {"vi": "Cẩu", "zh": "吊车", "en": "Crane"}, "보험": {"vi": "Bảo hiểm", "zh": "保险", "en": "Insurance"}, "설비 해체": {"vi": "Tháo dỡ thiết bị", "zh": "设备拆卸", "en": "Machine Dismantling"}, "설치 기술자": {"vi": "Kỹ thuật viên lắp đặt", "zh": "安装技术员", "en": "Installation Technician"}, "물류 견적 받기": {"vi": "Nhận báo giá logistics", "zh": "获取物流报价", "en": "Get Logistics Quote"}, "OTQ 파트너 입점": {"vi": "Đăng ký đối tác OTQ", "zh": "OTQ 合作伙伴入驻", "en": "Join OTQ as Partner"}, "가공업체, 물류업체, 기술자, 설비 판매자가 새로운 거래를 만나는 곳.": {"vi": "Nơi nhà gia công, logistics, kỹ thuật viên và người bán thiết bị gặp khách hàng mới.", "zh": "加工厂、物流公司、技术人员和设备卖家获取新交易的平台。", "en": "A marketplace for processors, logistics providers, technicians and equipment sellers."}, "초기 파트너 프로모션": {"vi": "Ưu đãi đối tác sáng lập", "zh": "首批合作伙伴优惠", "en": "Founding Partner Promotion"}, "등록비 무료 · 6개월 이용료 무료 · 첫 10건 거래 수수료 0%": {"vi": "Miễn phí đăng ký · miễn phí 6 tháng · 0% phí cho 10 giao dịch đầu", "zh": "免注册费 · 6个月免费 · 前10笔交易0%手续费", "en": "Free registration · 6 months free · 0% fee on first 10 transactions"}, "업체/사업자명": {"vi": "Tên công ty", "zh": "公司/商户名称", "en": "Company Name"}, "담당자": {"vi": "Người phụ trách", "zh": "负责人", "en": "Contact Person"}, "사업유형": {"vi": "Loại hình kinh doanh", "zh": "业务类型", "en": "Business Type"}, "주요 설비 및 가능 공정": {"vi": "Thiết bị chính & công đoạn", "zh": "主要设备及可加工工序", "en": "Main Equipment & Processes"}, "안녕하세요, Vina Print님": {"vi": "Xin chào, Vina Print", "zh": "您好，Vina Print", "en": "Hello, Vina Print"}, "새 견적 요청": {"vi": "RFQ mới", "zh": "新询价", "en": "New RFQ"}, "진행중 작업": {"vi": "Công việc đang chạy", "zh": "进行中的作业", "en": "Jobs in Progress"}, "이번 달 거래액": {"vi": "Doanh số tháng này", "zh": "本月交易额", "en": "Monthly GMV"}, "평균 평점": {"vi": "Đánh giá trung bình", "zh": "平均评分", "en": "Average Rating"}, "작업 진행": {"vi": "Tiến độ công việc", "zh": "作业进度", "en": "Job Progress"}, "전체보기": {"vi": "Xem tất cả", "zh": "查看全部", "en": "View All"}, "생산 중": {"vi": "Đang sản xuất", "zh": "生产中", "en": "In Production"}, "원자재 입고": {"vi": "Đã nhận nguyên liệu", "zh": "原材料入库", "en": "Material Received"}, "견적 비교": {"vi": "So sánh báo giá", "zh": "报价比较", "en": "Compare Quotes"}, "가공비, 물류비, 납기, 평점까지 한 화면에서 비교합니다.": {"vi": "So sánh phí gia công, logistics, tiến độ và đánh giá trên một màn hình.", "zh": "在一个页面比较加工费、物流费、交期和评分。", "en": "Compare processing cost, logistics, lead time and ratings on one screen."}, "프로젝트": {"vi": "Dự án", "zh": "项目", "en": "Project"}, "가공비": {"vi": "Phí gia công", "zh": "加工费", "en": "Processing Cost"}, "물류비": {"vi": "Phí logistics", "zh": "物流费", "en": "Logistics Cost"}, "총액": {"vi": "Tổng", "zh": "总额", "en": "Total"}, "납기": {"vi": "Tiến độ", "zh": "交期", "en": "Lead Time"}, "평점": {"vi": "Đánh giá", "zh": "评分", "en": "Rating"}, "선택": {"vi": "Chọn", "zh": "选择", "en": "Select"}, "추천": {"vi": "Đề xuất", "zh": "推荐", "en": "Recommended"}, "OTQ 추천": {"vi": "OTQ đề xuất", "zh": "OTQ 推荐", "en": "OTQ Recommendation"}, "업체 소개": {"vi": "Giới thiệu công ty", "zh": "企业介绍", "en": "Company Profile"}, "주요 생산능력": {"vi": "Năng lực sản xuất", "zh": "主要产能", "en": "Production Capacity"}, "보유 설비": {"vi": "Thiết bị sở hữu", "zh": "设备清单", "en": "Equipment"}, "포트폴리오": {"vi": "Portfolio", "zh": "案例", "en": "Portfolio"}, "최근 리뷰": {"vi": "Đánh giá gần đây", "zh": "最新评价", "en": "Recent Reviews"}, "빠른 견적 요청": {"vi": "Yêu cầu báo giá nhanh", "zh": "快速询价", "en": "Quick RFQ"}, "이 업체에 견적 요청": {"vi": "Yêu cầu báo giá từ công ty này", "zh": "向该企业询价", "en": "Request Quote from Supplier"}, "저장": {"vi": "Lưu", "zh": "收藏", "en": "Save"}, "설비 상태": {"vi": "Tình trạng thiết bị", "zh": "设备状态", "en": "Machine Condition"}, "이전 서비스": {"vi": "Dịch vụ di dời", "zh": "搬迁服务", "en": "Relocation Service"}, "설비 판매가": {"vi": "Giá máy", "zh": "设备售价", "en": "Machine Price"}, "현재 생산 중": {"vi": "Đang vận hành sản xuất", "zh": "当前生产中", "en": "Currently Running"}, "현장 확인": {"vi": "Kiểm tra tại chỗ", "zh": "现场查看", "en": "Site Inspection"}, "예약 가능": {"vi": "Có thể đặt lịch", "zh": "可预约", "en": "Available"}, "OTQ 검수": {"vi": "Kiểm định OTQ", "zh": "OTQ 检验", "en": "OTQ Inspection"}, "신청 가능": {"vi": "Có thể đăng ký", "zh": "可申请", "en": "Available"}, "총 도입비용 견적 받기": {"vi": "Nhận báo giá tổng chi phí", "zh": "获取总导入成本报价", "en": "Get Total Acquisition Quote"}, "현장 방문 요청": {"vi": "Yêu cầu tham quan máy", "zh": "申请现场看机", "en": "Request Site Visit"}, "설비 가격": {"vi": "Giá thiết bị", "zh": "设备价格", "en": "Machine Price"}, "해체비": {"vi": "Phí tháo dỡ", "zh": "拆卸费", "en": "Dismantling"}, "상차/크레인": {"vi": "Bốc xếp/cẩu", "zh": "装车/吊车", "en": "Loading/Crane"}, "운송": {"vi": "Vận chuyển", "zh": "运输", "en": "Transport"}, "설치": {"vi": "Lắp đặt", "zh": "安装", "en": "Installation"}, "기술자/시운전": {"vi": "Kỹ thuật/chạy thử", "zh": "技术员/试运行", "en": "Technician/Commissioning"}, "예상 총액": {"vi": "Tổng dự kiến", "zh": "预计总额", "en": "Estimated Total"}, "해체": {"vi": "Tháo dỡ", "zh": "拆卸", "en": "Dismantle"}, "포장": {"vi": "Đóng gói", "zh": "包装", "en": "Pack"}, "시운전": {"vi": "Chạy thử", "zh": "试运行", "en": "Commission"}, "이전 패키지 견적": {"vi": "Báo giá gói di dời", "zh": "搬迁套餐报价", "en": "Relocation Package Quote"}, "OTQ 관리자": {"vi": "Quản trị OTQ", "zh": "OTQ 管理后台", "en": "OTQ Admin"}, "오늘 신규회원": {"vi": "Thành viên mới hôm nay", "zh": "今日新会员", "en": "New Members Today"}, "오늘 RFQ": {"vi": "RFQ hôm nay", "zh": "今日询价", "en": "RFQs Today"}, "진행 거래": {"vi": "Giao dịch đang chạy", "zh": "进行中交易", "en": "Active Transactions"}, "월 GMV": {"vi": "GMV tháng", "zh": "月GMV", "en": "Monthly GMV"}, "업체 승인대기": {"vi": "Chờ duyệt đối tác", "zh": "供应商待审核", "en": "Pending Supplier Approval"}, "운영 이슈": {"vi": "Vấn đề vận hành", "zh": "运营问题", "en": "Operational Issues"}, "견적 응답 지연": {"vi": "Phản hồi báo giá chậm", "zh": "报价响应延迟", "en": "Delayed Quote Response"}, "납기 임박": {"vi": "Sắp đến hạn", "zh": "交期临近", "en": "Deadline Approaching"}, "검토": {"vi": "Kiểm tra", "zh": "审核", "en": "Review"}, "확인": {"vi": "Kiểm tra", "zh": "查看", "en": "Check"}, "인쇄·후공정·물류·설비를 연결하는 베트남 B2B 제조 거래 플랫폼.": {"vi": "Nền tảng B2B Việt Nam kết nối in ấn, gia công sau in, logistics và thiết bị.", "zh": "连接印刷、后加工、物流与设备的越南B2B制造交易平台。", "en": "Vietnam B2B manufacturing marketplace connecting printing, finishing, logistics and equipment."}, "서비스": {"vi": "Dịch vụ", "zh": "服务", "en": "Services"}, "파트너": {"vi": "Đối tác", "zh": "合作伙伴", "en": "Partners"}, "업체 검색": {"vi": "Tìm nhà cung cấp", "zh": "供应商搜索", "en": "Supplier Search"}};

function normalizeText(s){ return (s || '').replace(/\s+/g,' ').trim(); }

function translateString(text, lang){
  if(lang === 'ko') return text;
  const key = normalizeText(text);
  const item = OTQ_I18N[key];
  if(!item) return text;
  return item[lang] || text;
}

function buildTranslationIndex(){
  const index = {};
  Object.entries(OTQ_I18N).forEach(([ko, obj])=>{
    index[normalizeText(ko)] = {ko, ...obj};
    ['vi','zh','en'].forEach(lang=>{
      if(obj[lang]) index[normalizeText(obj[lang])] = {ko, ...obj};
    });
  });
  return index;
}
const OTQ_TRANSLATION_INDEX = buildTranslationIndex();

function translatePage(lang){
  document.documentElement.lang = OTQ_LANGS[lang]?.html || 'ko';
  const label = document.getElementById('currentLangLabel');
  if(label) label.textContent = OTQ_LANGS[lang]?.label || '한국어';

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let n;
  while(n = walker.nextNode()){
    const p = n.parentElement;
    if(!p || ['SCRIPT','STYLE','NOSCRIPT'].includes(p.tagName)) continue;
    if(!normalizeText(n.nodeValue)) continue;
    nodes.push(n);
  }
  nodes.forEach(node=>{
    const raw = node.nodeValue;
    const trimmed = normalizeText(raw);
    const row = OTQ_TRANSLATION_INDEX[trimmed];
    if(!row) return;
    const target = lang === 'ko' ? row.ko : (row[lang] || row.ko);
    const leading = raw.match(/^\s*/)?.[0] || '';
    const trailing = raw.match(/\s*$/)?.[0] || '';
    node.nodeValue = leading + target + trailing;
  });

  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el=>{
    if(!el.dataset.koPlaceholder) el.dataset.koPlaceholder = el.getAttribute('placeholder') || '';
    const original = el.dataset.koPlaceholder;
    const row = OTQ_TRANSLATION_INDEX[normalizeText(original)];
    if(row) el.setAttribute('placeholder', lang === 'ko' ? row.ko : (row[lang] || row.ko));
  });

  localStorage.setItem('otq_language', lang);
}

function initLanguageSwitcher(){
  const switcher = document.querySelector('.language-switcher');
  if(!switcher) return;
  const current = switcher.querySelector('.lang-current');
  current?.addEventListener('click', (e)=>{
    e.stopPropagation();
    switcher.classList.toggle('open');
  });
  switcher.querySelectorAll('[data-lang]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const lang = btn.dataset.lang;
      translatePage(lang);
      switcher.classList.remove('open');
    });
  });
  document.addEventListener('click', ()=> switcher.classList.remove('open'));
  translatePage(localStorage.getItem('otq_language') || 'ko');
}


const toggle=document.querySelector('.mobile-toggle');
const nav=document.querySelector('.main-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}

function demoAlert(msg){alert(msg);}
function demoSubmit(e,msg){e.preventDefault(); alert(msg); return false;}

const params = new URLSearchParams(location.search);
if(location.pathname.endsWith('quote.html') && params.get('type')){
  const map={printing:'옵셋인쇄',lamination:'라미네이팅',foil:'금박/은박',diecut:'톰슨/도무송',binding:'제본/접착',packing:'검수/포장'};
  const target=map[params.get('type')];
  if(target){
    document.querySelectorAll('.check-grid label').forEach(label=>{
      if(label.textContent.trim().includes(target.split('/')[0])){
        const input=label.querySelector('input'); if(input) input.checked=true;
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
