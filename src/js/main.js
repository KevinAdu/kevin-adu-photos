(function () {
  if (document.querySelector('.no-logo a[href*="#my-projects"]')) {
    var myProjectsLink = document.querySelector('.no-logo a[href*="#my-projects"]');
    var projectSection = document.getElementById('my-projects');

    myProjectsLink.addEventListener('click', function (e) {
      e.preventDefault();
      projectSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (document.querySelectorAll('.photo')) {
    var photos = document.querySelectorAll('.photo');

    for (var i = 0; i < photos.length; i++) {
      var imgAlt = photos[i].querySelector('img').getAttribute('alt');
      photos[i].dataset.msg = imgAlt;
    }
  }

  lightGallery(document.getElementById('ul-li'), {
    download: false,
  });
})();
