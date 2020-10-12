var elPageBody = document.querySelector('.page__body');
var elSiteNav = document.querySelector('.sitenav');

elPageBody.classList.remove('page__body--nojs');
elSiteNav.classList.remove('sitenav--nojs');

var elSiteNavToggler = elSiteNav.querySelector('.sitenav__toggler');

elSiteNavToggler.addEventListener('click', function () {
  elSiteNav.classList.toggle('sitenav--open');
});