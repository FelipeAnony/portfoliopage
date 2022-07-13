import Styles from './styles.module.css';

type Props = {
  children: string | React.ReactElement;
  type: string;
};

function Message({ children, type }: Props) {
  return (
    <div
      className={`${Styles.container} ${
        type === 'success' ? Styles.success : Styles.error
      }`}
    >
      {children}
    </div>
  );
}

export default Message;
