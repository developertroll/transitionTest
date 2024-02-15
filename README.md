### 구상

```
관리자/고객으로 나누어진 고객관리 사이트.
고객은 관리자에게 문의를 넣고, 현재 고객의 상태 및 문의내역을 확인할 수 있다. 또한, 고객의 정보 수정을 입력하여 관리자에게 변경을 요청할 수 있다.
관리자는 각 고객들의 문의를 태그로 구별하여 확인할 수 있으며, 고객 정보를 저장하고 수정할 수 있다.
관리자는 문의에 대한 답변이 완료될때 어떻게 처리했는지 입력할 수 있고, 후에 관리자들은 이를 확인하고 참고할 수 있다.
각 문의들은 완료 여부 태그와 어떤 분야, 어떤 처리과정을 필요로 했는지에 대한 태그로 구성된다.
관리자 아이디로 로그인 할 시 관리자 전용 메뉴가 나타난다.
고객 메인 화면에는 현재 처리되지 않은 문의 내역과 문의 남기기 버튼이 보여짐.
관리자 메인 화면에는 처리되지 않은 내역들이 주 단위로 구별되어 보여짐.

아직 구현 가능할 수 있을지 모르는 기능들
- 문의가 처리되는 과정에서 메일이나 문자 등으로 알림 보내기
- 문의가 들어왔을때 관리자가 해당 문의와 유사한 문의를 검색해서 참고하기 쉽게 하기
- 답변과 처리과정을 입력할 때 일정 템플릿이나 양식을 통해서 입력을 편하게 만들기(form을 받아서 다르게 처리하게 하기)
- 관리자가 문의를 처리하는데 걸리는 시간을 측정하여 통계를 내어보기
- 문의에 대해 태그를 자동으로 판별해서 생성하게 하기
```

### 개발일지

```
2024-02-15
기본 베이스 및 인터페이스 구성, transition 구현.
내일 할 것들: 태그와 문의, 로그인 관련 오브젝트 구성, 관리자 전용 메뉴 구성. 데이터베이스는 만약 가능하면 MongoDB를 사용, 아니면 JSON 파일과 연동하여 구글 클라우드에 JSON 파일로 저장하는 방법으로 생각중.

```
