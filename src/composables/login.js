export function login() {
  const customer = [
    {
      idx: 1,
      id: 'user1',
      name: '홍길동',
      email: '',
      password: '1234',
      phone: '010-1234-5678'
    }
  ]
  const admin = [
    {
      idx: 1,
      id: 'admin',
      name: '관리자',
      password: '1234'
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
  return { customerLogin, adminLogin }
}
