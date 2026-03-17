// ===== رفع الملفات =====
function handleFiles(input, listId) {
  const list = document.getElementById(listId);
  const files = Array.from(input.files);

  files.forEach(file => {
    const item = document.createElement('div');
    item.className = 'file-item';
    item.innerHTML = `
      <i class="fas fa-paperclip"></i>
      <span>${file.name}</span>
      <span class="file-size">${(file.size / 1024).toFixed(0)} KB</span>
      <button type="button" onclick="this.parentElement.remove()" title="حذف">
        <i class="fas fa-times"></i>
      </button>
    `;
    list.appendChild(item);
  });
}

// ===== إعادة تعيين النموذج =====
function resetForm(formId, thankYouId) {
  document.getElementById(formId).reset();
  document.getElementById(formId).style.display = '';
  document.getElementById(thankYouId).style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // مسح قوائم الملفات
  document.querySelectorAll('.file-list').forEach(list => list.innerHTML = '');
}
