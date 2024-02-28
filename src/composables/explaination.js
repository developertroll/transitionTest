export function explaination() {
  const tagRelatedTemplate = [
    {
      idx: 0,
      tag: 'request-delete',
      answerTemplate: '요청하신 삭제를 완료하였습니다. \n\n {직원} {계급} \n\n {날짜}',
      explainTemplate:
        '특정 데이터 삭제는 db에서 직접 삭제하는 것이 아니라 상태를 삭제로 변경하는 것. \n\n 이렇게 하지 않고 db에 직접 삭제해야 할 경우 {직원} {계급}에게 확인을 요청할것'
    },
    {
      idx: 1,
      tag: 'request-update',
      answerTemplate: '요청하신 수정을 완료하였습니다. \n\n {직원} {계급} \n\n {날짜}',
      explainTemplate:
        '특정 데이터 수정은 db에서 직접 수정해야 함. \n\n 관련 데이터를 수정할 때 로그를 확인하고 요청한 수정사항이 정확한지 확인할 것'
    },
    {
      idx: 2,
      tag: 'request-error',
      answerTemplate:
        '요청하신 에러를 수정하였습니다.\n\n 해결 방법: {해결방법 요약하기}  \n\n {직원} {계급} \n\n {날짜}',
      explainTemplate:
        '에러가 발생한 상황을 로그를 확인하고 정확하게 찾아 낸 후 시작할 것. \n\n 개발서버에서 수정 사항으로 테스트를 진행한 후 본 서버 리셋때 수정사항을 적용할 것 \n\n 정확히 아는 사항이 아니면 상급자에게 확인을 요청할 것'
    },
    {
      idx: 3,
      tag: 'request-improve',
      answerTemplate:
        '요청하신 개선을 완료하였습니다. \n\n 개선 사항: {개선 사항}\n\n {직원} {계급} \n\n {날짜}',
      explainTemplate:
        '개발 서버에서 해당 기능이 정상작동하는지 꼭 확인하고 로그를 남길것. \n\n 요청한 개선 사항이 정확히 이게 맞는지 확인할 것. \n\n 개선 사항이 정확히 이해가 안되면 상급자에게 확인을 요청할 것'
    }
  ]
  return {
    tagRelatedTemplate
  }
}
