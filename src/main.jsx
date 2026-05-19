import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Database,
  FileText,
  Filter,
  KeyRound,
  Layers3,
  ListChecks,
  MessageSquareText,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Tv,
  Youtube,
} from 'lucide-react';
import './styles.css';

const stats = [
  { label: '감시 채널', value: '5', note: '활성 YouTube 채널', icon: Tv },
  { label: '수집 영상', value: '88', note: '로컬 DB 기준', icon: Database },
  { label: '후보 리포트', value: '29', note: '사업화 조사서', icon: FileText },
  { label: '최근 실행', value: '성공', note: '2026-05-09 daily', icon: CheckCircle2 },
];

const channels = [
  { handle: '@online-money', title: '돈버는 온라인자판기' },
  { handle: '@다함께_잡잡잡', title: '다함께 잡잡잡' },
  { handle: '@moneyinside7', title: '머니인사이드' },
  { handle: '@머니멘터리', title: '머니멘터리' },
  { handle: '@돈강', title: '돈강TV - 함께 돈 버는 길잡이' },
];

const workflow = [
  { title: '채널 스캔', text: '등록 채널의 공개 업로드 목록을 매일 확인합니다.', icon: Youtube },
  { title: '제목 필터링', text: '수익, 자동화, 부업, 금액 표현 같은 실행 신호를 탐지합니다.', icon: Filter },
  { title: '1차 조사서', text: '사업화 가능성, MVP 난이도, 리스크를 먼저 요약합니다.', icon: FileText },
  { title: 'Telegram 승인', text: '진행, 보류, 제외 결정을 받아 다음 리포트로 넘깁니다.', icon: MessageSquareText },
  { title: '워크플로우 작성', text: '승인된 후보만 프로그램화 절차와 검증 플랜을 만듭니다.', icon: Layers3 },
];

const checks = [
  '공식 YouTube Data API 기반 메타데이터 우선',
  '권한 없는 영상 파일 다운로드 금지',
  '자막 전문 장기 저장 금지',
  '비밀키와 로컬 DB는 GitHub 업로드 제외',
  '실제 자동 실행은 추후 서버 백엔드로 분리',
];

function App() {
  return (
    <main>
      <section className="hero">
        <div className="heroVisual" aria-hidden="true">
          <div className="monitor">
            <div className="monitorTop">
              <span />
              <span />
              <span />
            </div>
            <div className="videoRows">
              <div className="videoRow active">
                <PlayCircle size={26} />
                <div>
                  <strong>월수익 자동화 후보</strong>
                  <span>Go score 82</span>
                </div>
              </div>
              <div className="videoRow">
                <CircleDollarSign size={26} />
                <div>
                  <strong>부업 실행 아이디어</strong>
                  <span>Hold score 64</span>
                </div>
              </div>
              <div className="videoRow">
                <Bot size={26} />
                <div>
                  <strong>쇼츠 제작 루틴</strong>
                  <span>Workflow ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="heroCopy">
          <p className="eyebrow"><Sparkles size={18} /> THREAD 1</p>
          <h1>01 유튜브 아이디어 수집 자동화</h1>
          <p className="lede">
            YouTube 채널에서 사업화 가능한 쇼츠/자동화 아이디어를 매일 수집하고,
            후보 조사서와 승인 흐름으로 관리하는 운영 대시보드입니다.
          </p>
          <div className="heroActions">
            <a href="#workflow" className="primaryAction">흐름 보기 <ArrowUpRight size={18} /></a>
            <a href="https://ningning.kr" className="secondaryAction">게이트로 이동</a>
          </div>
        </div>
      </section>

      <section className="statsGrid" aria-label="운영 현황">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <article className="statCard" key={item.label}>
              <Icon size={24} />
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          );
        })}
      </section>

      <section className="contentGrid">
        <article className="panel large" id="workflow">
          <div className="sectionHead">
            <Clock3 size={24} />
            <div>
              <h2>운영 워크플로우</h2>
              <p>매일 08:00 KST 기준으로 후보를 모으고, 사람이 승인한 항목만 다음 단계로 넘깁니다.</p>
            </div>
          </div>
          <div className="timeline">
            {workflow.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className="timelineItem" key={step.title}>
                  <div className="stepIcon"><Icon size={21} /></div>
                  <div>
                    <span>STEP {index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </article>

        <aside className="panel">
          <div className="sectionHead compact">
            <ShieldCheck size={24} />
            <div>
              <h2>안전 운영</h2>
              <p>공개 배포 기준</p>
            </div>
          </div>
          <ul className="checkList">
            {checks.map((check) => (
              <li key={check}><CheckCircle2 size={18} /> {check}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="contentGrid bottom">
        <article className="panel">
          <div className="sectionHead compact">
            <ListChecks size={24} />
            <div>
              <h2>감시 채널</h2>
              <p>원본 자동화 프로젝트 기준</p>
            </div>
          </div>
          <div className="channelList">
            {channels.map((channel) => (
              <div className="channel" key={channel.handle}>
                <Youtube size={20} />
                <div>
                  <strong>{channel.title}</strong>
                  <span>{channel.handle}</span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel deployPanel">
          <div className="sectionHead compact">
            <KeyRound size={24} />
            <div>
              <h2>배포 상태</h2>
              <p>Static Site 포팅</p>
            </div>
          </div>
          <div className="deployRows">
            <div><span>도메인</span><strong>thread-1.ningning.kr</strong></div>
            <div><span>GitHub</span><strong>thread-1-codex</strong></div>
            <div><span>빌드</span><strong>npm run build / dist</strong></div>
            <div><span>다음 단계</span><strong>서버 백엔드 분리</strong></div>
          </div>
        </article>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
