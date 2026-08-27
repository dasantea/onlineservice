# OTQ V7 Final Demo

V7은 실제 서비스용 백엔드 설계로 넘어가기 전 최종 프론트엔드 데모 정리본입니다.

## 최종 정리
- 전체 HTML 페이지: 17개
- 메인 + 견적 + 공급업체 + 업체상세 + 중고설비 + 설비상세 + 물류 + 입점 + 대시보드 + RFQ + 견적비교 + 거래상태 + 관리자 승인 전체 점검
- 한국어 / 베트남어 / 중국어 / 영어 전환
- 선택 언어는 localStorage로 페이지 이동 후 유지
- 모든 페이지의 언어 버튼: 흰색
- 실제 SVG 국기 이미지:
  - 한국 / 베트남 / 중국 / 미국
- 지구본 및 KR/VN/CN/US 문자 약어 사용 안 함

## 언어별 폰트
- 한국어: 기존 UI 폰트
- 베트남어: Times New Roman
- 중국어: SimSun (宋体)
- 영어: Times New Roman

## 전문용어 통일
- 후공정 → Gia công sau in / 印后加工 / Print Finishing
- 금박 → Ép kim / 烫金 / Foil Stamping
- 톰슨·도무송 → Bế khuôn / 模切 / Die Cutting
- 접착·제함 → Dán hộp / 糊盒 / Folder Gluing
- UV 코팅 → Phủ UV / UV上光 / UV Coating
- 검수 → Kiểm hàng / 质检 / Quality Inspection

영문 고정 섹션 라벨(LIVE MARKET, OPEN RFQ 등)도 선택 언어에 따라 현지화됩니다.

## 폰트 크기
사용자 요청에 따라 작은 텍스트 계층만 정확히 1px 상향했습니다.
- 기존 9px → 10px
- 기존 10px → 11px
- 큰 본문/제목은 그대로 유지
현재 CSS 최소 선언 폰트: 10px

## 자동 검사
- 정적 한국어 UI 문자열 수: 419
- 베트남어 전환 후 남은 한국어: 0
- 중국어 전환 후 남은 한국어: 0
- 영어 전환 후 남은 한국어: 0
- 구조/언어버튼 QA 이슈: 0

## GitHub 업로드
1. ZIP 압축 해제
2. 기존 `onlineservice` Repository → Add file → Upload files
3. HTML 파일 전체와 `assets` 폴더 전체 업로드
4. `assets/flags` 폴더까지 반드시 포함
5. Commit changes
6. 캐시 버전은 `v=70`

이 버전이 실제 브라우저 검수에서 문제없으면 다음 단계는 실제 서비스용 인증, DB, 서버 API, 파일 저장, RFQ/견적/거래/관리자 권한 구조 설계입니다.
