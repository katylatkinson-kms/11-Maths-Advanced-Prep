(() => {
  const form = document.querySelector('.reflection-form');
  if (!form) return;
  const fields = [...form.querySelectorAll('textarea')];
  const status = form.querySelector('.reflection-status');
  const key = 'holiday-prep:reflection:' + location.pathname.replace(/\.html$/, '');
  const show = message => {
    if (status.textContent !== message) status.textContent = message;
  };
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '{}');
    for (const field of fields) field.value = saved?.[field.id] || '';
    show('Your responses stay in this browser on this device.');
  } catch {
    show('Browser storage is unavailable. Copy your responses before you leave.');
  }
  form.addEventListener('input', () => {
    try {
      const answers = Object.fromEntries(fields.map(field => [field.id, field.value]));
      localStorage.setItem(key, JSON.stringify(answers));
      show('Saved in this browser on this device.');
    } catch {
      show('Your responses could not be saved. Copy them before you leave.');
    }
  });
})();
