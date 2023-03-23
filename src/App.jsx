import { Header } from "./components/Header"
import { Post } from "./Post"
import styles from './App.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />

      <main>
      <Post 
        author="Name Vug" 
        content="Repudiandae asperiores, tenetur ratione provident, optio molestiae quisquam alias ut illo eveniet dicta maiores." 
        />
      
      <Post 
      author="Danilo" 
      content="Mollitia magnam accusamus culpa sunt aliquid ratione ipsa. Repudiandae asperiores, tenetur ratione provident, optio molestiae quisquam alias ut illo eveniet dicta maiores." 
      />
      </main>
    </div>
    </>
  )
}
