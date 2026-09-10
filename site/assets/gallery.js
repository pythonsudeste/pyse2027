const panels = [...document.querySelectorAll('[data-variant]')];
const variantLinks = [...document.querySelectorAll('[data-variant-link]')];
const summaries = {
  todas: 'Comparação completa: quatro variantes, oito fotos em cada uma. As faixas de início e fim delimitam cada proposta.',
  mosaico: 'Variante A · Oito fotos ao lado dos parágrafos, abaixo do título.',
  faixa: 'Variante B · Oito fotos entre os parágrafos. Deslize ou use as setas para percorrer todas.',
  mural: 'Variante C · Oito fotos em uma colagem junto ao título e ao texto.',
  destaque: 'Variante D · Oito fotos disponíveis nas miniaturas. Selecione qualquer uma para destacá-la.',
};

function showVariant() {
  const requested = new URL(location.href).searchParams.get('galeria');
  const variant = panels.some((panel) => panel.dataset.variant === requested) ? requested : 'todas';
  panels.forEach((panel) => { panel.hidden = variant !== 'todas' && panel.dataset.variant !== variant; });
  variantLinks.forEach((link) => {
    if (link.dataset.variantLink === variant) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
  document.querySelector('#variation-summary').textContent = summaries[variant];
  requestAnimationFrame(updateFilm);
}

function plainClick(event) {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
}

variantLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (!plainClick(event)) return;
    event.preventDefault();
    history.pushState(null, '', link.href);
    showVariant();
  });
});
window.addEventListener('popstate', showVariant);

// Native horizontal scrolling also works with touch, keyboard, and no JavaScript.
const film = document.querySelector('.photo-film');
const slides = [...film.querySelectorAll('.film-slide')];
const previous = document.querySelector('[data-film-prev]');
const next = document.querySelector('[data-film-next]');
let filmIndex = 0;
function updateFilm() {
  if (!film.clientWidth) return;
  const left = film.getBoundingClientRect().left;
  filmIndex = slides.reduce((closest, slide, index) =>
    Math.abs(slide.getBoundingClientRect().left - left) < Math.abs(slides[closest].getBoundingClientRect().left - left) ? index : closest, 0);
  document.querySelector('[data-film-status]').textContent = `${String(filmIndex + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  previous.disabled = filmIndex === 0;
  next.disabled = filmIndex === slides.length - 1;
}
function moveFilm(direction) {
  const index = Math.max(0, Math.min(slides.length - 1, filmIndex + direction));
  const left = slides[index].getBoundingClientRect().left - film.getBoundingClientRect().left + film.scrollLeft;
  film.scrollTo({ left, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}
previous.addEventListener('click', () => moveFilm(-1));
next.addEventListener('click', () => moveFilm(1));
film.addEventListener('scroll', updateFilm, { passive: true });
window.addEventListener('resize', updateFilm);
document.querySelector('.film-controls').hidden = false;

// Reuse the static film entries as the photo catalog, with no extra request.
const photos = slides.map((slide) => {
  const link = slide.querySelector('[data-photo]');
  const img = link.querySelector('img');
  return { slug: link.dataset.photo, url: link.href, src: img.src, srcset: img.srcset, alt: img.alt, caption: slide.querySelector('figcaption').textContent };
});
const spotlight = document.querySelector('.spotlight-main');
const thumbs = [...document.querySelectorAll('[data-thumb]')];
spotlight.querySelector('figcaption').setAttribute('aria-live', 'polite');
thumbs.forEach((thumb) => {
  thumb.addEventListener('click', (event) => {
    if (!plainClick(event)) return;
    event.preventDefault();
    const photo = photos.find((item) => item.slug === thumb.dataset.thumb);
    const link = spotlight.querySelector('[data-photo]');
    const img = link.querySelector('img');
    link.href = photo.url;
    link.dataset.photo = photo.slug;
    link.setAttribute('aria-label', `Ampliar: ${photo.caption}`);
    img.srcset = photo.srcset;
    img.src = photo.src;
    img.alt = photo.alt;
    spotlight.querySelector('figcaption').textContent = photo.caption;
    thumbs.forEach((item) => {
      if (item === thumb) item.setAttribute('aria-current', 'true');
      else item.removeAttribute('aria-current');
    });
  });
});
document.querySelector('.photo-thumbnails').hidden = false;

const dialog = document.querySelector('#photo-dialog');
let photoIndex = 0;
let previousOverflow = '';
function renderPhoto() {
  const photo = photos[photoIndex];
  const img = dialog.querySelector('img');
  img.src = photo.url;
  img.alt = photo.alt;
  dialog.querySelector('figcaption').textContent = photo.caption;
  document.querySelector('[data-photo-status]').textContent = `${photoIndex + 1} / ${photos.length}`;
}
function movePhoto(direction) {
  photoIndex = (photoIndex + direction + photos.length) % photos.length;
  renderPhoto();
}
document.querySelectorAll('[data-photo]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (!plainClick(event)) return;
    event.preventDefault();
    photoIndex = photos.findIndex((photo) => photo.slug === link.dataset.photo);
    renderPhoto();
    previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    dialog.showModal();
  });
});
document.querySelector('[data-photo-prev]').addEventListener('click', () => movePhoto(-1));
document.querySelector('[data-photo-next]').addEventListener('click', () => movePhoto(1));
dialog.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    movePhoto(event.key === 'ArrowLeft' ? -1 : 1);
  }
});
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { document.documentElement.style.overflow = previousOverflow; });
showVariant();
