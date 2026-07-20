# TS Server Restart Shortcut

Reinicie o TS Server do VS Code com um clique, direto na barra de status — sem precisar abrir a paleta de comandos.

## Recursos

- Botão `$(refresh) TS Server` na barra de status (canto direito).
- Reinicia o TypeScript Server (`typescript.restartTsServer`) com um clique.
- Feedback visual durante o restart (ícone de spinner) e log detalhado no Output Channel "TS Server Restart Shortcut".
- Evita cliques duplicados enquanto um restart já está em andamento.
- Também disponível via paleta de comandos: **Restart TS Server**.

## Uso

1. Clique no botão **TS Server** na barra de status inferior direita.
2. Aguarde o ícone voltar ao normal — o restart foi concluído (ou consulte o Output Channel se quiser confirmar).

## Requisitos

- VS Code `^1.125.0` ou superior.
- Nenhuma dependência adicional — funciona com o suporte a TypeScript já embutido no VS Code.

## Extension Settings

Esta extensão não adiciona configurações. Nenhuma configuração adicional é necessária.

## Problemas conhecidos

Nenhum reportado até o momento. Encontrou um bug? Abra uma issue no repositório do projeto.

## Release Notes

Veja o [CHANGELOG.md](CHANGELOG.md) para o histórico de versões.

## Licença

[MIT](LICENSE)
