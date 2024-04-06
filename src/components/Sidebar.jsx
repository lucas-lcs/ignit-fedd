import styles from './Sidebar.module.css'
import * as Icon from '@phosphor-icons/react'


export function Sidebar () {
    return (

        <aside className={styles.sidebar}>
        <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" 
        />

        <div  className={styles.profile}>
        <img
        className={styles.avatar}
        src="https://avatars.githubusercontent.com/u/121250838?v=4" />
        <strong> Lucas Alves </strong>
        <span>Web developer</span>
        </div>

        <footer> 
            <a href="#">
                <Icon.PencilLine size={20} />
                Editar seu perfil
            </a>
        </footer>
        </aside>
    )
        
    }