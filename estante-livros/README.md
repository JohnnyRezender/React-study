# Projeto React

Criar uma aplicação de estante de livros, onde podemos selecionar e classificar os livros que já lemos, estamos lendo ou vamos ler.

## Funcionalidades

Na tela inicial (home), é exibida uma lista (estante) de categorias, onde cada uma delas contém vários livros. As 3 estantes são:

- Currently Reading (lendo atualmente)
- Want to Read (quer ler)
- Read (já leu)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e81f08a0-d343-45f1-b272-f8d79985bd0f/Screen_Shot_2021-05-05_at_11.16.19.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e81f08a0-d343-45f1-b272-f8d79985bd0f/Screen_Shot_2021-05-05_at_11.16.19.png)

Cada livro tem um controle que permite selecionar uma estante para colocá-lo. Quando seleciona uma prateleira diferente, o livro é movido para ela, o valor padrão sempre deve ser a estante atual do livro.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ab5941bc-600d-46a3-9e4a-625bea633061/Screen_Shot_2021-05-05_at_11.16.38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ab5941bc-600d-46a3-9e4a-625bea633061/Screen_Shot_2021-05-05_at_11.16.38.png)

Na "home" também deve ter um um link para busca.

Na pagina de busca deve haver um input de texto para buscar por um livro. Nos livros encontrados devem ter um controle para adicioná-los na biblioteca. 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f167907e-2a59-4e4e-89ee-b95cfdfad7b8/Screen_Shot_2021-05-05_at_11.16.52.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f167907e-2a59-4e4e-89ee-b95cfdfad7b8/Screen_Shot_2021-05-05_at_11.16.52.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/629ce6ea-02c2-42b5-a1c7-e714e65d6101/Screen_Shot_2021-05-05_at_11.17.02.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/629ce6ea-02c2-42b5-a1c7-e714e65d6101/Screen_Shot_2021-05-05_at_11.17.02.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a0a908d4-c4b4-4093-ba9f-a99d6987e3f8/Screen_Shot_2021-05-05_at_11.17.11.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a0a908d4-c4b4-4093-ba9f-a99d6987e3f8/Screen_Shot_2021-05-05_at_11.17.11.png)

Para manter uma interface consistente recomendamos reutilizar componentes usados anteriormente.

Quando um livro está na estante, ele deve ter o mesmo estado que na tela de busca.

A página de busca também deve ter um link para voltar para a home
