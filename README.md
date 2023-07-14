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