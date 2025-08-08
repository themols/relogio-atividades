import styles from './styles.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>

            <a href='#'>documentação</a>
            <a href='#'>sobre o Relogio Atividades</a>


            Relogio de atividades &copy; {new Date().getFullYear()} - Feito com puro odio
        </footer>
    );
}