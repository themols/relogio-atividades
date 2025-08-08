import styles from './styles.module.css'

type InputDefaultProps = {
  id: string
  labelText?: string
} & React.ComponentProps<'input'>

export function InputDefault({ type, id, labelText, ...rest }: InputDefaultProps) {
  return <>
    {labelText && <label htmlFor={id}>{labelText}</label>}
    <input className={styles.input} type={type} id={id} {...rest} />
  </>
}