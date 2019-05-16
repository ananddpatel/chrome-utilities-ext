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
    const kms = parseInt(
      item
        .querySelector('.kms')
        .innerText.trim()
        .replace(/\D*/g, '')
    );

    const yearsDriven = currYear - year;

    if (!isNaN(yearsDriven)) {
      const expected = yearsDriven * 23000;
      console.log(`actual: ${kms}   expected: ${expected}`);
    }
    // console.log(kms);
  } catch (e) {
    console.log(item);
  }
});
