function reddenPage() {
  console.log('Free Studocu');
  const lEl = document.querySelectorAll(`div.page-content`);

  document.querySelector('._de9e5fdb76af').remove();
  document.querySelector('._869f7c361ca9').remove();

  console.log('Found ', lEl.length, ' pages');
  lEl.forEach((el) => {
    console.log(el.outerHTML);
    el.outerHTML = `<p${el.outerHTML.substring(4, el.outerHTML.length - 4)}p>`;
  });

  lEl.forEach((el) => {
    el.style.blur = 'none';
    el.style.userSelect = 'unset';
  });
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes('chrome://')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage,
    });
  }
});
