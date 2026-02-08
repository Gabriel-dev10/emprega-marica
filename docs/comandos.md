# Comandos Essenciais do Projeto

## Instalação e Dependências
```bash
bun install           # Instalar dependências
bun add <pacote>      # Adicionar pacote
bun add -D <pacote>   # Adicionar pacote dev
bun remove <pacote>   # Remover pacote
```

## Desenvolvimento
```bash
bun run dev           # Iniciar servidor de desenvolvimento
bun run build         # Build de produção
bun run start         # Executar build
```

## Qualidade de Código (Biome)
```bash
bun run lint          # Verificar problemas
bun run lint:fix      # Corrigir problemas
bun run format        # Formatar código
bun run check         # Verificar tudo
bun run check:fix     # Corrigir tudo
```

## Fluxo Recomendado
1. Instale dependências: `bun install`
2. Inicie o dev server: `bun run dev`
3. Corrija código: `bun run check:fix`
4. Faça build: `bun run build`

## Troubleshooting
```bash
rm -rf node_modules bun.lockb   # Resetar dependências
rm -rf dist                    # Limpar build
```

## Dicas
- Use `bun run check:fix` antes de cada commit
- Configure pre-commit hooks para evitar erros
- Consulte a documentação oficial:
  - [Bun](https://bun.sh/docs)
  - [Biome](https://biomejs.dev)
  - [React](https://react.dev)
