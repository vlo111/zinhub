'use client';
import { useAuth } from '@/providers/auth';

export default () => {
  const { logout } = useAuth();

  return (
    <main className="flex flex-col gap-40">
      <h1 className="text-center">Responsive buttons</h1>

      <ul className="flex gap-10 w-1/2 justify-center mx-auto">
        <li>
          <button type="button" data-te-ripple-color="light" className="btn btn--primary">
            Մուտք գործել 1
          </button>
        </li>
        <li>
          <button className="btn btn--secondary">Մուտք գործել 2</button>
        </li>
        <li>
          <button className="btn btn--footer" onClick={logout}>
            Log Out
          </button>
        </li>
      </ul>
    </main>
  );
};
