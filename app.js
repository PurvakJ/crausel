const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  if (e.target.matches('.next')) {
    slider.append(items[0]);  // Moves the first item to the end
  } else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]);  // Moves the last item to the beginning
  }
}

document.addEventListener('click', activate, false);
