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

    if (document.querySelectorAll('.photo')) {
      const photos = document.querySelectorAll('.photo');

      for (let i = 0; i < photos.length; i++) {
        const imgAlt = photos[i].querySelector('img').getAttribute('alt');
        photos[i].dataset.msg = imgAlt;
      }
    }
  });
})();
