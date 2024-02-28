export function useMenu() {
  const menuItems = [
    {
      icon: 'fas fa-house',
      title: '메인',
      to: '/',
      permission: 'all'
    },
    {
      icon: 'fas fa-circle-info',
      title: '상세 정보',
      to: '/about',
      permission: 'all'
    },
    {
      icon: 'fas fa-user-gear',
      title: '프로필',
      to: '/profile',
      permission: 'customer'
    },
    {
      icon: 'fas fa-clipboard-list',
      title: '문의',
      to: '/contact',
      permission: 'all'
    },
    {
      icon: 'fas fa-user-cog',
      title: '문의 내역',
      to: '/contact-history',
      permission: 'customer'
    },
    {
      icon: 'fas fa-user-cog',
      title: '담당자 배정',
      to: '/contact-admin',
      permission: 'admin'
    },
    {
      icon: 'fas fa-address-book',
      title: '답변 작성',
      to: '/answer',
      permission: 'admin'
    },
    {
      icon: 'fas fa-user-gear',
      title: '사용자 관리',
      to: '/management',
      permission: 'admin'
    },
    {
      icon: 'fas fa-table',
      title: '자료',
      to: '/data',
      permission: 'admin'
    }
  ]

  function filterMenuItems(userType) {
    return menuItems.filter((item) => item.permission === userType || item.permission === 'all')
  }
  return { menuItems, filterMenuItems }
}
