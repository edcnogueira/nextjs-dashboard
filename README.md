# Next.js Dashboard Template

Speed up your development process with this powerful Next.js Dashboard Template! Designed for frontend developers and teams, this template provides a clean, modern, and responsive foundation for building feature-rich dashboards and administrative interfaces. Leverage the latest technologies like Next.js, TailwindCSS, and Shadcn/UI to create stunning user experiences with ease. Whether you're starting a new project or looking to upgrade your existing admin panel, this template offers a quick and efficient way to get a professional-grade dashboard up and running.

## Funcionalidades

- **Estrutura de Projeto Otimizada:** Baseada em Next.js App Router, com organização clara para componentes, páginas, layouts e utilitários.
- **Tecnologias Modernas Pré-configuradas:** Inclui Next.js, React, TypeScript, TailwindCSS e Shadcn/UI, prontos para uso.
- **Layout Responsivo e Flexível:** Componentes de layout (como header e sidebar) construídos com TailwindCSS, garantindo adaptabilidade em diferentes tamanhos de tela.
- **Componentes de UI Personalizáveis:** Integração com Shadcn/UI, permitindo o uso de componentes de alta qualidade que podem ser facilmente customizados via CSS variables e classes Tailwind.
- **Sistema de Roteamento Simplificado:** Utiliza o sistema de arquivos para roteamento do Next.js, facilitando a criação e gerenciamento de novas páginas.
- **Configuração de Qualidade de Código:** Pré-configurado com ESLint e Prettier para manter a consistência e qualidade do código.

## Visualização (Screenshots / Demo)

*(Esta seção é um placeholder. Adicione aqui screenshots do seu dashboard em ação ou um link para uma demonstração ao vivo para mostrar o potencial do template!)*

**Exemplos do que incluir:**
- Screenshot da página principal do dashboard.
- Imagens de diferentes componentes ou seções importantes.
- Link para um deploy de demonstração (ex: Vercel, Netlify).

## Tecnologias Utilizadas

- **Next.js:** Escolhido por sua performance otimizada (SSR e SSG), roteamento baseado em sistema de arquivos, e ecossistema robusto, ideal para aplicações web modernas e SEO-friendly.
- **TailwindCSS:** Um framework CSS utility-first que permite a construção rápida de interfaces customizadas diretamente no HTML, promovendo consistência e manutenibilidade do estilo.
- **Shadcn/UI:** Coleção de componentes de UI reusáveis, acessíveis e estilizáveis, construídos sobre Radix UI e TailwindCSS. Permite adicionar componentes visualmente atraentes e funcionais de forma eficiente, que podem ser facilmente adaptados à identidade visual do projeto.
- **Outras Ferramentas:** O projeto também utiliza TypeScript para tipagem estática, e ESLint & Prettier para garantir a qualidade e consistência do código, conforme detalhado na seção de Funcionalidades.

## Como Usar

Certifique-se de ter o Node.js e o `pnpm` (Performant NPM) instalados em seu ambiente de desenvolvimento.

1. **Clone o repositório a partir do template:**
    ```sh
    git clone https://github.com/edcnogueira/dashboard-template.git nome-do-seu-projeto
    cd nome-do-seu-projeto
    ```

2. **Instale as dependências:**
   Este projeto utiliza `pnpm` como gerenciador de pacotes. Se você não o tiver instalado, consulte a [documentação oficial do pnpm](https://pnpm.io/installation).
    ```sh
    pnpm install
    ```

3. **Inicie o servidor de desenvolvimento:**
    ```sh
    pnpm dev
    ```
    Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado. O servidor utiliza Turbopack para um desenvolvimento mais rápido.

4. **Compile para Produção:**
   Para gerar a versão otimizada da sua aplicação para deploy:
    ```sh
    pnpm build
    ```

5. **Personalize o dashboard conforme suas necessidades:**
    - Adicione seus componentes personalizados em `src/components`;
    - Modifique o layout em `src/components/layout` (ex: `header.tsx`, `sidebar/index.tsx`);
    - Ajuste as rotas e navegação em `src/app` (utilizando o App Router do Next.js);
    - Altere o tema global da aplicação em `src/app/globals.css`. Para customização de cores e outros aspectos do tema Shadcn/UI, modifique as variáveis CSS e, se necessário, o arquivo `tailwind.config.mjs` (ou `tailwind.config.js`). Consulte o [Shadcn/UI Theme Generate](https://ui.shadcn.com/themes) para auxílio.

### Deployment

Este projeto Next.js é otimizado para deploy em plataformas que suportam aplicações Node.js. Algumas opções populares incluem:

- **[Vercel](https://vercel.com/):** Plataforma dos criadores do Next.js, oferece integração contínua e deploy simplificados, sendo a opção recomendada.
- **[Netlify](https://www.netlify.com/):** Outra excelente opção com CI/CD e deploy global.
- **[AWS Amplify](https://aws.amazon.com/amplify/):** Para integração com o ecossistema AWS.
- Outras plataformas como Docker, DigitalOcean, Google Cloud Run, etc.

Verifique a documentação da plataforma escolhida para instruções específicas de deploy de aplicações Next.js.

## Estrutura do Projeto

A estrutura de pastas principal do projeto é a seguinte:

```text
.
├── .github/               # Configurações do GitHub (Actions, Dependabot, Workflows)
├── public/                # Arquivos estáticos (ex: next.svg, vercel.svg)
│   ├── next.svg
│   └── vercel.svg
├── src/
│   ├── app/               # Rotas, páginas e layouts (Next.js App Router)
│   │   ├── (logged)/      # Layouts e páginas para usuários autenticados
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── (unlogged)/    # Layouts e páginas para usuários não autenticados
│   │   │   ├── layout.tsx
│   │   │   └── login/
│   │   │       └── page.tsx
│   │   ├── favicon.ico    # Ícone da aplicação
│   │   ├── globals.css    # Estilos globais
│   │   ├── layout.tsx     # Layout principal da aplicação
│   │   └── page.tsx       # Página inicial (entry point)
│   ├── components/        # Componentes React reutilizáveis
│   │   ├── icons/         # Componentes de ícones SVG
│   │   │   └── custom/
│   │   ├── layout/        # Componentes de estrutura (Header, Sidebar, Container)
│   │   │   ├── container/
│   │   │   ├── header/
│   │   │   └── ...
│   │   ├── screens/       # Componentes de UI específicos de telas/páginas (ex: autenticação)
│   │   │   └── auth/
│   │   ├── sidebar/       # Componentes relacionados à barra lateral de navegação
│   │   └── ui/            # Componentes de UI básicos (Button, Card, Input - gerados por Shadcn/UI)
│   ├── lib/               # Funções utilitárias e lógica de negócios (ex: utils.ts)
│   │   └── utils.ts
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── .prettierrc            # Configuração do Prettier (formatação de código)
├── components.json        # Configuração do Shadcn/UI
├── eslint.config.mjs      # Configuração do ESLint (linting de código)
├── next.config.mjs        # Configuração do Next.js
├── package.json           # Metadados do projeto, scripts e dependências
├── pnpm-lock.yaml         # Lockfile do pnpm (gerenciador de pacotes)
├── postcss.config.mjs     # Configuração do PostCSS (para TailwindCSS)
├── README.md              # Este arquivo :)
└── tsconfig.json          # Configuração do TypeScript
```

**Nota:** A representação de `...` em alguns diretórios indica a presença de mais arquivos ou subdiretórios não detalhados para brevidade. A estrutura exata pode variar conforme o desenvolvimento do projeto.

## Contribuindo

Contribuições são muito bem-vindas e apreciadas! Se você tem ideias para melhorias, novas funcionalidades ou correções de bugs, por favor, siga os passos abaixo:

1.  **Verifique Issues Existentes:** Antes de começar, dê uma olhada nas [issues abertas](https://github.com/edcnogueira/dashboard-template/issues) para ver se alguém já está trabalhando em algo similar ou se sua ideia já foi discutida.
2.  **Abra uma Issue (Opcional, mas Recomendado):** Para novas funcionalidades ou mudanças significativas, é uma boa prática abrir uma issue primeiro para discutir a proposta.
3.  **Faça um Fork do Repositório:** Crie uma cópia do projeto em sua conta do GitHub.
4.  **Crie uma Branch:**
    ```sh
    git checkout -b feat/sua-nova-feature # Para novas funcionalidades
    # ou
    git checkout -b fix/descricao-do-bug # Para correções de bugs
    ```
5.  **Desenvolva suas Mudanças:**
    - Certifique-se de que seu código segue os padrões do projeto (ESLint e Prettier estão configurados para ajudar).
    - Adicione testes se aplicável.
6.  **Commit suas Mudanças:** Use mensagens de commit claras e descritivas. Recomendamos seguir o padrão [Conventional Commits](https://www.conventionalcommits.org/).
    ```sh
    git commit -m "feat: Adiciona nova funcionalidade X"
    # ou
    git commit -m "fix: Corrige bug Y em Z"
    ```
7.  **Faça Push para sua Branch:**
    ```sh
    git push origin feat/sua-nova-feature
    ```
8.  **Abra um Pull Request:** Vá para o repositório original e abra um Pull Request detalhando suas mudanças.

Se você tiver dúvidas ou sugestões, sinta-se à vontade para abrir uma issue. Sua colaboração é fundamental para o sucesso deste projeto!

## Licença

Este projeto é disponibilizado como um template e sugere-se o uso da Licença MIT, uma licença permissiva comumente utilizada para projetos de código aberto.

Para formalizar, adicione um arquivo `LICENSE` na raiz do seu projeto com o seguinte conteúdo:

```text
MIT License

Copyright (c) [ano] [nome completo ou nome da organização]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

Lembre-se de substituir `[ano]` e `[nome completo ou nome da organização]` pelos dados corretos.
