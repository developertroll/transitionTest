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

```
2024-02-19
로그인, 태그, 문의 관련 오브젝트 구성. 로그인 레이아웃 작업 완료. 이제 snackbar 구현을 통해 유사 alert를 띄우는 방법을 찾고, 로그인은 현재 오브젝트에 구현되어 있는 것을 활용. store에 isLoggedIn 을 이용해서 로그인 여부를 확인. commonAlert를 모든 장소에서 type, messageType 2개를 전달해서 사용할 수 있게 구현할 예정.
```

```
2024-02-20
commonAlert 사용 대신 플러그인을 하나 찾아 깔아 해결. 다만 플러그인을 편하게 사용하기 위해 전체에 import될 필요가 있는데, 이거 해결법은 아직 못찾았고 composable을 통해서 해결해둔 상태임. pinia를 사용해서 persist store가 구성하고 로그인 기능을 완성했음. 이제 크게 본격적으로 문의 기능과 관리자 기능을 구현할 예정. 고객 로그인만 완성되어 있지만 관리자 로그인 파트는 고객 로그인을 가져와 특정 함수 하나만 바꾸면 해결임.
현재 불필요하게 존재하는 component: commonAlert, sonnerTest, alertTest, logoutTest(로그아웃 기능을 위해 임시로 제작)
```

```
2024-02-21
중요 발견 사항: v-img가 edge 사용시 특정 이미지 못불러오는 현상 발견함. 이 문제때문에 많은 시간을 허비함. 현재는 img 써서 해결
메인, 소개페이지 구현 및 메뉴 권한 설정 완료. 다만 메인페이지에 회사 이름까지 제공해야 하는데 현재 코드가 꼬여서 어느정도 수정 필요함.
프로필 페이지에는 해당 유저와 회사 정보가 나눠져서 보여지고, 수정 요청 페이지를 통해 페이지 관리자에게 수정 요청을 보내게 할 예정.
고객 페이지는 프로필 페이지와 문의 페이지 2개 구현하면 됨.
관리자 페이지는 프로필 페이지와 수정(여기는 거의 비슷하지만 요청이 아니라 직접 수정됨), 문의 관련 페이지들, 자료실 구현하면 됨.
```

```
2024-02-22
변경 사항: profile을 1개의 페이지로 통합함(profileView.vue) => 사유: 수정 관련 페이지만 따로 두는 것이 편하고 어드민과 고객이 구별될 필요가 없음
프로필 수정 기능 및 페이지 구현 완료. 정상적으로 문의 생성되는거 확인. 메인 화면부터 있었던 pinia getter 관련 코드 수정. 내일부터 문의 페이지 제작 시작 예정. 기본 문의 페이지는 v-data-table을 통해 구현, 문의 생성 페이지는 v-form을 통해 구현(requestEdit 참조), 답변이 온 문의들은 따로 tab 처리를 해서 구별해서 보여주고, 답변 사항을 보고 재문의(수정요청), 완료(해당 문의를 완료로 처리)를 할 수 있도록 구현.
이 경우 문의 내역은 완료 처리된 문의들을 보여주는 v-data-table이 될 예정.
해당 기능이 완료되면 고객 관련 페이지는 완성되고, 본격적인 관리자 페이지 제작이 들어갈 예정.
```

```
2024-02-23
올린 문의들을 보여주는 페이지 제작중 + 현재 dialog를 toast처럼 일정 함수에 일정 값을 보내면 알아서 dialog 창을 만들어낼 수 있게 구현할 방법을 찾는중. 이 방법이 정상적으로 안착되면 모든 페이지에서 dialog를 간단한 방법으로 띄울 수 있게 됨.

```

```

2024-02-26
dialog 문제를 해결하였음. 크게 2가지 문제였는데 하나는 dialog를 outlay 바깥 클릭으로 나갔을 때 closeDialog()가 실행 안되기 때문에 state 변환이 일어나지 않아 렌더링이 일어나지 않고, 따라서 dialog가 안뜨는 거였는데 dialog 컴포넌트에 직접 클릭 문제를 대입하여 해결. 2번째 문제는 비동기 컴포넌트가 작동하지 않는 것이었는데 코드를 다시 확인해본 결과 defineAsyncComponent가 없어서 컴포넌트를 불러오는게 아니라 이름만 불러오고 있는 상태였기 때문에 발생하였음. 다만 현재는 땜빵으로 해당 컴포넌트를 직접 불러오고 있지만, 장기적으로는 이 컴포넌트 경로 불러오는 방법을 수정해야 함.
dialog수정 이후 문의 제작 페이지를 완성하고 정상적으로 생성되는것도 확인함.
detailContact 페이지에서 html 문법 (줄바꿈같은거) 적용 안되는 문제 해결.
고객이 다룰 수 있는 모든 페이지는 작성을 완료함. 이제 관리자의 시점에서 접근했을 때 접근 가능한 메뉴들을 수정하면 됨.
관리자 로그인으로 들어갔을때는 크게 2가지 변화가 발생하는데 고객 로그인으로 접근 불가능한 관리자 메뉴가 발생하고, 문의 답변 기능 및 태그 수정, 내부 데이터 수정 기능이 추가될 것임. 대신 문의 자체 생성이 안됨(고객이 문의 만드는 방식으로 문의 생성 불가능).
vuetify 자체문제로 stepper에서 v-slot을 item.1, item.2 식으로 사용하고 있어서 매우매우매우 보기 불편하고 eslint 에러 발생중.

```

```

2024-02-27
관리자 페이지 제작 시작. 현재 답변 기능이 간이로 완성되어있고(현재 여기로 가는 방법을 재구성중), 담당자 지정 관련 코드 작성함.
담당자 지정은 잘 되는데 dialog 관련해서 dialog를 끌때 문제가 발생중. 그리고 담당자 변경에 담당할 컴포넌트 만들고 contactTable에 changeAllocate spec 전달하면 됨.
답변 창도 마찬가지로 dialog로 띄우게 할 예정

```

```

2024-02-28
관리자 문의 작성 및 재문의/재답변, 완료 기능 완성. dialog끌때 문제는 {object}.value 상황이 일어나지 않게 if({object}) 식으로 처리하니 에러 안남.
일반 답변은 답변 작성 메뉴로, 재답변은 문의 메뉴에서 작성할 수 있게 만듬. 현재 사용자 정보 수정 기능을 만들고 있고, 자료실 만든 후(자료실은 관리자들만 보는 게시판이기 때문에 어렵지 않을것 같음) 관리자 메인페이지 만들고 로그아웃 버튼 적당히 만들면 됨.
가능하면 내일까지 최대한 완성시키는게 목표.
태그 검색 기능을 만들고 싶지만 나머지 기능이 제 시간에 완성되지 못하면 구현하지 못할 가능성 있음. 지금 구현해보고 싶었던 기능 대부분이 태그 검색과 관련된 기능으로 구현 가능해보임.
contact state에 update, created 날짜 key를 추가하면 날짜 관련은 쉽게 체크할 수 있음.

```

```
2024-02-29
tag 검색 기능은 구현할 시간이 없었음. 차후에 시간이 나면 구현할 수 있을 듯.
defineAsyncComponent 기능이 특정 event(row클릭과 버튼클릭이 다른 component를 불러와야 한다고 지정되어 있음에도 불구하고 같은 컴포넌트 불러옴) 대상으로 문제를 일으키는것 확인. 현재로썬 딱히 해결 방법이 생각나지 않아 해당 기능을 무력화했음.
그 외에 모든 기능은 구현 완료되었음. 관리자 메인 화면, tag검색 기능 제외 모든 기능 완성. 일단 aws amplify를 통해 배포하고, 차후 react 및 다른것 공부하면서 시간이 남을때 남은 기능 구현 예정.
```
