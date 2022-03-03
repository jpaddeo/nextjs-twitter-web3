import { useRouter } from 'next/router';

const styles = {
  wrapper: `w-min flex items-center rounded-[100px] cursor-pointer hover:bg-[#333c45] p-4 transition-all hover:duration-200 hover:ease-in-out`,
  iconContainer: `text-xl mr-4`,
  textGeneral: `font-medium`,
  textActive: `font-bold`,
};

const SidebarOption = ({ text, Icon, isActive, setSelected, redirect }) => {
  const router = useRouter();

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setSelected(text);
        if (redirect) {
          router.push(redirect);
        }
      }}
    >
      <div className={styles.iconContainer}>
        <Icon />
      </div>
      <div className={`${isActive ? styles.textActive : styles.textGeneral}`}>
        {text}
      </div>
    </div>
  );
};

export default SidebarOption;
