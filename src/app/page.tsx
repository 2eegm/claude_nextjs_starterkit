import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Next.js 스타터킷</h1>
        <p className="text-muted-foreground mt-3">
          Next.js · TypeScript · Tailwind CSS · shadcn/ui · Prettier
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="font-semibold">포함된 도구</h2>
          <ul className="text-muted-foreground mt-2 space-y-1">
            <li>✓ Next.js 16 (App Router, Turbopack)</li>
            <li>✓ TypeScript 5</li>
            <li>✓ Tailwind CSS 4</li>
            <li>✓ shadcn/ui</li>
            <li>✓ Prettier + Tailwind 플러그인</li>
            <li>✓ ESLint (Prettier 통합)</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="font-semibold">시작하기</h2>
          <ul className="text-muted-foreground mt-2 space-y-1">
            <li>1. 이 페이지를 원하는 내용으로 교체</li>
            <li>2. shadcn 컴포넌트 추가</li>
            <li>3. npm run dev 로 개발 시작</li>
          </ul>
        </div>
      </div>

      <div className="flex gap-3">
        <Button>시작하기</Button>
        <Button variant="outline">README 보기</Button>
      </div>
    </main>
  )
}
