const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);
input.addEventListener('blur', () => alert('blurred'), false);
