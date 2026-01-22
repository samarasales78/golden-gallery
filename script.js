document.addEventListener('DOMContentLoaded', () => {

  const covers = document.querySelectorAll('.cover-card');
  const modal = document.getElementById('galleryModal');
  const closeBtn = document.getElementById('closeModal');

  // pega SOMENTE as categorias dentro do modal
  const categories = modal.querySelectorAll('.category');

  covers.forEach(cover => {
    cover.addEventListener('click', () => {
      const targetId = cover.dataset.target;

      // reset geral
      categories.forEach(cat => cat.classList.remove('active'));
      covers.forEach(c => c.classList.remove('active'));

      // ativa capa
      cover.classList.add('active');

      // ativa categoria correta
      const targetCategory = modal.querySelector(`#${targetId}`);
      if (targetCategory) {
        targetCategory.classList.add('active');
      } else {
        console.warn('Categoria não encontrada:', targetId);
      }

      // abre modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // fechar no X
  closeBtn.addEventListener('click', closeModal);

  // fechar clicando fora
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // fechar com ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    categories.forEach(cat => cat.classList.remove('active'));
    covers.forEach(c => c.classList.remove('active'));
  }

});
