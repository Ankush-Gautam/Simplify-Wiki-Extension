// Don't read the code it's a mess I know
// I just picked and style the elements randomly
// I'll maybe restructure with proper refactoring
// to disable and enable some elements

document
  .querySelectorAll('.vector-user-links, .vector-user-links-wide')
  .forEach(function (element) {
    element.remove();
  });

document.querySelector('.vector-sitenotice-container').remove();

//remove toolbar
document.querySelector('.vector-page-toolbar').remove();

//right ali
document.querySelector('#p-search').style.alignSelf = 'right';

//other areas of wikipedia
document.querySelector('#mp-bottom').remove();
document.querySelector('#p-lang-btn').remove();

//footer
document.querySelector('.mw-footer-container').style.padding = '0';

const footer = document.querySelector('#footer');
footer.style.padding = '2rem 0';
footer.style.display = 'flex';
footer.style.flexDirection = 'column';
footer.style.alignItems = 'center';
footer.style.gap = '1rem';
