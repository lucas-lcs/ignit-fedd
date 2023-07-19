import styles from './Header.module.css'

import ignitelogo from '../asserts/ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ignitelogo} alt="Logotipo do ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )
}