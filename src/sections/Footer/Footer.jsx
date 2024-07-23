import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>&copy; 2024 Eriberto Lima. <br />
            All rights reserved.
            <br />
            Made with React.
        </p>

    </section>
  )
}

export default Footer