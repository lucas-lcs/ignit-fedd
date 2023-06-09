// componente é uma função que retorna um html, por isso o arquivo é jsx(javaScript que contém html)

import { Post } from './Post'


export function App() {
  
  return (
    <div>
      <Post 
        author='Lucas Alves' 
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe error, deserunt porro, labore soluta nostrum debitis dolore repellat perferendis sit? Optio eaque doloremque error? Asperiores quo culpa beatae nostrum.'
      />
      
      <Post 
        author='Lucas segundo post' 
        content='Agora temos mais um componente com conteudos diferentes.'
      />
    </div>
  )
}


