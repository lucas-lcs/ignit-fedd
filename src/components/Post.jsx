import { Avatar } from "./Avatar";
import { Commet } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/121250838?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Lucas Alves</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="04 de Abril às 18:40h" dateTime="2024-04-04 18:17:00">
          {" "}
          publicado a 1 hora
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare </a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
      <Commet/>
      <Commet/>
      <Commet/>
      </div>
    </article>
  );
}
