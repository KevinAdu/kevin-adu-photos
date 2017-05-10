(() => {
  lightGallery(document.getElementById('ul-li'), {
    download: false,
  });

  window.addEventListener('load', () => {
    if (document.querySelector('.no-logo a[href*="#my-projects"]')) {
      const myProjectsLink = document.querySelector('.no-logo a[href*="#my-projects"]');
      const projectSection = document.getElementById('my-projects');

      myProjectsLink.addEventListener('click', (e) => {
        e.preventDefault();
        projectSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
})();
