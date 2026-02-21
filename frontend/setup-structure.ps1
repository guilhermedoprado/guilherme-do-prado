<#
.SYNOPSIS
    Script PowerShell para criar Estrutura de Pastas React (Feature-First) para o projeto CZECHCI.
.DESCRIPTION
    Cria a árvore de diretórios baseada em Domain/Feature Driven Design e adiciona .gitkeep.
.AUTHOR
    Perplexity para Guilherme-do-Prado
#>

$baseDir = "src"

# --- 1. Verificação de Segurança ---
# Verifica se estamos na raiz de um projeto (procura package.json)
if (-not (Test-Path "package.json")) {
    Write-Warning "AVISO: 'package.json' não encontrado."
    Write-Warning "Certifique-se de estar na raiz do projeto React."
    
    $confirmation = Read-Host "Deseja continuar mesmo assim? (S/N)"
    if ($confirmation -ne 'S') {
        Write-Host "Operação cancelada." -ForegroundColor Red
        exit
    }
}

# --- 2. Definição da Estrutura ---
$folders = @(
    # Assets
    "$baseDir\assets\images",      # Imagens estáticas (logos, backgrounds)
    "$baseDir\assets\icons",       # Ícones SVG
    "$baseDir\assets\fonts",       # Fontes locais

    # Components
    "$baseDir\components\ui",      # Componentes "burros" e reutilizáveis (Button, Input, Card)
    "$baseDir\components\layout",  # Header, Footer, Sidebar

    # Core
    "$baseDir\config",             # Variáveis de ambiente, constantes globais
    "$baseDir\context",            # React Context API (AuthContext, ThemeContext)
    "$baseDir\hooks",              # Custom Hooks globais (useDebounce, useLocalStorage)
    "$baseDir\layouts",            # Layouts de página (AuthLayout, DashboardLayout)
    "$baseDir\lib",                # Configurações de libs terceiras (axios.ts, firebase.ts)
    "$baseDir\routes",             # Definição de rotas (AppRoutes.tsx)
    "$baseDir\services\api",       # Chamadas ao Backend C#
    "$baseDir\styles",             # CSS Global / Tailwind config
    "$baseDir\types",              # Interfaces TypeScript globais
    "$baseDir\utils",              # Funções utilitárias puras (formatDate, currency)
    "$baseDir\pages",              # As páginas que o Router vai chamar

    # --- FEATURES (Onde a mágica acontece) ---
    "$baseDir\features"       # Cada pasta aqui é uma feature/domain do sistema (ex: Dictionary, User, Auth)
)

# --- 3. Execução da Criação ---
Write-Host "Criando estrutura de pastas em '$baseDir'..." -ForegroundColor Cyan

foreach ($folder in $folders) {
    if (-not (Test-Path $folder)) {
        # Cria o diretório (e subdiretórios se necessário)
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
        Write-Host " + Criado: $folder" -ForegroundColor Green

        # Cria um arquivo .gitkeep para garantir que o git suba a pasta vazia
        New-Item -ItemType File -Path "$folder\.gitkeep" -Force | Out-Null
    }
    else {
        Write-Host " = Já existe: $folder" -ForegroundColor DarkGray
    }
}

# --- 4. Documentação (README da Estrutura) ---
$readMeContent = @"
# Estrutura de Pastas - CZECHCI

## /components/ui
Componentes genéricos que não sabem nada sobre o negócio (ex: Button, Modal). São puros e reutilizáveis em qualquer projeto.

## /features
Aqui mora a lógica de negócio (Feature-First Architecture). Cada pasta aqui deve ter seus próprios componentes, hooks e tipos.
Exemplo: '/features/dictionary' tem o componente 'SearchBar.tsx' que só serve pro dicionário.

## /pages
Apenas montam as telas usando os componentes de /features e /components. Não devem ter muita lógica.

## /services
Onde o Axios fala com o Backend .NET (Guilherme-do-Prado.Api).
"@

# Escreve o arquivo README
Set-Content -Path "$baseDir\STRUCTURE_README.md" -Value $readMeContent -Encoding UTF8

Write-Host "`nSucesso! Estrutura criada. Agora é só codar o CZECHCI! 🚀" -ForegroundColor Yellow
