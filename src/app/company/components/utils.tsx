import { PATHS } from '@/helpers/constants';
import React from 'react';
import { default as DataSvg } from './icons/data.svg';
import { default as ApplicationsSvg } from './icons/applications.svg';
import { default as AnnouncementSvg } from './icons/announcement.svg';

export const MenuItems = [
  {
    navigate: PATHS.COMPANY_PROFILE,
    label: 'Տվյալներ',
    icon: <DataSvg />,
  },
  {
    navigate: PATHS.COMPANY_POSTS,
    label: 'Հայտարարություն',
    icon: <ApplicationsSvg />,
  },
  {
    navigate: PATHS.ROOT,
    label: 'Դասավանդողներ',
    icon: <AnnouncementSvg />,
  },
];
