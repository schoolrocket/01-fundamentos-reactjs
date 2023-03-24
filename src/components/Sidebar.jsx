import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

import React from 'react'

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img 
          className={styles.cover}
          src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
        />
        <div className={styles.profile}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/97545136?v=4" />

          <strong>Victor Machado</strong>
          <span>Web Developer</span>
        </div>
        <footer>
          <a href='#'>
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  )
}
