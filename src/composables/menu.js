export function useMenu() {
  const menuItems = [
    {
      icon: 'fas fa-house',
      title: 'Home',
      to: '/'
    },
    {
      icon: 'fas fa-circle-info',
      title: 'About',
      to: '/about'
    },
    {
      icon: 'fas fa-user-gear',
      title: 'Profile',
      to: '/profile'
    }
  ]
  return { menuItems }
}
