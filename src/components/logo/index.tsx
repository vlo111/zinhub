import { default as Zinhub } from '@/components/icons/logo.svg';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/helpers/constants';

type Props = {
  margin?: string;
};

export const Logo = ({ margin }: Props) => {
  const router = useRouter();

  return (
    <Zinhub style={{ cursor: 'pointer', ...(margin ? { margin } : {}) }} onClick={() => router.push(PATHS.ROOT)} />
  );
};
