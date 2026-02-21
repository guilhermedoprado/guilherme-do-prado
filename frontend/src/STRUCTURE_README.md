# Estrutura de Pastas - CZECHCI

## /components/ui
Componentes genÃ©ricos que nÃ£o sabem nada sobre o negÃ³cio (ex: Button, Modal). SÃ£o puros e reutilizÃ¡veis em qualquer projeto.

## /features
Aqui mora a lÃ³gica de negÃ³cio (Feature-First Architecture). Cada pasta aqui deve ter seus prÃ³prios componentes, hooks e tipos.
Exemplo: '/features/dictionary' tem o componente 'SearchBar.tsx' que sÃ³ serve pro dicionÃ¡rio.

## /pages
Apenas montam as telas usando os componentes de /features e /components. NÃ£o devem ter muita lÃ³gica.

## /services
Onde o Axios fala com o Backend .NET (Guilherme-do-Prado.Api).
