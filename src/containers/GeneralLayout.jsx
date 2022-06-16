import {Footer} from '../components/Footer';
import Header from '../components/Header';

export function GeneralLayout({
    children, showHeader = true, title = ''
  }) {
  return (
    <>
        {showHeader && <Header title={title} />}
        {children}
        <Footer />
    </>
  )
}
