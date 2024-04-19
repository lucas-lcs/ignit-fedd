import { Avatar } from "./Avatar";
import { Commet } from "./Comment";
import { format, formatDistanceToNow }  from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR'
import styles from "./Post.module.css";


export function Post({author, publishedAt, content}) {
const publishedAtFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
  locale: ptBR
})

const publishedDataRelativeToNow = formatDistanceToNow(publishedAt, {
  locale: ptBR,
  addSuffix: true
})

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            className={styles.avatar}
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDataRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
       {content.map(line => {
          if(line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
       })}
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
