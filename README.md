# 🏫 Classroom v4.0

Sistema de gestão pedagógica para controle de vistos, diário de classe e automação de notas para o **SIAP**.

## 🛠️ Principais Recursos
- **Login Seguro:** Acesso via senha criptografada.
- **Vistos Flexíveis:** Até 6 campos de vistos por aula com títulos editáveis.
- **Layout Inteligente:** Nome do aluno fixo na lateral para facilitar o preenchimento no celular.
- **Ordem SIAP:** Mantém a ordem exata da lista importada (não alfabetiza automaticamente).
- **Cálculo de Nota 10:** Converte automaticamente o total de vistos em nota 10,0 proporcional.
- **Robô SIAP:** Exportação de dados via JSON para preenchimento automático.

## 📂 Estrutura de Pastas
- `/` : Arquivo principal `index.html`.
- `/classroom-siap-scripts` : Scripts para colar no console F12 do SIAP.
- `/classroom-assets` : Arquivos de imagem e `manifest.json` para instalação PWA.

## 🚀 Como Iniciar
1. Configure seu Firebase e cole as credenciais no `index.html`.
2. Acesse a aba **Ajustes** para importar seus alunos (cole a lista do SIAP).
3. Na aba **Vistos**, registre a produção diária.
4. No fechamento, use o botão **Copiar para SIAP** e execute o script robô no site do governo.

---
*Desenvolvido pelo Prof. Bernard para otimizar o tempo em sala de aula.*
