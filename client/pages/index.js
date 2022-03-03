import Sidebar from '../components/Sidebar';

import Feed from '../components/Feed/Feed';

const styles = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: 'max-w-[1400px] w-2/3 flex justify-between',
};

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}
