import { profile } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-name">
          {profile.name} <span className="text-gradient">— Dev Web</span>
        </p>
        <p>
          © {year} {profile.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
