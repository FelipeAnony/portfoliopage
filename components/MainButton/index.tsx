import Styles from './styles.module.css';

type Props = {
  children: React.ReactElement | string;
  bgColor: string;
  disabled?: boolean;
  onClick?: () => any;
  className?: string;
};

function MainButton({
  children,
  bgColor,
  disabled,
  onClick,
  className,
}: Props) {
  return (
    <div
      className={`${Styles.container} ${
        disabled ? Styles.disabled : ''
      } ${className}`}
      style={{ backgroundColor: bgColor }}
      onClick={() => onClick && onClick()}
    >
      {children}
    </div>
  );
}

export default MainButton;
