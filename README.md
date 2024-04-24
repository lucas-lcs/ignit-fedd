# ignit-fedd
Projeto fundamentos do React

instalação: 
- **[Vite](https://vitejs.dev/)**
- ```npm run install```
- ```npm run dev```
- Abra o localhost no navegador

Fundamentos: 

SSR(Sever side rendering) vs SPA(Single Page Application) e comparações com aplicações tradicionais sem utilização do React. Eles são Partterners de rederização.

SSR => É quando o servidor recebe as informações do browser e pega o backend e frontend, rederiza tudo e envia para o browser em html.

SPA => É quando temos o backend que traz todas as informações em formato json que pode ser utilizada por outra aplicação de frontend(Ract,...) consumimos essas informações do mesmo backend criando interfaces diferentes(web, mobile...)


**Bundlers & Compilers**

Com o mundo de desenvolvimento está evoluindo à todo momento, nem sempre todos os browsers conseguem acompanhar a evolução da tecnologia para dar suporte à sintaxe mais moderna.

Para isso existem os compilers, como o **[babel](https://babeljs.io/)** que convertem o código moderno para uma sintaxe mais antiga que os browsers reconhecem, e os bundlers como o **[webpack](https://webpack.js.org/)** que faz um bundling de todos os arquivos da nossa aplicação de uma forma que todos os browsers reconheçam.

Nessa aula vamos aprender a diferença entre compilers e bundlers, e também sobre as novas features que já existem nos navegadores mais modernos, que é a feature de ESModules.

Vamos também ter uma introdução ao **[Vite](https://vitejs.dev/)** que irá substituir os bundlers e compilers tradicionais (como babel e webpack) e entender como ele tira proveito das funcionalidades mais modernas dos navegadores para ter uma melhor performance de compilação e execução.

**Componentes**

É uma forma de quebrar nossa interface para ser repetitiva  e reutilizada com informações distintas. E como identificamos um componente? através do arqui jsx(javaScript + xml) que é basicamente uma função que retorna um html. ex: 

`function App() {`

`export function App() {
return (
<h1>Hello World</h1>
<div>
<Post />
</div>
)
}`

`export default App`

**Propriedades**

Informações que podemos passar para os nossos componentes.

## Styles css
Serve para aplicarmos os styles nos componetes.
Nunca devemos importar diretamente no index.html. 
O estilo sempre vai partir dos arquivos jsx. 
[**Css modules**](https://github.com/css-modules/css-moduleshttps://github.com/css-modules/css-modules) - Serve para isolar o style de um componente para não interferir em outros compenente da aplicação, garantindo que o css não afete outras partes da aplicação.  

## States 
React não fica ouvindo a mudança do estado de uma determinada variavel, com isso não redirecionada a mudança que aplicamos no frontend, por causa disso precisamos usar o useState, que comunica o react que algo foi alterado na variavel e será preciso alterar no frontend as alterções. 

## Programação inperativa 
    oque deve ser feito(passo-a-passo)
    Receita de bolo 
    1 Ligar o forno a 180°
    2 Abrir a porta do forno... 
## Programanação declarativa 
    Quais as condiçoes para ter o resultado final
    Receita de bolo 
    1 O forno precisa estar a 180°
    2 Quando o forno estiver quente, eu passo colocar a massa para assar 
    2 Quando a massa estiver pronta, eu posso retira-la do forno.

    Normalmente sempre iremos utilizar no react a programação declarativa ao desenvolver o código.

    ex. 

~~~js
-- programação imperativo
src\components\Post.jsx
    function hadleCreateNewComment() {
    event.preventDefault();
    const newCommentText = event.target.comment.value
    event.target.comment.value = '' // limpar o campo textarea
    setComments([...comments, newCommentText]);
  }
  ~~~

~~~js
-- programanção declarativa 
import { Avatar } from "./Avatar";
import { Commet } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post muito bacana hem?!"]);
  const [newCommentText, setNewCommentText] = useState(""); //1 criamos o valor do state

  const publishedAtFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDataRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function hadleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');// 5 após criar o novo comentário devemos voltar ao estado vazio.
  }

  function hadleNewCommentChange() {// 3 criamos a função para ouvir o envento da variavel(usestate) e setar o novo comentario 
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar className={styles.avatar} src={author.avatarUrl} />
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
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>
      </div>
      <form onSubmit={hadleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário..."
          value={newCommentText} // 4 informamos que dentro do text area será sempre esse valor como default 
          onChange={hadleNewCommentChange} // 2 criamos o evento no textarea pegando o valor que será setado na variável dentro da função
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Commet content={comment} />;
        })}
      </div>
    </article>
  );
}


~~~~