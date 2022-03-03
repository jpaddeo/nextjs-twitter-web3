import { useState } from 'react';
import Link from 'next/link';

import { FiMoreHorizontal, FiBell } from 'react-icons/fi';
import { VscTwitter } from 'react-icons/vsc';
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri';
import { BiHash } from 'react-icons/bi';
import { HiOutlineMail, HiMail } from 'react-icons/hi';
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa';
import {
  BsBookmarkFill,
  BsBookmark,
  BsPerson,
  BsPersonFill,
} from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';

import SidebarOption from './SidebarOption';

const styles = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer: `text-3xl m-4`,
  twitterButton: `bg-[#1d9bf0] hover:bg-[#1a8ae2] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded`,
  profileLeft: `flex items-center justify-center mr-4`,
  profileImage: `h-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center m-2`,
};

const Sidebar = ({ initialSelectedIcon = 'Home' }) => {
  const [selected, setSelected] = useState(initialSelectedIcon);

  return (
    <div className={styles.wrapper}>
      <div className={styles.twitterIconContainer}>
        <VscTwitter />
      </div>
      <div className={styles.navContainer}>
        <SidebarOption
          text='Home'
          Icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
          isActive={Boolean(selected === 'Home')}
          setSelected={setSelected}
          redirect='/'
        />
        <SidebarOption
          text='Explore'
          Icon={selected === 'Explore' ? FaHashtag : BiHash}
          isActive={Boolean(selected === 'Explore')}
          setSelected={setSelected}
        />
        <SidebarOption
          text='Notifications'
          Icon={selected === 'Notifications' ? FaBell : FiBell}
          isActive={Boolean(selected === 'Notifications')}
          setSelected={setSelected}
        />
        <SidebarOption
          text='Messages'
          Icon={selected === 'Messages' ? HiMail : HiOutlineMail}
          isActive={Boolean(selected === 'Messages')}
          setSelected={setSelected}
        />
        <SidebarOption
          text='Bookmarks'
          Icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
          isActive={Boolean(selected === 'Bookmarks')}
          setSelected={setSelected}
        />
        <SidebarOption
          text='Lists'
          Icon={selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
          isActive={Boolean(selected === 'Lists')}
          setSelected={setSelected}
        />
        <SidebarOption
          text='Profile'
          Icon={selected === 'Profile' ? BsPersonFill : BsPerson}
          isActive={Boolean(selected === 'Profile')}
          setSelected={setSelected}
          redirect={'/profile'}
        />
        <SidebarOption text='More' Icon={CgMoreO} setSelected={setSelected} />
      </div>
      <div className={styles.profileButton}>
        <div className={styles.profileLeft}></div>
        <div className={styles.profileRight}>
          <div className={styles.details}>
            <div className={styles.name}>jpaddeo</div>
            <div className={styles.handle}>@0x22</div>
          </div>
          <div className={styles.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
