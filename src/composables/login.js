export function login() {
  const translateKey = {
    customer: '고객',
    admin: '관리자',
    idx: '인덱스',
    id: '아이디',
    name: '이름',
    email: '이메일',
    password: '비밀번호',
    phone: '전화번호',
    grade: '등급'
  }
  const saveList = () => {
    localStorage.setItem('customer', JSON.stringify(customer))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  const customer = JSON.parse(localStorage.getItem('customer')) || [
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
  const admin = JSON.parse(localStorage.getItem('admin')) || [
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
      return customer.find((c) => idx !== undefined && c.idx === idx)
    } else {
      return admin.find((a) => idx !== undefined && a.idx === idx)
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
  const getWorkerArray = () => {
    return customer.map((c) => {
      return {
        value: c.idx,
        title: c.name
      }
    })
  }
  const translateWorkerArray = (workerArray) => {
    if (workerArray === undefined) return []
    return workerArray.map((w) => {
      return {
        value: w,
        title: findUserByIdx(w, 'customer') ? findUserByIdx(w, 'customer').name : ''
      }
    })
  }
  const updateUser = (user, type) => {
    if (type === 'customer') {
      const idx = customer.findIndex((c) => c.idx === user.idx)
      customer[idx] = user
    } else {
      const idx = admin.findIndex((a) => a.idx === user.idx)
      admin[idx] = user
    }
    saveList()
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
    admin,
    getWorkerArray,
    translateWorkerArray,
    updateUser
  }
}
