import { ShieldCheck } from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';

const visibilityEndpoint =
  import.meta.env.VITE_CAREER_HOME_VISIBILITY_URL ||
  'https://career.chenhun.me/api/public/career-home-visibility';

type VisibilityState = 'checking' | 'visible' | 'hidden';

interface VisibilityGateProps {
  children: ReactNode;
}

export default function VisibilityGate({ children }: VisibilityGateProps) {
  const [state, setState] = useState<VisibilityState>('checking');

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 5000);

    async function checkVisibility() {
      try {
        const response = await fetch(visibilityEndpoint, {
          cache: 'no-store',
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error('Visibility check failed');
        }
        const payload = (await response.json()) as { visible?: boolean };
        setState(payload.visible === true ? 'visible' : 'hidden');
      } catch {
        setState('hidden');
      } finally {
        window.clearTimeout(timeoutId);
      }
    }

    void checkVisibility();

    return () => {
      controller.abort();
      window.clearTimeout(timeoutId);
    };
  }, []);

  if (state === 'visible') {
    return <>{children}</>;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f3f0e8] text-[#1f2520]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#173f35] via-[#b86f24] to-[#38556a]" />
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16">
        <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#cfc7b8] bg-white/70 px-4 py-2 text-sm font-medium text-[#526158] shadow-sm">
          <ShieldCheck size={16} />
          <span>{state === 'checking' ? '正在校验作品集展示状态' : '作品集暂不公开'}</span>
        </div>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#8b6a3b]">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-[#18211d] md:text-6xl">
            {state === 'checking' ? '请稍候' : '网站主关闭了作品集展示'}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#60716a]">
            {state === 'checking'
              ? '页面会在校验通过后展示完整内容。'
              : '如需查看相关经历或作品，请等待网站主重新开启展示。'}
          </p>
        </div>
      </section>
    </main>
  );
}
