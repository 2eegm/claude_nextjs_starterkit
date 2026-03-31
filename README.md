# Next.js 스타터킷

신규 Next.js 프로젝트 시작 시 clone하여 사용하는 스타터킷입니다.

## 포함된 도구

| 도구                                         | 버전   | 용도                               |
| -------------------------------------------- | ------ | ---------------------------------- |
| [Next.js](https://nextjs.org)                | 16.x   | 프레임워크 (App Router, Turbopack) |
| [TypeScript](https://www.typescriptlang.org) | 5.x    | 타입 안전성                        |
| [Tailwind CSS](https://tailwindcss.com)      | 4.x    | 유틸리티 기반 스타일링             |
| [shadcn/ui](https://ui.shadcn.com)           | latest | UI 컴포넌트                        |
| [Prettier](https://prettier.io)              | 3.x    | 코드 포맷터                        |
| [ESLint](https://eslint.org)                 | 9.x    | 코드 린터                          |

## 시작하기

```bash
# 저장소 클론
git clone <repository-url> my-project
cd my-project

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 사용 가능한 명령어

```bash
npm run dev          # 개발 서버 실행 (localhost:3000)
npm run build        # 프로덕션 빌드
npm run start        # 프로덕션 서버 실행
npm run lint         # ESLint 실행
npm run format       # Prettier 포맷 적용
npm run format:check # Prettier 포맷 검사
```

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add <component-name>

# 예시
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add form
```

전체 컴포넌트 목록: https://ui.shadcn.com/docs/components

---

## 추천 추가 도구

필요에 따라 아래 도구들을 추가할 수 있습니다.

### 범용 (대부분의 프로젝트에 적합)

```bash
# 스키마 유효성 검사
npm i zod

# 폼 상태 관리
npm i react-hook-form @hookform/resolvers

# 서버 상태 관리 (API 데이터 캐싱/동기화)
npm i @tanstack/react-query

# 클라이언트 상태 관리
npm i zustand
```

### 프로젝트 규모에 따라 선택

```bash
# 인증 (Auth.js v5)
npm i next-auth@beta

# 다국어 지원 (i18n)
npm i next-intl

# HTTP 클라이언트
npm i axios
# 또는 경량 대안
npm i ky

# Vercel 분석
npm i @vercel/analytics
```

### 코드 품질 강화

```bash
# pre-commit 훅 (커밋 전 lint/format 자동 실행)
npm i -D husky lint-staged
npx husky init

# 커밋 메시지 컨벤션 강제
npm i -D @commitlint/cli @commitlint/config-conventional

# 유닛 테스트
npm i -D vitest @testing-library/react @testing-library/jest-dom
```

## VS Code 확장 프로그램

`.vscode/extensions.json`에 권장 확장 목록이 포함되어 있습니다.
VS Code에서 프로젝트를 열면 설치를 권장합니다.

- **Prettier** (`esbenp.prettier-vscode`) — 저장 시 자동 포맷
- **ESLint** (`dbaeumer.vscode-eslint`) — 실시간 린트
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) — 클래스 자동완성
