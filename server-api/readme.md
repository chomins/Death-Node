# Death-Node

[![django version](https://img.shields.io/badge/Node.js-14.0.26-blue)](https://www.djangoproject.com/) [![license](https://img.shields.io/badge/license-MIT-red)](https://github.com/wldusdhso/likelion_ideaton2/blob/master/LICENSE)


### ! How to run server

```shell
npm install		#install dependencies
npm start # start server
```



### 기능

- 계정

  - 회원가입 / 로그인
    - 이용자
    - 관리자
  - 마이페이지

- 유언장

  > 유언장 공개 시 공개범위 설정 가능
  >
  > (전부 공개, 친구/가족 공개,  특정인원 공개, 미공개)

  - 등록
  - 수정
  - 삭제
  - 전송

- 죽음 인증

  - 사망증명서 업로드
  - 사망증명서 삭제
  - (권한)

---

### Database

- RDBMS
  - MySQL -> **sequelize**
- 