export function toggleForm(button, form) {
  button.addEventListener('click', e => {
    e.preventDefault();
    const currentClass = form.classList.value.replace('form', '').trim();
    if (currentClass === 'hidden') {
      form.classList.remove('hidden');
      form.classList.add('show');
    } else if (currentClass === 'show') {
      form.classList.remove('show');
      form.classList.add('hidden');
    }
  });
}
