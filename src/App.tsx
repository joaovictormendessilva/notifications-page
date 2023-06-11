// CSS
import styles from './App.module.css'

// Components 
import { Notifications } from './components/Notifications/Notifications.tsx'

export function App(){
  return (
    <div className={styles.app}>
      <Notifications />
    </div>
  )
}