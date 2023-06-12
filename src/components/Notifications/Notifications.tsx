// CSS
import styles from './Notifications.module.css'

import { useEffect, useState } from 'react'

import { data } from '../../data'

export function Notifications() {

    const [unreadNotificationsCounter, setUnreadNotificationsCounter] = useState<number>(0)
    const [sentinel, setSentinel] = useState(false);

    useEffect(() => {
        const count = data.reduce((total, index) => index.active ? total + 1 : total, 0)
        setUnreadNotificationsCounter(count)
    }, [sentinel])

    const handleMarkAllAsRead = () => {
        data.forEach((data) => {
            return data.active = false
        })
        setSentinel(!sentinel)
    }


    return (
        <div className={styles.notifications}>
            <div className={styles.notificationsHeader}>
                <div className={styles.notificationsTitleAndQuantity}>
                    <h1>Notifications</h1>
                    <span>
                        {unreadNotificationsCounter}
                    </span>
                </div>
                <div className={styles.markAllAsReadButton}>
                    <button onClick={handleMarkAllAsRead}>
                        Mark all as read
                    </button>
                </div>
            </div>

            {data.map((notification) => (
                <div key={notification.id} onClick={() => {notification.active = !notification.active; setSentinel(!sentinel)}}>
                    <div className={`${styles.notificationBox} ${notification.active && styles.notificationRead}`}>
                        <div className={styles.notificationContentAndPicure}>
                            <div className={styles.avatarAndActions}>
                                <div className={styles.avatar}>
                                    <img src={notification.avatar} alt={`Avatar de ${notification.username}`} />
                                </div>
                                <div>
                                    <div className={styles.actionsAndDate}>
                                        <p>
                                            <a className={styles.username} href="#">
                                                <b>{notification.username}</b>
                                            </a>{" "}
                                            <span className={styles.action}>
                                                {notification.action}
                                            </span>{" "}
                                            
                                            <a className={styles.postTitle} href="#">
                                                {notification.post_title}
                                            </a>

                                            <a className={styles.groupTitle} href="#">
                                                {notification.group}
                                            </a>
                                            {notification.active && (
                                                <>
                                                    {" "}<span className={styles.notificationDot}></span>
                                                </>
                                            )}
                                        </p>

                                        <div className={styles.dateTimeNotificaiton}>
                                            {notification.date}
                                        </div>
                                    </div>

                                    {notification.message &&
                                        <a href="#">
                                            <div className={styles.privateMessage}>
                                                {notification.message}
                                            </div>
                                        </a>
                                    }
                                </div>
                            </div>

                            {notification.picture && (
                                <a href="#">
                                    <div className={styles.notificationPicture}>
                                        <img src={notification.picture} alt={`Imagem que foi comentada por ${notification.username}`} />
                                    </div>
                                </a>
                            )}
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}