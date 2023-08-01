export const PATHS = {
  ROOT: '/',
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',
  COMPANY_PROFILE: '/company/profile',
  COMPANY_POSTS: '/company/posts',
  COMPANY_PROFILE_UPDATE: '/company/profile/update',
  ADMIN_USERS: '/admin/users',
  ADMIN_ANNOUNCEMENTS: '/admin/announcements',
  ADMIN_REQUESTS: '/admin/requests',
  ADMIN_STORIES: '/admin/stories',
  ADMIN_STATISTICS: '/admin/statistics',
  POST_CREATE: '/company/posts/course/create',
};

export const navigationItems = [
  { label: 'Ուսուցում', href: '/' },
  { label: 'Աշխատանք', href: '/work' },
  { label: 'Ընկերություններ', href: '/company/create' },
];
export const navigationItemsPosts = [
  { label: 'Բոլորը', href: '/company/posts' },
  { label: 'Ուսուցում', href: '/company/posts/course' },
  { label: 'Աշխատանք', href: '/company/posts/work' },
  { label: 'Այլ', href: '/company/posts/event' },
];

export const AUTH_KEYS = {
  USER: 'zinhub-user',
  TOKEN: 'zinhub-token',
};

export const regions = [
  {
    value: '2e952f1e-b0dc-4fde-b00f-cee79b944f3d',
    label: 'Երևան',
  },
  {
    value: '4fd0a9be-946c-4add-a931-9133651b2b72',
    label: 'Արագածոտն',
  },
  {
    value: '2c9cee1d-8e40-4aea-b740-163ac97b0230',
    label: 'Արարատ',
  },
  {
    value: '3913983e-c1a8-4834-9eab-84947699f0f2',
    label: 'Արմավիր',
  },
  {
    value: '7e038a90-680b-478b-921b-67513eee62fd',
    label: 'Գեղարքունիք',
  },
  {
    value: '7bb48d5d-ba08-491f-8664-a6148e9af9c4',
    label: 'Լոռի',
  },
  {
    value: 'fd4a3c1c-849a-4d51-8738-64ba214d006f',
    label: 'Կոտայք',
  },
  {
    value: '95623236-4c42-4489-b086-cd1e5f131d0b',
    label: 'Շիրակ',
  },
  {
    value: 'ef58b50e-d0fd-49c4-9dbf-f2326a3d66da',
    label: 'Սյունիք',
  },
  {
    value: 'c0c6cc4d-327d-4d43-8b58-c446e3e1f2ce',
    label: 'Վայոց ձոր',
  },
  {
    value: '8e69a18d-309e-43f9-a6a4-77698124f397',
    label: 'Տավուշ',
  },
];

export const DefaultCompanyImageUrl = 'https://apizinhub.analysed.ai/images/avatars/company-default.png';
