/* ====================================================
   DRB C2B — Common JS
   Auto-renders sidebar and provides global helpers
==================================================== */

// === 발표 순서 — 단일 데이터 소스(SoT) ===
// 항목 추가/삭제/순서 변경은 이 배열만 수정하면 모든 페이지에 즉시 반영됩니다.
const C2B_NAV_ITEMS = [
  { key:'market',     href:'index.html',           label:'체인 시장 현황' },
  { key:'structure',  href:'C2B_STRUCTURE.html',   label:'체인 구조' },
  { key:'p2',         href:'C2B_P2.html',          label:'Chain → Belt 전환단계' },
  { key:'competitor', href:'C2B_COMPETITOR.html',  label:'C2B 경쟁사 현황' },
  { key:'p3',         href:'C2B_P3.html',          label:'타겟시장 분석' },
  { key:'p4',         href:'C2B_P4.html',          label:'DRB 유통망 실차 테스트' },
  { key:'p5',         href:'C2B_P5.html',          label:'실차 테스트 진행사항' }
];

// === 사이드바 렌더링 ===
function renderSidebar(){
  const sb = document.getElementById('sb');
  if(!sb) return;
  const active = document.body.dataset.active || '';
  const items = C2B_NAV_ITEMS.map((it,i)=>{
    const cls = it.key === active ? 'nav-i active' : 'nav-i';
    return `<a class="${cls}" href="${it.href}"><span class="nav-num">${i+1}</span>${it.label}</a>`;
  }).join('');
  sb.innerHTML = `
    <div class="sidebar-hd">
      <div>
        <div class="sidebar-logo">DRB <span>C2B</span></div>
        <div class="sidebar-sub">Chain to Belt 전환 프로젝트</div>
      </div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-grp">
        <div class="nav-grp-t">발표 순서</div>
        ${items}
      </div>
    </nav>`;
}

// === 사이드바 토글 ===
function togSB(){
  const s = document.getElementById('sb');
  const m = document.getElementById('mn');
  const b = document.querySelector('.sb-btn');
  if(s) s.classList.toggle('closed');
  if(m) m.classList.toggle('exp');
  if(b) b.classList.toggle('shifted');
}

// === 초기 실행 ===
// defer 스크립트는 DOM 파싱 후 자동 실행됨 → 깜빡임 최소화
renderSidebar();
