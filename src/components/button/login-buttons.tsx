import Link from 'next/link';

export const LoginButtons = () => {
  return (
    <div className="flex gap-8 items-center">
      <Link href="/auth/sign-in" className="btn btn--primary">
        Մուտք
      </Link>
      <Link href="/auth/sign-up" className="btn btn--secondary">
        Գրանցել ընկերություն
      </Link>
    </div>
  );
};
