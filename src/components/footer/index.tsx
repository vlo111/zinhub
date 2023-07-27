'use client';
import Button from '@/components/button';
import { useAuth } from '@/providers/auth';
import './footer.css';
import { FooterLayout } from '@/components/footer/layout';

export const Footer = () => {
  const { user } = useAuth();
  return (
    <FooterLayout>
      {user?.role === 'COMPANY' ? (
        <div className="flex gap-8 items-center">
          <Button value="Մուտք" />
          <Button value="Գրանցել ընկերություն" type="secondary" />
        </div>
      ) : (
        ''
      )}
    </FooterLayout>
  );
};
