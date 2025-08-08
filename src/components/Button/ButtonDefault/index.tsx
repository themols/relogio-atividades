import styles from './styles.module.css'

type ButtonDefaultProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>

export function ButtonDefault({ icon, color = 'green', ...props }: ButtonDefaultProps) {
  return <>
    <button className={`${styles.button} ${color}`} {...props} >
      {icon}
    </button>
  </>
}