# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **중요**: 이 프로젝트는 Next.js 16으로, 학습 데이터의 Next.js와 API·컨벤션·파일 구조가 다를 수 있다. 코드 작성 전 `node_modules/next/dist/docs/`의 관련 가이드를 확인하라.

## 명령어

```bash
npm run dev          # 개발 서버 실행 (localhost:3000, Turbopack)
npm run build        # 프로덕션 빌드
npm run lint         # ESLint 실행
npm run format       # Prettier 포맷 적용
npm run format:check # Prettier 포맷 검사
```

shadcn/ui 컴포넌트 추가:
```bash
npx shadcn@latest add <component-name>
```

## 아키텍처

**Next.js 16 App Router** 기반 스타터킷. 모든 소스코드는 `src/` 하위에 위치한다.

- `src/app/` — 라우트 및 레이아웃 (App Router)
- `src/components/ui/` — shadcn/ui 컴포넌트 (CLI로 추가됨, 직접 수정 가능)
- `src/lib/utils.ts` — `cn()` 유틸리티 (clsx + tailwind-merge)
- `src/hooks/` — 커스텀 훅 (shadcn CLI가 필요 시 자동 생성)

## 주요 설정

**CSS 변수 / 테마**: `src/app/globals.css`에 oklch 색상 토큰으로 정의. 라이트/다크 모드 모두 이 파일에서 관리한다. Tailwind 유틸리티 클래스는 이 토큰을 참조하므로 (`bg-background`, `text-foreground` 등) 하드코딩된 색상값 대신 토큰 기반 클래스를 사용해야 한다.

**shadcn/ui 스타일**: `base-nova` 스타일, `neutral` 베이스 컬러. shadcn 컴포넌트는 내부적으로 `@base-ui/react`를 primitive로 사용한다 (`src/components/ui/button.tsx` 참고). `components.json`에서 경로 alias를 관리한다.

**Import alias**: `@/*` → `src/*` (tsconfig.json `paths` 설정)

**Prettier**: `prettier-plugin-tailwindcss`로 Tailwind 클래스 순서 자동 정렬. `eslint-config-prettier`로 ESLint 충돌 방지 (`eslint.config.mjs` 마지막 항목에 위치해야 함).

**폰트**: Geist Sans / Geist Mono를 CSS 변수(`--font-geist-sans`, `--font-geist-mono`)로 주입 — `src/app/layout.tsx` 참고.
