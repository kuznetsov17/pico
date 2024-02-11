document.addEventListener("DOMContentLoaded", function(event){
    setStartTheme();
    if (document.head.dataset['buildSearchIndex'] == "true") {
      initSearch();
    }
  });