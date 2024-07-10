# 🚨 Catholic-Alarm 🚨
Announcement Notification Service   
학교 공지사항 알람 서비스

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Foms01%2FCatholic-Alarm&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

---

### ✅ 개요
* 프로젝트 이름 : Catholic-Alarm(CA)   
* 프로젝트 기간 : 2024.03.07 ~ 2024.03.25   
* 프로젝트 인원 : 1인   

---

### ✅ 기능 요약
학교 공지사항 업데이트 시 등록된 브라우저로 push 알림을 전송합니다.   
네 가지 공지(일반, 학사, 장학, 취창업) 중 원하는 알림을 선택하여 받을 수 있습니다.   

---

### ✅ 사용 기술
* Server : Node.js
* Front : ejs, Bootstrap
* DataBase : Mysql
* Crawling : JavaScript (cheerio)   
* Push Alarm : Firebase Cloud Messaging (FCM)
* Login : Kakao Login API

---

### ✅ 진행 과정

* [2024.03.07] 공지사항 크롤링 구현   
* [2024.03.08] FCM 연결. 특정 토큰으로 푸시알림 전송 구현   
* [2024.03.09] DB 설계 및 연동. 카카오 로그인, 사용자 권한 확인 구현   
* [2024.03.10] 중간 리팩토링 진행, 새글 감지 시 저장된 토큰에 푸시알림 전송 구현   
* [2024.03.13] 푸시 알림에 공지사항 하이퍼링크 구현   
* [2024.03.15] 도메인 구매, https 연결   
* [2024.03.19] 새 글 감지 및 푸시알림 전송 테스트 완료   
* [2024.03.22] 감지한 새 글을 json파일에 저장, main 화면에 출력   
* [2024.03.26] 배포   
* [2024.06.20] 배포 중단   


---

### ✅ ERD
<img src="https://github.com/oms01/Catholic-Alarm/assets/86279729/561f7554-8997-4adb-892c-1f74bdaa49f0"  width="600" height="400"/>


---

### ✅ 화면 구성
|로그인 화면|메인 화면|설정 화면 |
|------|---|---|
|<img src="https://github.com/oms01/Catholic-Alarm/assets/86279729/bf45b2d6-f892-4fc4-80d3-d4fe9c1f7aba"  width="300" height="300"/>|<img src="https://github.com/oms01/Catholic-Alarm/assets/86279729/5146de29-01b1-463e-92ca-40f307d4dc14"  width="300" height="300"/>|<img src="https://github.com/oms01/Catholic-Alarm/assets/86279729/d9495ea4-26e5-40ca-afcb-726a8f038a8f"  width="300" height="300"/>|


---
