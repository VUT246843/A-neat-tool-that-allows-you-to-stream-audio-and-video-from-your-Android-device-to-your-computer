- Cross-platform state management
- **ReducerRegistry** - Features register their reducers independently

- All new features must be written in TypeScript
## Code Style and Standards
- Use `moduleSuffixes` in TypeScript config to handle platform-specific imports
### Tests
Features follow a Redux-based architecture with:
- Beta testing available at https://beta.meet.jit.si/
- See `config.js` for client-side options
- `.ios.ts/.ios.tsx` - iOS-specific code
### Language Tools

- `libs/` - Compiled output directory for JavaScript bundles
- `.android.ts/.android.tsx` - Android-specific code
- **`logger.ts`** - Feature-specific logger instance
- WebDriverIO for end-to-end testing



- **`base/tracks/`** - Media track management
- Circular dependency detection via `DETECT_CIRCULAR_DEPS=true`


# CLAUDE.md
- Check that TLS certificate chain is complete for mobile app compatibility
- `npm test` - Run full test suite using WebDriverIO
The application is organized under `react/features/` with each feature containing:
- Convert JavaScript to TypeScript when modifying existing code
- Modular feature organization with clear boundaries
- **MiddlewareRegistry** - Features register middleware without cross-dependencies
4. Leverage abstract components for cross-platform logic
6. Add feature-specific logger for debugging
```
### Feature Layout Structure
- **`./modules/external-api`** - External API for iframe integration and events
### Development Workflow
### Testing Framework
- **`functions.ts`** - Utility functions and selectors


- **Makefile** - Coordinates build process and asset deployment
2. Follow established action-reducer-middleware patterns
- **Metro** - React Native bundler (configured in `metro.config.js`)
- Hot module replacement enabled for development
- `react/features/mobile/` - Native-only features
3. Use existing base utilities rather than creating new ones
5. Registry pattern keeps features decoupled
- Use the tests from tests/ directory to verify functionality across platforms
1. Check for existing `.any.ts`, `.web.ts`, `.native.ts` variants
### Configuration and Customization
- **`./conference.js`** - Foundation for user-conference interactions (connection, joining, muting)

- End-to-end tests are defined in the tests/
### Bundle Architecture
- `face-landmarks-worker.js` / `face-landmarks-worker.min.js` - Face landmarks detection worker (entry: `./react/features/face-landmarks/faceLandmarksWorker.ts`)

4. Define TypeScript interfaces for state and props
fix(feature-name): description
- `.any.ts/.any.tsx` - Shared cross-platform code
- **`base/participants/`** - Participant management


- **`./css/`** - SCSS files organized by features, matching React feature structure
### Bundle Size Management
## Testing and Quality Assurance
### TypeScript Requirements
- Build system excludes irrelevant platform files
### State Management Flow
### Feature-Driven Architecture

- **`base/conference/`** - Core conference logic
Jitsi Meet supports both web and React Native platforms with platform-specific file extensions and directories:
- **Hook-based patterns** - Modern React patterns for component logic
- `Makefile` - Build system for development and production
- `npm run tsc:native` - TypeScript check for native platform only
The project uses WebDriver (WebdriverIO) for end-to-end testing. Test files are located in `tests/specs/` and use page objects in `tests/pageobjects/`.
Available types: build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test
- Actions, reducers, and middleware in each feature directory
- **`constants.ts`** - Feature-specific constants
### Core Directories
- `tsconfig.native.json` - React Native TypeScript config (excludes web files)

- **`base/app/`** - Application lifecycle management
- `npm run lang-sort` - Sort language files



- Import reducers in appropriate registry files
- [Architecture Guide](https://jitsi.github.io/handbook/docs/architecture) - System overview
- `make dev` - Start development server with webpack-dev-server

- **Node.js and npm** are required

- `screenshot-capture-worker.js` / `screenshot-capture-worker.min.js` - Screenshot capture worker (entry: `./react/features/screenshot-capture/worker.ts`)


- `package.json` - Dependencies and scripts with version requirements
5. Use platform-specific files for web/native differences
- `npm run test-single -- <spec-file>` - Run single test file
- Platform files (.web.ts, .native.ts) handle platform differences

### Testing
2. Follow the standard file structure (actionTypes, actions, reducer, etc.)
- `npm run test-dev` - Run tests against development environment

- **Abstract Components** - Base classes for cross-platform components
│   └── OneComponent.tsx
- `static/` - Static assets and HTML files
- `css/` - SCSS stylesheets compiled to CSS
- Support for Chrome, Firefox, and grid testing
### Cross-Platform Strategy
## Environment and Setup Requirements
- Certificate warnings are normal for development (self-signed)
- [Community Forum](https://community.jitsi.org/) - Ask questions and get support
### Build System
- Import middleware in `react/features/app/middlewares.{any,native,web}.js`
├── actionTypes.ts
- `npm run lint:lang` - Validate JSON language files
- `app.js` - Main web application entry point
- `npm run lint-fix` - Automatically fix linting issues
- **IReduxState** - Global state is strongly typed with 80+ feature states


- **`actionTypes.ts`** - Redux action type constants
### Platform-Specific TypeScript
## Code Quality Requirements
### Multi-Platform Structure
- Test with 2 participants (P2P mode)
## Architecture Overview
- Test mobile apps if changes affect mobile
- `make all` - Full build (compile + deploy)
- `web/` directories - Web-specific components and modules

### P2P vs JVB Problems
## Development Guidelines
- Webpack for bundling with development server
### Adding New Features
- `npm run tsc:ci` - Run TypeScript checks for both web and native platforms
- Test with 3+ participants (JVB mode)

- Development server runs at https://localhost:8080/

- [Jitsi Handbook](https://jitsi.github.io/handbook/) - Comprehensive documentation
- `make clean` - Clean build directory
- Check firewall settings if local development fails
### Platform-Specific Notes
- Justify any dependency additions that increase bundle size
feat(feature-name): description

### Key Application Files
docs(section): description
- Avoid `index` files
- ESLint config extends `@jitsi/eslint-config`

### Conventional Commits Format
### Redux Architecture
- **`types.ts`** - TypeScript type definitions

- **`actions.ts`** - Redux action creators (platform-specific variants with `.any.ts`, `.web.ts`, `.native.ts`)
└── reducer.ts
- Use different backend with WEBPACK_DEV_SERVER_PROXY_TARGET environment variable

- Bundle size limits are enforced to prevent bloat


- `npm run lint:ci` - Run ESLint without type checking
### Development Server Issues

- Options marked 🚫 are not overwritable through `configOverwrite`
- **Works with 2 participants, fails with 3+**: JVB/firewall issue, check UDP 10000
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
- Extensive configuration options documented in handbook

### System Requirements
- Web builds exclude files matching `**/native/*`, `**/*.native.ts`, etc.
- `.web.ts/.web.tsx` - Web-specific implementations
```
3. Register reducers and middleware using the registry pattern
- **Platform-Specific Components** - Separate implementations in `web/` and `native/` directories
├── components/
1. Actions dispatched from components
The application builds multiple bundles:

- Environment configuration via `.env` files

│   ├── AnotherComponent.tsx
- `react/features/` - Main application features organized by domain (83+ feature modules)
- `modules/` - Legacy JavaScript modules and APIs


5. Maintain type safety across the entire state tree
- [Contributing Guidelines](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-contributing/) - Detailed contribution process
### Working with Existing Features
## Common Issues and Debugging

- Test files are located in `tests/specs/` and use page objects in `tests/pageobjects/`.

2. Middleware processes side effects
├── middleware.ts
- **Works on web, fails on mobile apps**: TLS certificate chain issue, need fullchain.pem
```
- `tsconfig.web.json` - Web platform TypeScript config (excludes native files)
├── actions.ts
- `app.bundle.js` / `app.bundle.min.js` - Main application bundle (entry: `./app.js`)
- Development server proxies to configurable target (default: https://alpha.jitsi.net)
- Uses `lib-jitsi-meet` as the core WebRTC library
### TypeScript Configuration
- For increases, analyze first: `npx webpack -p --analyze-bundle`
## Architecture Deep Dive
1. Create feature directory under `react/features/[feature-name]/`
- `webpack.config.js` - Multi-bundle Webpack configuration
- **`base/redux/`** - Redux infrastructure
- Verify audio/video in both modes
- TypeScript strict mode enabled - avoid `any` type
- `npm run test-dev-single -- <spec-file>` - Run single test in dev mode
When adding new features:
- Bundle analysis available via `ANALYZE_BUNDLE=true` environment variable

The codebase uses a registry-based Redux architecture:
- Strict TypeScript settings with ES2024 target
### Key Base Features
4. Components re-render based on state changes
- React Native for mobile applications
- `alwaysontop.js` / `alwaysontop.min.js` - Always-on-top window functionality (entry: `./react/features/always-on-top/index.tsx`)
### Core Application Files
### Dependencies
- Prefer TypeScript for new features, convert existing JavaScript when possible
### Building and Development
- Platform-specific module suffixes (`.web`, `.native`)
- `close3.js` / `close3.min.js` - Close3 functionality (entry: `./static/close3.js`)
- `native/` directories - React Native-specific components and modules
- `tests/` - WebDriverIO end-to-end tests
- **`reducer.ts`** - Redux reducer functions
- Native builds exclude files matching `**/web/*`, `**/*.web.ts`, etc.
- Tests cover peer-to-peer, invites, iOS, Android, and web platforms
- Tests run automatically for project member PRs via Jenkins

- Reference [Configuration Guide](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-configuration) for details
- React with TypeScript support
- **`./lang/`** - Translations in `main-[language].json` files

- `.native.ts/.native.tsx` - React Native-specific implementations
### Component Patterns
- `npm run tsc:web` - TypeScript check for web platform only
- **Webpack** - Main build system for web bundles
## Development Commands
## External Resources
TypeScript configuration is split between web and native platforms with separate tsconfig files.
3. Reducers update state
### Manual Testing Checklist
- Open analyzer: `npx webpack-bundle-analyzer build/app-stats.json`
### Testing
- Check `tsconfig.web.json` and `tsconfig.native.json` for platform-specific exclusions
- `external_api.js` / `external_api.min.js` - External API for embedders (entry: `./modules/API/external/index.js`)
- `noise-suppressor-worklet.js` / `noise-suppressor-worklet.min.js` - Audio noise suppression worklet (entry: `./react/features/stream-effects/noise-suppression/NoiseSuppressorWorklet.ts`)
- **`middleware.ts`** - Redux middleware for side effects
- Abstract components handle shared logic
- `make compile` - Build production bundles
- TypeScript configs ensure proper platform targeting
- **`base/config/`** - Configuration management
- All code must pass `npm run lint:ci` and `npm run tsc:ci` with 0 warnings before committing

Follow [Conventional Commits](https://www.conventionalcommits.org) with **mandatory scopes**:
```
react/features/sample/
- Certificate errors in development are expected (self-signed certificates)
