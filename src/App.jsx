// componente é uma função que retorna um html, por isso o arquivo é jsx(javaScript que contém html)

import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css'
import "./global.css";
import { Commet } from "./components/Comment";


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      <Sidebar />
      
        <main>
       <Post
        author="Lucas Alves"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe error, deserunt porro, labore soluta nostrum debitis dolore repellat perferendis sit? Optio eaque doloremque error? Asperiores quo culpa beatae nostrum."
      />
      
      <Post
        author="Lucas segundo post"
        content="Agora temos mais um componente com conteudos diferentes."
      /> 
        </main>
      </div>

    </div>
  );
}

// Existe default export e o Named export
// O default export vc pode alterar o nome na importação podendo gerar erros caso haja esquecimento de alteração.
// Named tem que ter o mesmo nome na importação, e tem que estar entre { named }
