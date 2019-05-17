const pctChange = (final, initial, fix = false) => {
  const change = ((final - initial) / initial) * 100;
  if (fix) {
    return change.toFixed(2);
  }
  return change;
};

Array.from(document.querySelectorAll('.customAnalyticsContainer')).forEach(el => el.remove());

// add new anaylitcs containers
Array.from(document.querySelectorAll('.result-item')).forEach((item, i) => {
  const currYear = new Date().getFullYear();
  try {
    const year = parseInt(
      item
        .querySelector('span[itemprop]')
        .innerText.trim()
        .split(' ')[0]
    );

    const kmsEl = item.querySelector('.kms');
    const kmsDriven = parseInt(kmsEl.innerText.trim().replace(/\D*/g, ''));

    const yearsDriven = currYear - year;

    if (!isNaN(yearsDriven)) {
      const expectedKmsDriven = yearsDriven * 20000;
      const diffKmsDecimal = pctChange(kmsDriven, expectedKmsDriven, true);
      const diffKmsPercent = pctChange(kmsDriven, expectedKmsDriven);
      const color = diffKmsPercent < 0 ? 'green' : 'red';

      let analyticsContainer = document.createElement('div');
      analyticsContainer.className = 'customAnalyticsContainer';
      analyticsContainer.id = 'customAnalyticsContainer' + i;

      const existingAnalyticsContainer = document.getElementById('customAnalyticsContainer' + i);
      if (existingAnalyticsContainer) {
        analyticsContainer = existingAnalyticsContainer;
      }

      analyticsContainer.innerHTML = `
        <div class="c-container" style="padding: 5px; color: white; background: ${color}">
          <strong class="c-expected">Expected</strong>: ${expectedKmsDriven} kms
          <br>
          <strong class="c-pct-diff">Percent Diff</strong>: ${diffKmsDecimal}%
        </div>
        `;
      kmsEl.appendChild(analyticsContainer);
    }
  } catch (e) {
    console.log(item, e);
  }
});
