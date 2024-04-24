import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import * as Icon from "@phosphor-icons/react";

export function Commet({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/121250838?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Alves</strong>
              <time dateTime="2024-04-04 18:17:00">
                Cerca de 1 de hora atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Icon.Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <Icon.ThumbsUp />
            Apludir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
