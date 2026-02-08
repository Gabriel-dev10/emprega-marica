# Arquitetura e guia de estudo

## Stack principal

- [React](https://react.dev/learn) + [TypeScript](https://www.typescriptlang.org/docs/)
- [React Router](https://reactrouter.com/home)
- [Vite](https://vite.dev/guide/)

## Estado e dados

- [React Query (TanStack Query)](https://tanstack.com/query/v4/docs/framework/react/overview)
- AuthContext + hooks de autenticação
  - [Passing data deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)
  - [Reusing logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

## Autenticação

- Sessão com JWT em cookie httpOnly
  - [JWT (RFC 7519)](https://www.rfc-editor.org/info/rfc7519)
  - [Guia de cookies HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies)
- Maior segurança contra XSS (não expõe tokens no `localStorage`), movendo o
  token para um cookie `httpOnly` com `SameSite` apropriado.
- Toda a lógica de requisição fica em `api/client` e no `AuthContext`.

## UI

- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) usado em
  conjunto com design tokens, criando componentes menores e classes
  reutilizáveis.
- [shadcn/ui](https://ui.shadcn.com/) usando como fonte de componentes (inputs,
  tables, etc.).
- [Tailwind v4](https://tailwindcss.com/) via `@tailwindcss/vite`, ponto de
  entrada em `src/index.css`.
- [class-variance-authority](https://cva.style/) + `tailwind-merge`/`clsx` para
  variantes e composição de classes nos componentes de UI (`src/shared/ui`).
- [lucide-react](https://lucide.dev/) como biblioteca de ícones.

## Formulários

- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/) para validação e tipagem de schemas.

## Testes

- [Vitest](https://vitest.dev/) como runner de testes padrão.
- [React Testing
  Library](https://testing-library.com/docs/react-testing-library/intro/) para
  testes de componentes.

## Tooling

- [Bun](https://bun.sh/docs/install)
- [Biome](https://biomejs.dev/)
