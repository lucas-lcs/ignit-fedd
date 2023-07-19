// componente é uma função que retorna um html, por isso o arquivo é jsx(javaScript que contém html)

import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'

export function App() {
  
  return ( 
    <div>
    <Header />


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


// Existe default export E o named export
// O default export vc pode alterar o nome na importação podendo gerar erros caso haja esquecimento de alteração.
// named tem que ter o mesmo nome na importação, e tem que estar entre { named }


