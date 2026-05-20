import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Bell,
  CheckCircle2,
  Clock3,
  Copy,
  Database,
  FileText,
  Filter,
  Globe2,
  HelpCircle,
  LayoutDashboard,
  ListChecks,
  LockKeyhole,
  MessageSquareText,
  PlayCircle,
  Search,
  Send,
  Settings,
  Sparkles,
  TrendingUp,
  UserCircle2,
  Youtube,
} from 'lucide-react';
import './styles.css';

const summary = [
  { label: '최근 수집', value: '128건', note: '오늘 14:32', icon: BarChart3 },
  { label: '후보 아이디어', value: '45건', note: '검토 대기 12건', icon: FileText },
  { label: '자동 수집', value: '정상', note: '마지막 실행 14:30', icon: Clock3 },
  { label: '텔레그램 전송', value: '정상', note: '마지막 전송 14:31', icon: Send },
];

const reports = [
  {
    rank: '01',
    title: '구독형 리서치 알림 봇',
    source: '돈버는 온라인자판기',
    score: 92,
    status: '검토 우선',
    tag: '자동화',
    updated: '14:32',
    summary: '반복 검색과 알림 수요가 있는 소상공인 니치에서 월 구독형으로 검증 가능한 아이디어입니다.',
  },
  {
    rank: '02',
    title: '쇼츠 소재 큐레이션 시트',
    source: '머니인사이드',
    score: 86,
    status: '조사 중',
    tag: '콘텐츠',
    updated: '13:48',
    summary: '운영자가 매일 확인할 수 있는 쇼츠 소재 후보를 자동 분류해 제작 시간을 줄입니다.',
  },
  {
    rank: '03',
    title: '리뷰 키워드 매출 신호 분석',
    source: '다함께 잡잡잡',
    score: 79,
    status: '보류',
    tag: '리서치',
    updated: '12:26',
    summary: '리뷰 문장 안의 반복 불만과 결제 의도를 묶어 작은 SaaS 후보로 재구성합니다.',
  },
  {
    rank: '04',
    title: '로컬 광고 문구 생성 루틴',
    source: '돈강TV',
    score: 74,
    status: '대기',
    tag: '마케팅',
    updated: '11:10',
    summary: '업종별 문구와 이벤트 소재를 빠르게 생성하는 내부 운영 툴 후보입니다.',
  },
];

const channels = [
  { title: '돈버는 온라인자판기', handle: '@online-money', count: '32건' },
  { title: '다함께 잡잡잡', handle: '@다함께_잡잡잡', count: '24건' },
  { title: '머니인사이드', handle: '@moneyinside7', count: '18건' },
  { title: '머니멘터리', handle: '@머니멘터리', count: '9건' },
];

const timeline = [
  { label: '채널 스캔', time: '14:30', done: true },
  { label: '후보 점수화', time: '14:31', done: true },
  { label: '리포트 생성', time: '14:32', done: true },
  { label: '사람 검토', time: '대기', done: false },
];

function StatusPill({ children, tone = 'ready' }) {
  return (
    <span className={`status-pill ${tone}`}>
      {tone === 'ready' ? <CheckCircle2 size={14} /> : <Clock3 size={14} />}
      {children}
    </span>
  );
}

function App() {
  const activeReport = reports[0];

  return (
    <main className="app-shell">
      <header className="topbar" aria-label="상단 메뉴">
        <a className="brand" href="https://ningning.kr" aria-label="ningning.kr 게이트">
          <span className="brand-mark">N</span>
          <strong>ningning.kr</strong>
        </a>
        <div className="topbar-divider" />
        <span className="section-title">아이디어 수집</span>
        <nav className="top-actions" aria-label="보조 메뉴">
          <button type="button" aria-label="알림"><Bell size={18} /><span>알림</span></button>
          <button type="button" aria-label="도움말"><HelpCircle size={18} /><span>도움말</span></button>
          <button type="button" aria-label="관리자"><UserCircle2 size={20} /><span>관리자</span></button>
        </nav>
      </header>

      <div className="workspace">
        <aside className="sidebar" aria-label="스레드 탐색">
          <section className="side-section">
            <h2>대표 도메인</h2>
            <a className="domain-card" href="https://thread-1.ningning.kr">
              <Globe2 size={24} />
              <span>
                <strong>thread-1.ningning.kr</strong>
                <small>아이디어 수집 자동화</small>
              </span>
            </a>
          </section>

          <section className="side-section">
            <h2>워크스페이스</h2>
            <a className="side-link active" href="#reports"><ListChecks size={19} /><span><strong>후보 리포트</strong><small>45건 관리</small></span></a>
            <a className="side-link" href="#channels"><Youtube size={19} /><span><strong>감시 채널</strong><small>5개 소스</small></span></a>
            <a className="side-link" href="#timeline"><PlayCircle size={19} /><span><strong>자동 실행</strong><small>정상 운영</small></span></a>
            <a className="side-link" href="https://ningning.kr"><LayoutDashboard size={19} /><span><strong>메인 게이트</strong><small>전체 프로젝트</small></span></a>
          </section>

          <button className="settings-button" type="button">
            <Settings size={18} />
            스레드 설정
          </button>
        </aside>

        <section className="main-panel">
          <section className="hero-row" aria-label="스레드 개요">
            <div>
              <p className="eyebrow"><Sparkles size={16} /> ACTIVE THREAD</p>
              <h1>유튜브 아이디어 수집 자동화</h1>
              <p className="lede">YouTube 채널에서 사업화 가능한 아이디어를 수집하고, 후보 리포트와 승인 흐름으로 관리합니다.</p>
            </div>
            <div className="hero-actions">
              <a className="ghost-button" href="https://ningning.kr">
                게이트
                <ArrowRight size={16} />
              </a>
              <a className="primary-button" href="#reports">
                리포트 보기
                <ArrowUpRight size={18} />
              </a>
            </div>
          </section>

          <section className="overview-strip" aria-label="운영 현황">
            <div className="overview-item"><Globe2 size={28} /><span>도메인</span><strong>thread-1.ningning.kr</strong></div>
            <div className="overview-item"><Database size={28} /><span>데이터</span><strong>로컬 DB 기준</strong></div>
            <div className="overview-item"><LockKeyhole size={28} /><span>SSL</span><strong>자동 적용</strong></div>
          </section>

          <section className="metric-grid">
            {summary.map((item) => {
              const Icon = item.icon;
              return (
                <article className="metric-card" key={item.label}>
                  <Icon size={22} />
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <small>{item.note}</small>
                </article>
              );
            })}
          </section>

          <section className="work-grid" id="reports">
            <article className="report-panel">
              <div className="panel-head">
                <div>
                  <h2>후보 리포트</h2>
                  <p>수집된 영상에서 사업화 신호가 높은 항목을 우선 검토합니다.</p>
                </div>
                <button type="button" className="icon-button" aria-label="필터"><Filter size={18} /></button>
              </div>
              <div className="search-box">
                <Search size={18} />
                <span>자동화, 부업, 리서치 후보 검색</span>
              </div>
              <div className="report-list">
                {reports.map((report, index) => (
                  <article className={index === 0 ? 'report-row selected' : 'report-row'} key={report.title}>
                    <span className="rank">{report.rank}</span>
                    <div className="report-copy">
                      <div>
                        <h3>{report.title}</h3>
                        <p>{report.summary}</p>
                      </div>
                      <div className="report-meta">
                        <span>{report.source}</span>
                        <span>{report.tag}</span>
                        <span>{report.updated}</span>
                      </div>
                    </div>
                    <div className="score">
                      <strong>{report.score}</strong>
                      <small>{report.status}</small>
                    </div>
                  </article>
                ))}
              </div>
            </article>

            <aside className="detail-panel">
              <div className="panel-head compact">
                <div>
                  <h2>리포트 상세</h2>
                  <p>우선 검토 후보</p>
                </div>
                <StatusPill>운영 중</StatusPill>
              </div>
              <div className="detail-score">
                <span>{activeReport.rank}</span>
                <div>
                  <strong>{activeReport.title}</strong>
                  <p>{activeReport.source} · Go score {activeReport.score}</p>
                </div>
              </div>
              <dl className="brief-list">
                <div>
                  <dt>기회</dt>
                  <dd>반복 검색과 알림 업무를 줄이고 싶은 소규모 운영자에게 바로 설명 가능한 가치가 있습니다.</dd>
                </div>
                <div>
                  <dt>MVP</dt>
                  <dd>키워드 입력, 수집 주기, 텔레그램 알림, 간단한 후보 저장 화면부터 검증합니다.</dd>
                </div>
                <div>
                  <dt>리스크</dt>
                  <dd>데이터 출처와 API 제한을 명확히 분리하고, 무단 다운로드 없이 메타데이터 중심으로 운영합니다.</dd>
                </div>
              </dl>
              <div className="detail-actions">
                <button type="button" className="primary-button">승인 대기</button>
                <button type="button" className="copy-button"><Copy size={16} /> 링크 복사</button>
              </div>
            </aside>
          </section>

          <section className="lower-grid">
            <article className="panel-card" id="channels">
              <div className="panel-head compact">
                <div>
                  <h2>감시 채널</h2>
                  <p>수집 대상 소스</p>
                </div>
                <Youtube size={22} />
              </div>
              <div className="channel-list">
                {channels.map((channel) => (
                  <div className="channel-row" key={channel.handle}>
                    <Youtube size={18} />
                    <span>
                      <strong>{channel.title}</strong>
                      <small>{channel.handle}</small>
                    </span>
                    <em>{channel.count}</em>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel-card" id="timeline">
              <div className="panel-head compact">
                <div>
                  <h2>자동 실행</h2>
                  <p>오늘 처리 흐름</p>
                </div>
                <TrendingUp size={22} />
              </div>
              <ol className="timeline">
                {timeline.map((item) => (
                  <li className={item.done ? 'done' : ''} key={item.label}>
                    <span>{item.done ? <CheckCircle2 size={16} /> : <Clock3 size={16} />}</span>
                    <strong>{item.label}</strong>
                    <small>{item.time}</small>
                  </li>
                ))}
              </ol>
            </article>

            <article className="panel-card deploy-card">
              <div className="panel-head compact">
                <div>
                  <h2>배포 상태</h2>
                  <p>Static Site</p>
                </div>
                <BadgeCheck size={22} />
              </div>
              <div className="deploy-list">
                <div><span>GitHub</span><strong>thread-1-codex</strong></div>
                <div><span>빌드</span><strong>npm run build</strong></div>
                <div><span>출력</span><strong>dist</strong></div>
                <div><span>상태</span><strong>정상 운영</strong></div>
              </div>
            </article>
          </section>
        </section>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
