import { login } from './login.js'

export function company() {
  const saveCompanyList = () => {
    localStorage.setItem('companyList', JSON.stringify(companyList))
  }
  const loadCompanyList = () => {
    const list = localStorage.getItem('companyList')
    if (list) {
      return JSON.parse(list)
    }
  }
  const companyTranslate = {
    idx: '인덱스',
    companyName: '회사명',
    companyNumber: '사업자등록번호',
    companyAddress: '회사주소',
    companyType: '회사유형',
    workerIdx: '근로자'
  }
  const companyList = loadCompanyList() || [
    {
      idx: 0,
      companyName: '홍길동 주식회사',
      companyNumber: '123-45-67890',
      companyAddress: '홍길동 주식회사 주소',
      companyType: '개인사업자',
      workerIdx: [0]
    }
  ]
  const addCompany = (company) => {
    companyList.push(company)
  }
  const addWorker = (idx, worker) => {
    companyList[idx].workerIdx.push(worker)
  }
  const findCompanyByWorker = (workerIdx) => {
    return companyList.find((c) => c.workerIdx.includes(workerIdx))
  }
  const getCompanyList = () => {
    // workerIdx를 이름으로 바꾸고 reduce해서 리턴
    return companyList.map((c) => {
      c.workerIdx = c.workerIdx.map((w) => login().findUserByIdx(w, 'customer').name)
      return c
    })
  }
  const updateCompany = (company) => {
    const idx = companyList.findIndex((c) => c.idx === company.idx)
    companyList[idx] = company
    saveCompanyList()
  }

  return {
    companyList,
    addCompany,
    addWorker,
    findCompanyByWorker,
    companyTranslate,
    getCompanyList,
    updateCompany
  }
}
