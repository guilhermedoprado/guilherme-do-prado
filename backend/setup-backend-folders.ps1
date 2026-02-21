<#
.SYNOPSIS
    Script de Estrutura de Pastas Backend - Clean Architecture "State of the Art"
.DESCRIPTION
    Cria a hierarquia de pastas internas para Domain, Application, Infra e API.
    Baseado no projeto: Guilherme-do-Prado
#>

$projectName = "Guilherme-do-Prado"

# Mapeamento de Pastas por Camada
$structure = @{
    
    # --- 1. DOMAIN (O Coração - Sem dependências externas) ---
    "$projectName.Domain" = @(
        "Common",           # Classes base (EntityBase, ValueObject)
        "Entities",         # Suas tabelas de negócio (User, Flashcard, Text)
        "Enums",            # Enumerações (UserRole, TextDifficulty)
        "Events",           # Domain Events (UserRegisteredEvent)
        "Exceptions",       # Erros de negócio (DomainException)
        "Interfaces",       # CONTRATOS: IRepository, IUnitOfWork (Interfaces vivem aqui!)
        "ValueObjects"      # Objetos imutáveis (Email, CPF, Address)
    )

    # --- 2. APPLICATION (Regras de Negócio e Orquestração) ---
    "$projectName.Application" = @(
        "Common\Behaviors", # Pipelines do MediatR (Logging, Validation)
        "Common\Interfaces",# Interfaces de Serviços (IEmailService, ICurrentUserService)
        "DTOs",             # Data Transfer Objects (Inputs e ViewModels)
        "Mappings",         # AutoMapper Profiles
        "UseCases",         # CQRS: Pastas divididas por funcionalidade (Auth, Dashboard, Reader)
        "Validators"        # FluentValidation rules
    )

    # --- 3. INFRASTRUCTURE (O mundo real: Banco, Arquivos, APIs externas) ---
    "$projectName.Infrastructure" = @(
        "Identity",                 # Configurações do ASP.NET Identity / JWT
        "Persistence\Contexts",     # DbContext do EF Core
        "Persistence\Repositories", # Implementação de IRepository (Aqui vai o código SQL/LINQ)
        "Persistence\Configurations",# Entity Framework Fluent API (Mapeamento Tabela-Objeto)
        "Persistence\Migrations",   # (Gerado automaticamente, mas bom ter a pasta)
        "Services"                  # Implementação de serviços externos (EmailService, DateTimeService)
    )

    # --- 4. API (A porta de entrada) ---
    "$projectName.Api" = @(
        "Controllers",      # Endpoints REST
        "Middlewares",      # Tratamento global de erros, RateLimiting
        "Extensions",       # Configuração de DI (ServiceCollectionExtensions)
        "Filters",          # Filtros de Ação/Autorização
        "Services"          # Serviços específicos da UI (CurrentUserService)
    )
}

Write-Host "Iniciando criação da estrutura no diretório atual..." -ForegroundColor Cyan

foreach ($projectPath in $structure.Keys) {
    # Verifica se a pasta do projeto existe no diretório atual
    if (Test-Path $projectPath) {
        Write-Host "Processando: $projectPath" -ForegroundColor Yellow
        
        foreach ($subFolder in $structure[$projectPath]) {
            $fullPath = Join-Path -Path $projectPath -ChildPath $subFolder
            
            if (-not (Test-Path $fullPath)) {
                New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
                Write-Host "  + Criado: $subFolder" -ForegroundColor Green
                
                New-Item -ItemType File -Path "$fullPath\.gitkeep" -Force | Out-Null
            } else {
                Write-Host "  = Já existe: $subFolder" -ForegroundColor DarkGray
            }
        }
    } else {
        Write-Warning "Projeto não encontrado: $projectPath. (Você está na pasta correta? Deveria ver as pastas .Domain, .Api aqui)"
    }
}

Write-Host "`n Estrutura de Backend finalizada! 🚀" -ForegroundColor Cyan
