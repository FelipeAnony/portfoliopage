import Footer from '../Footer';
import ResponsiveMenu from '../ResponsiveMenu';

import Styles from './styles.module.css';

function Template({ children }: { children: JSX.Element }) {
  return (
    <>
      <header className={Styles.header}>
        <ResponsiveMenu />
      </header>
      <main className={Styles.main}>{children}</main>
      <footer className={Styles.footer}>
        <Footer />
      </footer>
    </>
  );
}

export default Template;
