import { default as Logo } from '@/components/icons/logo.svg';
import './footer.css'

export const Footer = () => {

  return (
    <footer className="flex justify-between px-20 py-4 xs:flex xs:flex-col xs:px-0 xs:py-0 xs:items-center items-center bg-davy-gray">
      <Logo />
      <div className="flex gap-8 items-center">
        <button className="btn btn--secondary">Մուտք</button>
        <button data-te-ripple-color="light" className="btn btn--primary">
          Գրանցել ընկերություն
        </button>
      </div>
      <div className="content">
        <h4>System admin page</h4>
        <h4>Lorem ipsum dolor</h4>
        <h4>Lorem ipsum</h4>
      </div>
      <div className="content">
        <h4>System admin page</h4>
        <h4>Lorem ipsum dolor</h4>
        <h4>Lorem ipsum</h4>
        <h4>Lorem ipsum dolor sit</h4>
      </div>
    </footer>
  );
};
