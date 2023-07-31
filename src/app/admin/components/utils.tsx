import { PATHS } from '@/helpers/constants';
import React from 'react';
import { default as UsersSvg } from './icons/users.svg';
import { default as ApplicationsSvg } from './icons/applications.svg';
import { default as RequestsSvg } from './icons/requests.svg';
import { default as SuccessfulStorySvg } from './icons/successful-story.svg';
import { default as StatisticsSvg } from './icons/statistics.svg';

export const AdminMenuItems = [
  {
    navigate: PATHS.ADMIN_USERS,
    label: 'Օգտվողներ',
    icon: <UsersSvg />,
  },
  {
    navigate: PATHS.ADMIN_ANNOUNCEMENTS,
    label: 'Հայտարարություններ',
    icon: <ApplicationsSvg />,
  },
  {
    navigate: PATHS.ADMIN_REQUESTS,
    label: 'Հայտեր',
    icon: <RequestsSvg />,
  },
  {
    navigate: PATHS.ADMIN_STORIES,
    label: 'Հաջողված պատմություն',
    icon: <SuccessfulStorySvg />,
  },
  {
    navigate: PATHS.ADMIN_STATISTICS,
    label: 'Վիճակագրություն',
    icon: <StatisticsSvg />,
  },
];
