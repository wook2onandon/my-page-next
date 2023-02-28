import { Inter } from '@next/font/google';
import HeadInfo from '@/components/HeadInfo';
import Main from '@/components/Main';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <HeadInfo title="Wook's Portfolio" />
      <Main />
    </>
  );
}
