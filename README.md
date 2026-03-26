# EmpregaAí Maricá — Plataforma SaaS de Empregos

O **EmpregaAí Maricá** é uma plataforma SaaS focada em conectar talentos locais às empresas de Maricá - RJ. Este projeto preza por uma experiência de usuário premium, alta performance e um código extremamente rigoroso e escalável.

## 🚀 Stack Tecnológica

- **Runtime & Package Manager:** [Bun](https://bun.sh/) (Exclusivo)
- **Frontend:** React (Componentes Funcionais + Hooks)
- **Linguagem:** TypeScript (Strict Mode)
- **Estilização:** Tailwind CSS v4 (Design System Customizado)
- **Linting & Formatação:** Biome
- **Ícones:** Lucide React

---

## 🏗️ Arquitetura (Feature Sliced Design)

O projeto segue a metodologia **FSD**, dividindo o código em camadas de responsabilidade:

- `src/features/`: Módulos de negócio isolados (ex: `auth`, `landing`, `vagas`). Contém lógica específica, schemas e sub-componentes daquela feature.
- `src/shared/`: O alicerce do projeto.
  - `ui/`: Componentes atômicos e genéricos (Button, Input, Card).
  - `lib/`: Utilitários, constantes e configurações globais.
  - `context/`: Provedores de estado global (ex: `auth-context`).
- `src/layouts/`: Estruturas de página recorrentes (Header, Footer, AuthLayout).
- `src/pages/`: Composição final das rotas, unindo layouts e features.

---

## 🗺️ Mapa do Projeto (Estrutura de Pastas)

```text
src/
├── features/           # Lógica de negócio por domínio
│   ├── auth/           # Fluxos de login e cadastro (Candidato/Empresa)
│   ├── landing/        # Seções da Landing Page
│   └── schema/         # Validações Zod específicas de domínio
├── layouts/            # Estruturas visuais gerais
│   ├── auth/           # Layout de páginas de autenticação
│   ├── header/         # Cabeçalho global
│   └── footer/         # Rodapé global
├── pages/              # Páginas da aplicação (Entry points das rotas)
├── shared/             # Código altamente reutilizável
│   ├── ui/             # Design System (Componentes base)
│   ├── api/            # Configurações de API e Mocks
│   ├── context/        # React Contexts (Auth, UI)
│   └── lib/            # Utils, Masks e Schemas compartilhados
└── types/              # Definições de tipos globais
```

---

## 📏 Boas Práticas e Regras de Ouro

### 1. Código Limpo (Clean Code)
- **Sem Comentários:** O código deve ser autoexplicativo. Use nomes de variáveis e funções semânticos. Comentários são permitidos apenas em JSDoc para lógicas complexas.
- **DRY & SOLID:** Se uma interface de UI se repete, ela pertence ao `shared/ui`.

### 2. TypeScript Estrito
- **Proibido o uso de `any`:** Toda e qualquer informação deve ser tipada ou ter uma interface definida.
- **Enums/Constants:** Use constantes para valores fixos (ex: distritos, status).

### 3. UI/UX Premium (Dark Mode)
- **Cores:** Utilize exclusivamente as variáveis CSS definidas no `index.css` (ex: `text-text-default`, `bg-neutral-950`).
- **Glassmorphism:** Para elementos em destaque, use: `bg-neutral-900/40 backdrop-blur-md border border-neutral-800`.
- **Responsividade:** Abordagem Mobile-first obrigatória.

---

## 🛠️ Comandos Úteis

Sempre utilize o **Bun**:

```bash
# Instalar dependências
bun install

# Rodar em desenvolvimento
bun dev

# Formatar e verificar Lint (Biome)
bun biome check --write .

# Rodar testes
bun test
```

---

## 📄 Guia de Estilo (Tailwind v4)

O projeto utiliza um tema customizado baseado em `neutral-950` para o fundo e `primary-500` (azul corporativo) para acentos. Evite cores "hardcoded" (ex: `text-white`), prefira `text-text-default`.
