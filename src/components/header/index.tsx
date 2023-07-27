'use client';
import { HomeHeader } from './home';
import { useAuth } from '@/providers/auth';
import { AuthHeader } from '@/components/header/auth';

export const Header = () => (useAuth().isAuth ? <HomeHeader /> : <AuthHeader />);
