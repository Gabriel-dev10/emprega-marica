# Bun React Template

Um template moderno para aplicações React usando Bun, Vite, TailwindCSS v4 e TypeScript.

## 🚀 Stack

- **Runtime**: Bun 1.3+
- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS v4
- **Language**: TypeScript
- **Routing**: React Router v7
- **State Management**: TanStack Query (React Query) v5
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Linting/Formatting**: Biome

## 📦 Dependências Principais

### Produção
- `react` & `react-dom` - React 19
- `react-router-dom` - Roteamento
- `@tanstack/react-query` - Gerenciamento de estado assíncrono
- `react-hook-form` - Gerenciamento de formulários
- `zod` - Validação de schemas
- `@hookform/resolvers` - Integração Zod + React Hook Form
- `lucide-react` - Ícones
- `tailwind-merge` & `clsx` - Utilitários CSS
- `class-variance-authority` - Variantes de componentes

### Desenvolvimento
- `vite` - Build tool
- `@vitejs/plugin-react` - Plugin React para Vite
- `tailwindcss` & `@tailwindcss/vite` - TailwindCSS v4
- `@biomejs/biome` - Linter e formatter
- `typescript` - Tipagem estática

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
bun dev

# Build para produção
bun build

# Iniciar servidor de produção
bun start

# Linting
bun lint          # Verificar erros
bun lint:fix      # Corrigir automaticamente

# Formatação
bun format        # Formatar código

# Verificação completa
bun check         # Verificar tudo
bun check:fix     # Corrigir tudo
```

## 🚦 Como Usar

1. **Instalar dependências**:
   ```bash
   bun install
   ```

2. **Iniciar servidor de desenvolvimento**:
   ```bash
   bun dev
   ```

3. **Acessar**: http://localhost:3000

## 📁 Estrutura do Projeto

```
saas-emprego/
├── src/
│   ├── lib/
│   │   └── utils.ts          # Utilitários (cn, etc)
│   ├── pages/
│   │   └── Home.tsx          # Página inicial
│   ├── App.tsx               # Componente raiz com rotas
│   ├── main.tsx              # Entry point
│   └── index.css             # Estilos globais
├── index.html                # HTML template
├── vite.config.ts            # Configuração Vite
├── tsconfig.json             # Configuração TypeScript
├── biome.json                # Configuração Biome
└── package.json              # Dependências e scripts
```

## ✨ Features

- ⚡ **Bun** - Runtime ultra-rápido
- 🎨 **TailwindCSS v4** - Última versão com @import
- 📋 **Formulários validados** - React Hook Form + Zod
- 🔄 **React Query** - Cache e sincronização de dados
- 🎯 **TypeScript** - Type safety completo
- 🧹 **Biome** - Linting e formatação modernos
- 🚀 **Vite** - Build extremamente rápido

## 🎯 Próximos Passos

- Adicionar componentes reutilizáveis em `src/components/`
- Configurar variáveis de ambiente
- Adicionar testes com Bun test
- Configurar CI/CD
- Adicionar mais páginas e rotas

---

Desenvolvido com ❤️ usando Bun + React
