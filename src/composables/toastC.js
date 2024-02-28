import { toast } from 'vuetify-sonner'

export function useToast() {
  const template = {
    error: {
      login: '아이디 또는 비밀번호가 일치하지 않습니다',
      database: '데이터베이스 오류가 발생했습니다',
      server: '서버 오류가 발생했습니다',
      board: '필수 입력값을 입력해주세요',
      alreadyLogin: '이미 로그인되어 있습니다',
      failRoute: '잘못된 접근입니다'
    },
    success: {
      login: '로그인에 성공했습니다',
      request: '문의가 등록되었습니다.',
      allocate: '담당자가 배정되었습니다.',
      answer: '답변이 등록되었습니다.',
      contactEnd: '문의가 성공적으로 조치되었습니다.',
      reContact: '재문의가 등록되었습니다.',
      reContactAnswer: '재문의 답변이 등록되었습니다.',
      reContactEnd: '재문의가 성공적으로 조치되었습니다.'
    },
    info: {
      requestEdit: '수정 문의 등록 준비를 시작합니다.'
    }
  }
  const translate = {
    error: '에러',
    success: '성공'
  }
  const sendToast = (type, messageType) => {
    const message = template[type][messageType]
    toast(translate[type], {
      cardProps: {
        color: type
      },
      prependIcon: `$${type}`,
      description: message
    })
  }
  return { sendToast }
}
