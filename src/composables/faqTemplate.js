export function faqTemplate() {
  const templateList = [
    {
      idx: 0,
      id: 'request-delete',
      icon: 'fas fa-trash-can',
      title: '삭제 요청',
      content: '특정 데이터/게시물/계정을 삭제하고 싶어요'
    },
    {
      idx: 1,
      id: 'request-update',
      icon: 'fas fa-edit',
      title: '수정 요청',
      content: '특정 데이터/게시물/계정을 수정하고 싶어요'
    },
    {
      idx: 2,
      id: 'request-error',
      icon: 'fas fa-exclamation-triangle',
      title: '에러 발생',
      content: '특정 기능을 사용하려고 하는데 에러가 발생했어요'
    },
    {
      idx: 3,
      id: 'request-improvement',
      icon: 'fas fa-wrench',
      title: '개선 요청',
      content: '특정 기능을 개선하고 싶어요'
    },
    {
      idx: 4,
      id: 'request-manual',
      icon: 'fas fa-book',
      title: '직접 작성',
      content: '직접 작성하기'
    }
  ]

  const formTemplate = [
    {
      idx: 0,
      id: 'request-delete',
      title: '삭제 요청',
      content: '사이트에서 삭제를 요청합니다',
      tag: ['삭제', '고객사']
    },
    {
      idx: 1,
      id: 'request-update',
      title: '수정 요청',
      content: '사이트에서 수정을 요청합니다',
      tag: ['수정', '고객사']
    },
    {
      idx: 2,
      id: 'request-error',
      title: '에러 발생',
      content: '사이트에서 에러가 발생했습니다',
      tag: ['에러', '고객사']
    },
    {
      idx: 3,
      id: 'request-improvement',
      title: '개선 요청',
      content: '사이트 개선사항을 요청합니다',
      tag: ['개선', '고객사']
    },
    {
      idx: 4,
      id: 'request-manual',
      title: '직접 작성',
      content: '직접 작성해주세요',
      tag: ['고객사']
    }
  ]
  return { templateList, formTemplate }
}
