# OTQ V4 Functional Demo

기존 디자인 데모 V3.4를 기반으로 실제 플랫폼 기능 흐름을 추가했습니다.

## 추가된 기능 데모
1. 회원가입/로그인 + 고객사/공급업체 역할 구분 (`account.html`)
2. 실제 견적요청 등록 (`rfq-create.html`)
3. 견적요청 관리 (`rfq-management.html`)
4. 공급업체 견적 제출 (`supplier-quote.html`)
5. 견적 비교 및 업체 선택 (`quote-compare.html`)
6. 거래상태 관리 (`transaction.html`)
7. 관리자 공급업체 승인 (`admin-approval.html`)

## 중요
현재 버전은 GitHub Pages에서 테스트 가능한 프론트엔드 기능 데모입니다.
입력한 RFQ/견적 일부는 브라우저 localStorage에 저장됩니다.
실제 회원 DB, 서버 로그인, 파일 저장, 결제, 채팅, 알림, 권한보안은 백엔드 연결 단계에서 구현해야 합니다.

## GitHub
압축을 풀고 전체 파일과 assets 폴더를 기존 onlineservice Repository에 업로드 후 Commit changes 하세요.
