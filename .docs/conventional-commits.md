# Conventional Commits

O projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/).

## Tipos Permitidos

| Tipo | Descrição |
|------|-----------|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `refactor:` | Refatoração de código |
| `docs:` | Documentação |
| `style:` | Formatação (sem mudança lógica) |
| `chore:` | Tarefas de manutenção |
| `perf:` | Performance |
| `test:` | Testes |
| `ci:` | CI/CD |

## Formato

```
<tipo>(escopo opcional): <descrição>
```

## Exemplos

```bash
feat(contacts): add validation to contact form
fix(hero): correct mobile spacing issue
refactor(components): extract button variants to CVA
docs(readme): update installation steps
chore: update dependencies
```

## Regras

- Use tempo verbal imperativo ("add" não "added")
- Primeira letra minúscula após o tipo
- Limite de 72 caracteres para o título
- Body separado por linha vazia após o título
- Referencie issues quando aplicável (ex: #123)