'use strict';

document.querySelector('#copyText').onclick = function() {
  copyToClipboard('Witcher');
};

function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // eslint-disable-next-line no-undef
    return clipboardData.setData('Text', text);
  } else if (document.queryCommandSupported
    && document.queryCommandSupported('copy')) {
    const textarea = document.createElement('textarea');

    textarea.textContent = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      return document.execCommand('copy');
    } catch (ex) {
      // eslint-disable-next-line no-console
      console.warn('Copy to clipboard failed.', ex);

      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}
