# Dashboard Template


Este é um template de dashboard para projetos frontend, projetado para agilizar o desenvolvimento de novas telas e dashboards. Use este template para clonar rapidamente um dashboard em branco e começar a trabalhar imediatamente.

## Funcionalidades

- Estrutura inicial pronta para desenvolvimento de dashboards.
- Configuração inicial com as dependências mais comuns.
- Layout responsivo e personalizável.

## Tecnologias Utilizadas

- NextJS
- Frameworks e bibliotecas: [TailwindCSS + ShadcnUI]

## Como Usar

1. **Clone o repositório a partir do template:**
    ```sh
    git clone https://github.com/edcnogueira/dashboard-template.git nome-do-seu-projeto
    cd nome-do-seu-projeto
    ```

2. **Instale as dependências:**
    ```sh
    pnpm install
    ```

3. **Inicie o servidor de desenvolvimento:**
    ```sh
    pnpm dev
    ```

4. **Personalize o dashboard conforme suas necessidades:**
    - Adicione seus componentes personalizados em `src/components`;
    - Modifique o layout em `src/components/layout`;
    - Ajuste as rotas e navegação em `src/app`;
    - Altere o tema global da aplicação em `src/app/globals.css` conforme o [Shadcn Theme Generate](https://ui.shadcn.com/themes).

## Estrutura do Projeto

```
├── public
│   └── ...
├── src
│   ├── app
│   ├── components
│   └── lib
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── .components.json
├── package.json
├── README.md
└── ...
```

## Contribuindo

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature ou correção de bug (`git checkout -b feat/nova-feature`).
3. Commit suas mudanças (`git commit -am 'feat: Adicionei uma nova feature'`).
4. Faça um push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue.
