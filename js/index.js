
var tabs = document.querySelectorAll('.nav-link');
var tabContent = document.querySelectorAll('.tab-pane');

tabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    tabs.forEach(function(tab) {
      tab.classList.remove('active');
    });
    this.classList.add('active');
    var target = this.getAttribute('data-target');
    tabContent.forEach(function(content) {
      content.classList.remove('active');
    });
    document.querySelector(target).classList.add('active');
  });
});