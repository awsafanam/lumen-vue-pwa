
export default [
  { header: 'Prostuti' },
  {
    title: 'Dashboard',
    group: 'home',
    icon: 'dashboard',
    name: 'home'
  },
  {
    title: 'Dropdown',
    group: 'dropdown',
    name: 'dashboard',
    icon: 'library_books',
    items: [
      { 
        icon: 'library_books',
        name: 'plus', 
        title: 'Dropdown 1', 
        component: 'home' 
      },
      { 
        icon: 'library_books',
        name: 'list', 
        title: 'Dropdown 2', 
        component: 'home' 
      }
    ]
  },
];