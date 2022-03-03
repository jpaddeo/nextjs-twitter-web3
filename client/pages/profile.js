import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileTweets from '../components/Profile/ProfileTweets';
import Sidebar from '../components/Sidebar';

const styles = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
};

export default function Profile() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Sidebar initialSelectedIcon={'Profile'} />
        <div className={styles.mainContent}>
          <ProfileHeader />
          <ProfileTweets />
        </div>
      </div>
    </div>
  );
}
