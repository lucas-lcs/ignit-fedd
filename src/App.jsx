// componente é uma função que retorna um html, por isso o arquivo é jsx(javaScript que contém html)

import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

// author: {avatarUrl: "", name: "", role: ""}
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/121250838?v=4",
      name: "Lucas Alves",
      role: "Web Developer",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],

    publishedAt: new Date("2024-04-18 21:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/77105353?v=4",
      name: "Lucas Henrique",
      role: "Developer",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],

    publishedAt: new Date("2024-04-20 21:10:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {/* <Post
            author="Lucas Alves"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe error, deserunt porro, labore soluta nostrum debitis dolore repellat perferendis sit? Optio eaque doloremque error? Asperiores quo culpa beatae nostrum."
          />

          <Post
            author="Lucas segundo post"
            content="Agora temos mais um componente com conteudos diferentes."
          /> */}

          {/* Vamos criar uma iteração para percorrer os dados do posts e exibir cada um em tela */}

          {posts.map(post => {
            return (
                    <Post 
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                    
                    />
                  )
          })
        }
        </main>
      </div>
    </div>
  );
}

// Existe default export e o Named export
// O default export vc pode alterar o nome na importação podendo gerar erros caso haja esquecimento de alteração.
// Named tem que ter o mesmo nome na importação, e tem que estar entre { named }
