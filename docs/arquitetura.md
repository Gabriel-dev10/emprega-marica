# Arquitetura e guia de estudo

## Stack principal

- [React](https://react.dev/learn) + [TypeScript](https://www.typescriptlang.org/docs/)
- [React Router](https://reactrouter.com/home)
- [Bun](https://bun.sh/docs) como runtime, bundler e package manager

## Build & Dev

- `bun run dev` — Inicia o servidor de desenvolvimento (`dev.ts`)
- `bun run build` — Build de produção (`build.ts`)
- Tailwind CSS via [`bun-plugin-tailwind`](https://github.com/aspect-build/bun-plugin-tailwind)
- Variáveis de ambiente com prefixo `BUN_PUBLIC_*` são expostas ao client

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

- [Tailwind CSS v4](https://tailwindcss.com/) via `bun-plugin-tailwind`, ponto de
  entrada em `src/index.css`.
- [shadcn/ui](https://ui.shadcn.com/) usando como fonte de componentes (inputs,
  tables, etc.).
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

- [Bun](https://bun.sh/docs) — runtime, bundler, package manager
- [Biome](https://biomejs.dev/) — linting e formatação

## Convenções de código

- **Não usar `React.FC`** — use `function` declarations com tipagem direta de props
- **Barrel files** (`index.ts`) para re-exports limpos
- **`@/*`** como path alias para `src/*`
