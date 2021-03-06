var pctChange = (final, initial, fix = false) => {
  const change = ((final-initial)/initial)*100
  if (fix) {
    return change.toFixed(2)
  }
  return change;
}
var getColor = value => {
  const parsedValue = parseFloat(value)
  //value from 0 to 1
  var hue=((1-parsedValue)*120).toString(10);
  return ["hsl(",hue,",100%,50%)"].join("");
}
var currYear = new Date().getFullYear();
$$('.result-item').forEach(item => {
  try {
    const year = parseInt(
      item
        .querySelector('span[itemprop]')
        .innerText.trim()
        .split(' ')[0]
    );

    // const kms = item.querySelector('.kms').innerText.trim();
    const kmsEl = item.querySelector('.kms');
    const kms = parseInt(kmsEl.innerText.trim().replace(/\D*/g, ''));

    const yearsDriven = currYear - year;

    if (!isNaN(yearsDriven)) {
      const expected = yearsDriven * 23000;
      // console.log(year, `actual: ${kms}   expected: ${expected}`);

      const fixedDiffKms = pctChange(kms, expected, true)
      const diffKms = pctChange(kms, expected)
      const color = diffKms < 0 ? 'green' : 'red';

      const analyticsContainer = document.createElement('div');
      analyticsContainer.innerHTML = `
        <div class="c-container" style="padding: 5px; color: white; background: ${color}">
          <strong class="c-expected">Expected</strong>: ${expected} kms
          <br>
          <strong class="c-pct-diff">Percent Diff</strong>: ${fixedDiffKms}%
        </div>
        `;
      kmsEl.appendChild(analyticsContainer);
    }
    // console.log(kms);
  } catch (e) {
    console.log(item, e);
  }
});
