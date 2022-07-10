import Footer from '../Footer';
import ResponsiveMenu from '../ResponsiveMenu';
import * as C from './styles';

function Template({ children }: { children: JSX.Element }) {
  return (
    <C.Container>
      <header>
        <ResponsiveMenu />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </C.Container>
  );
}

export default Template;
