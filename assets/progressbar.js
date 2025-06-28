(() => {
  const css = `
  :root {
    --bar-width: 100%;
    --bar-height: 2em;
    --bar-radius: 20px;
  }

  .progress-container {
    width: var(--bar-width);
    user-select: none;
  }

  .progress-bar {
    position: relative;
    width: 100%;
    height: var(--bar-height);
    background: #222;
    border-radius: var(--bar-radius);
    overflow: hidden;
    box-shadow: 0 0 8px rgba(255 255 255 / 0.1) inset;
  }

  .progress-fill {
    position: absolute;
    top: 0; left: 0; bottom: 0;
    width: 0%;
    border-radius: var(--bar-radius) 0 0 var(--bar-radius);
    background: linear-gradient(
      90deg,
      hsl(0, 100%, 70%) 0%,
      hsl(60, 100%, 70%) 20%,
      hsl(120, 100%, 70%) 40%,
      hsl(180, 100%, 70%) 60%,
      hsl(240, 100%, 70%) 80%,
      hsl(280, 100%, 70%) 100%
    );
    background-size: var(--bar-width) var(--bar-height);
    background-repeat: no-repeat;
    will-change: width;
  }


  .value-label {
    position: relative;
    margin-top: 12px;
    font-weight: 600;
    font-size: 14px;
    color: white;
    background: #222;
    padding: 2px 6px;
    border-radius: 8px;
    white-space: nowrap;
    user-select: none;
    left: 0%;
    transform: translateX(0);
    transition: left 0.3s ease, transform 0.3s ease;
  }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  const init = () => {
    const progressContainer = document.querySelector('.progress-container');
    if (!progressContainer) {
      console.warn('No .progress-container element found in document.');
      return;
    }
    const fillDiv = progressContainer.querySelector('.progress-fill');
    const labelSpan = progressContainer.querySelector('.value-label');
    if (!fillDiv || !labelSpan) {
      console.warn('Required elements (.progress-fill or .value-label) missing.');
      return;
    }
    const barWidth = parseFloat(getComputedStyle(progressContainer).width);
    
    let value = document.getElementById('pgbar').getAttribute('progress');
    console.log(value);

    // Update fill width and label text
    function updateValue(val) {
      value = Math.max(0, Math.min(100, val));
      fillDiv.style.width = value + '%';
      labelSpan.textContent = `${Math.round(value)}%`;
      updateLabelPosition();
    }

    // Position the numerical label below fill bar end
    function updateLabelPosition() {
      const fillWidthPx = (value / 100) * barWidth;
      const labelWidth = labelSpan.offsetWidth;

      // Position label so center is at fill right edge, but constrained inside container
      let left = fillWidthPx - labelWidth / 2;

      // Clamp to container bounds
      left = Math.min(barWidth - labelWidth, Math.max(0, left));

      labelSpan.style.left = `${left}px`;
    }

    // Initialize
    updateValue(value);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
