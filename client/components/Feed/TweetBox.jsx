import { useState } from 'react';
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs';
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri';
import { IoMdCalendar } from 'react-icons/io';
import { MdOutlineLocationOn } from 'react-icons/md';

const styles = {
  wrapper: `px-4 flex flx-row border-b border-[#38444d] pb-4`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `height-12 w-12 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  iconWrapper: `flex rounded-full mr-2 p-2 hover:bg-[#1d9bf0] hover:bg-opacity-25`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
};

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');

  const postTweet = (event) => {
    event.preventDefault();
    console.log(tweetMessage);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tweetBoxLeft}>
        <img
          src='https://i.pravatar.cc/150'
          alt='Profile Image'
          className={styles.profileImage}
        />
      </div>
      <div className={styles.tweetBoxRight}>
        <form>
          <textarea
            className={styles.inputField}
            placeholder="What's Happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          ></textarea>
          <div className={styles.formLowerContainer}>
            <div className={styles.iconsContainer}>
              <div className={styles.iconWrapper}>
                <BsCardImage />
              </div>
              <div className={styles.iconWrapper}>
                <RiFileGifLine />
              </div>
              <div className={styles.iconWrapper}>
                <RiBarChartHorizontalFill />
              </div>
              <div className={styles.iconWrapper}>
                <BsEmojiSmile />
              </div>
              <div className={styles.iconWrapper}>
                <IoMdCalendar />
              </div>
              <div className={styles.iconWrapper}>
                <MdOutlineLocationOn />
              </div>
            </div>
            <button
              className={`${styles.submitGeneral} ${
                tweetMessage.length
                  ? styles.activeSubmit
                  : styles.inactiveSubmit
              }`}
              disabled={!tweetMessage.length}
              onClick={(ev) => postTweet(ev)}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
