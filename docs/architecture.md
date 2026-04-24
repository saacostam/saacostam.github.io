# Architecture

This document describes the architectural principles and structure used across projects.

It is framework-aware but business-agnostic.  
It documents intentional trade-offs rather than enforcing architectural purity.

---

## Philosophy

This architecture follows a **pragmatic interpretation of Clean Architecture**.

The goal is not strict theoretical correctness, but:

- Clear separation of concerns
- Predictable dependency direction
- Safe refactoring
- Testable business rules
- Low accidental complexity

Where architectural purity conflicts with React ergonomics or developer experience, pragmatism wins.

---

## Overall Structure

The codebase is organized **vertically by feature**.

Features group together everything related to a specific capability of the application, improving locality, discoverability, and ownership.

Feature boundaries are intentionally **soft**.  
Architectural correctness is enforced primarily through **layered dependency rules**, not strict feature isolation.

---

## Layers and Responsibilities

Each feature may contain multiple layers.

### Domain

The domain layer contains business rules and invariants.

It:
- Is framework-agnostic
- Contains no React
- Performs no I/O
- Has no knowledge of infrastructure implementations
- Defines interfaces and contracts for external dependencies

The domain encodes business logic and validation rules and is designed to be easily testable in isolation.

---

### App

The app layer orchestrates behavior.

It typically contains:
- React hooks
- Async orchestration
- Query and mutation logic
- Context consumers (not providers)
- Coordination between domain logic and infrastructure

The app layer is responsible for lifecycle management and side-effects.

---

### UI

The UI layer contains renderable React components.

It:
- Renders state
- Owns providers
- Connects user interactions to app hooks
- Manages presentation concerns

Very simple or highly reusable components may skip the app layer when no orchestration is required.

---

### Infrastructure

Infrastructure contains implementations of external dependencies.

This includes:
- Adapters over libraries or SDKs
- API clients
- Other external integrations

Infrastructure depends on domain-defined contracts, never the other way around.

---

## Domain Model Approach

The domain is intentionally **anemic**.

This is a deliberate decision.

The architecture favors:
- Interfaces over classes
- Pure functions over stateful objects
- Explicit services for applying business rules

Domain services represent business logic, validation, or decision-making.  
They do not perform fetching, persistence, or external integration.

This approach aligns with:
- React’s functional programming model
- TypeScript’s structural typing
- Easier unit testing
- Lower cognitive overhead

---

## Dependency Management

Dependencies are introduced consciously and with explicit roles.

### Adapters

Adapters abstract over third-party libraries or SDKs.

They:
- Hide implementation details
- Normalize external APIs
- Live in shared infrastructure

Adapters are injected via global context providers.

---

### Clients

Clients abstract over API communication.

They:
- Encapsulate external API calls
- Are typically feature-scoped

Clients are distinct from adapters to clearly separate:
- Library integration
- External system communication
- Business logic

Clients are injected via global context providers.

---

### Dependency Injection

Dependencies are injected via global context providers.

The domain defines contracts.  
Infrastructure provides implementations.  
The app layer consumes them.

This keeps integration concerns out of domain logic and preserves testability.

---

## Abstraction Philosophy

Abstractions are introduced selectively.

Core libraries that define the programming model — such as:
- React
- React Query
- React Hook Form
- Zod

are treated as first-class dependencies and are **not** abstracted behind custom interfaces.

The cost of abstraction (indirection, leaky proxies, cognitive overhead) is considered higher than the risk of vendor lock-in for these cases.

Abstraction is used when it:
- Protects business logic
- Clarifies boundaries
- Reduces coupling to volatile systems
- Simplifies testing

It is avoided when it:
- Adds indirection without leverage
- Obscures the underlying programming model

---

## Error Model

The system uses a single domain-level error abstraction: `DomainError`.

Domain errors enrich failures with:
- A domain-specific type (similar in spirit to HTTP status codes)
- User-facing context
- Developer-facing context

Errors are treated as data.

This allows:
- Full context to be logged
- User-safe messaging to be displayed
- Metadata to be preserved across layers

UI components may render or log these errors, but do not introduce new error semantics.

---

## Feature Boundaries and Dependency Rules

Features exist for organization and cohesion, not strict isolation.

Architectural correctness is enforced through **layer direction**, even when crossing feature boundaries.

### Layer Direction Rules

- UI → App → Domain
- Infrastructure → Domain
- Domain does not depend on UI, App, or Infrastructure

These rules apply across feature boundaries.

---

### Domain Reuse Across Features

Domain modules may be reused across features when concepts overlap.

This is acceptable because domain code:
- Is pure
- Has no side effects
- Has no framework coupling

The goal is to prevent inappropriate dependencies, not to forbid reuse.

---

### UI Composition Across Features

Features may render other features **at the UI layer only**.

This allows:
- Natural composition within the React component tree
- Feature UIs to manage their own lifecycle
- Independent data fetching and error handling

With React Query, components are expected to fully manage their own async lifecycle.

---

## Data Flow

A typical flow looks like:

UI → App hook → Domain service → App → UI

Async logic and side-effects live in the app layer.  
Business rules live in the domain layer.  
Rendering lives in the UI layer.

Infrastructure is accessed only through injected dependencies.

---

## Testing Strategy

The architecture follows a **testing diamond** rather than a strict testing pyramid.

- Domain logic is tested with pure unit tests
- Application behavior is tested primarily with integration tests
- External systems are mocked at clear architectural boundaries

Explicit boundaries make it easy to mock only true external dependencies while keeping internal logic realistic.

The goal is:
- Refactor-resistant tests
- Minimal over-mocking
- High confidence in behavior

---

## Non-Goals

This architecture does not aim to:

- Enforce strict hexagonal purity
- Fully isolate features as independent modules
- Abstract every external dependency
- Model rich object-oriented aggregates

The priority is clarity, refactorability, and pragmatic evolution over theoretical purity.
