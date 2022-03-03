import { BsStars } from 'react-icons/bs';
import Post from './Post';
import TweetBox from './TweetBox';

const styles = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const TWEETS = [
  {
    displayName: 'John Doe',
    userName: '0x8C9203920392039239234378',
    avatar:
      'https://i.pravatar.cc/150',
    content: 'This is a tweet',
    isProfileImageNft: false,
    timestamp: '2020-06-01T00:00:00.000Z',
  },
  {
    displayName: 'John Doe',
    userName: '0x8C9203920392039239203828282928',
    avatar:
      'https://i.pravatar.cc/150',
    content: 'This is a tweet',
    isProfileImageNft: false,
    timestamp: '2020-06-01T00:00:00.000Z',
  },
  {
    displayName: 'John Doe',
    userName: '0x8C9203920392039239203828282928',
    avatar:
      'https://i.pravatar.cc/150',
    content: 'This is a tweet',
    isProfileImageNft: false,
    timestamp: '2020-06-01T00:00:00.000Z',
  },
  {
    displayName: 'John Doe',
    userName: '0x8C9203920392039239203828282928',
    avatar:
      'https://i.pravatar.cc/150',
    content: 'This is a tweet',
    isProfileImageNft: false,
    timestamp: '2020-06-01T00:00:00.000Z',
  },
  {
    displayName: 'John Doe',
    userName: '0x8C9203920392039239203828282928',
    avatar:
      'https://i.pravatar.cc/150',
    content: 'This is a tweet',
    isProfileImageNft: false,
    timestamp: '2020-06-01T00:00:00.000Z',
  },
];
const Feed = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {TWEETS.map((tweet) => (
        <Post
          key={tweet.userName}
          displayName={tweet.displayName}
          userName={tweet.userName}
          avatar={tweet.avatar}
          content={tweet.content}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  );
};

export default Feed;
