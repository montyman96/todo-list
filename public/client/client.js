document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll("input[type='checkbox']");
    items.forEach(function(item, index) {
        item.addEventListener("change", function() {
            const textElement = document.getElementById(`text${index}`);
            if (this.checked) {
                textElement.style.textDecoration = "line-through";
            } else {
                textElement.style.textDecoration = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener('change', function() {
        const itemDiv = this.parentElement;
        const parentDiv = itemDiv.parentElement;
        const formElement = document.querySelector('.box form');
  
        if (this.checked) {
          parentDiv.insertBefore(itemDiv, formElement);
        } else {
          parentDiv.prepend(itemDiv);
        }
      });
    });
  });
  
