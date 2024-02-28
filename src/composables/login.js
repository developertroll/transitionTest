export function login() {
  const translateKey = {
    customer: '고객',
    admin: '관리자',
    idx: '인덱스',
    id: '아이디',
    name: '이름',
    email: '이메일',
    password: '비밀번호',
    phone: '전화번호'
  }
  const customer = [
    {
      idx: 0,
      id: 'user1',
      name: '홍길동',
      email: '',
      password: '1234',
      phone: '010-1234-5678'
    },
    {
      idx: 1,
      id: 'user2',
      name: '이번이',
      email: 'twotwo@twotwo.dummy',
      password: 'asdf1234!@#$',
      phone: '010-2134-5252'
    }
  ]
  const admin = [
    {
      idx: 0,
      id: 'admin',
      name: '김철수',
      password: '1234',
      grade: '관리자'
    },
    {
      idx: 1,
      id: 'admin2',
      name: '김영희',
      password: '1234',
      grade: '2관리자'
    }
  ]
  const customerLogin = (id, password) => {
    const result = customer.find((c) => c.id === id && c.password === password)
    return result ? result : false
  }
  const adminLogin = (id, password) => {
    const result = admin.find((a) => a.id === id && a.password === password)
    return result
  }
  const customerFindUser = (id) => {
    const result = customer.find((c) => c.id === id)
    return result
  }
  const findUser = (id, type) => {
    if (type === 'customer') {
      return customer.find((c) => c.id === id)
    } else {
      return admin.find((a) => a.id === id)
    }
  }
  const findUserByIdx = (idx, type) => {
    if (type === 'customer') {
      return customer.find((c) => c.idx === idx)
    } else {
      return admin.find((a) => a.idx === idx)
    }
  }
  const getAdminList = () => {
    return admin.map((a) => {
      return {
        value: a.idx,
        title: `${a.name}(${a.grade})`
      }
    })
  }

  return {
    customerLogin,
    adminLogin,
    customerFindUser,
    findUser,
    translateKey,
    findUserByIdx,
    getAdminList,
    customer,
    admin
  }
}
