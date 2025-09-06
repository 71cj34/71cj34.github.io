const PAGE_SIZE  = 6;
const PREV_LABEL = '◀';
const NEXT_LABEL = '▶';
/* ------------------------ */

const items    = [...document.querySelectorAll('.item')];
const total    = items.length;
const pages    = Math.ceil(total / PAGE_SIZE);
let current    = 0;

/* build pager node */
const pager          = document.createElement('div');
pager.className      = 'pager';
pager.innerHTML = `
  <button class="nav-btn" id="prevBtn">${PREV_LABEL}</button>
  <span id="pageNum">1 / ${pages}</span>
  <button class="nav-btn" id="nextBtn">${NEXT_LABEL}</button>`;

/* insert pager into .shell */
document.querySelector('.shell').appendChild(pager);

/* helpers */
const btnPrev = document.getElementById('prevBtn');
const btnNext = document.getElementById('nextBtn');
const pageNum = document.getElementById('pageNum');

function showPage(idx) {
  items.forEach((card, i) => {
    card.style.display =
      (i >= idx * PAGE_SIZE && i < (idx + 1) * PAGE_SIZE) ? '' : 'none';
  });
  pageNum.textContent = `${idx + 1} / ${pages}`;
  btnPrev.disabled = idx === 0;
  btnNext.disabled = idx === pages - 1;
}

/* clicks */
btnPrev.addEventListener('click', () => {
  if (current > 0) showPage(--current);
});
btnNext.addEventListener('click', () => {
  if (current < pages - 1) showPage(++current);
});

/* keyboard left/right */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft')  btnPrev.click();
  if (e.key === 'ArrowRight') btnNext.click();
});

/* initialise */
showPage(0);
