export function company() {
  const companyTranslate = {
    idx: '인덱스',
    companyName: '회사명',
    companyNumber: '사업자등록번호',
    companyAddress: '회사주소',
    companyType: '회사유형',
    workerIdx: '근로자'
  }
  const companyList = [
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
  return { companyList, addCompany, addWorker, findCompanyByWorker, companyTranslate }
}
