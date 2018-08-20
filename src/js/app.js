const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  if(this.classList.contains('open')) {
    this.classList.remove('open');
    this.classList.remove('open-active');
  } else {
    panels.forEach(panel => {
      panel.classList.remove('open');
      panel.classList.remove('open-active');
    })  
    this.classList.toggle('open');
  }
}

function toggleActive(e) {
  if (e.propertyName.includes('flex') && e.target.classList.contains('open')) {
    this.classList.add('open-active');
  } 
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));