    //   Accordion buttons and drop downs //
    document.querySelectorAll('.accordion-header').forEach(item => {
        item.addEventListener('click', event => {
          const accordionItem = event.target.parentNode;
          accordionItem.classList.toggle('active');
          const accordionContent = accordionItem.querySelector('.accordion-content');
          if (accordionItem.classList.contains('active')) {
            accordionContent.style.display = 'block';
          } else {
            accordionContent.style.display = 'none';
          }
        });
      });

      let year = new Date().getFullYear();
      console.log("sanity check: " + year);
      let date = '&copy;' + year; 
      document.getElementById("rights").innerHTML = year;