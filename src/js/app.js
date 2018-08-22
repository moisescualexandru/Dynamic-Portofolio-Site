const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  if(this.classList.contains('open')) {
    this.classList.remove('open');
    this.classList.remove('open-active');
    this.classList.remove('unblur');
    if (this.classList.contains('panel3')) {
      document.getElementById('mail').style.display='none';
    }
  } else {
    panels.forEach(panel => {
      panel.classList.remove('open');
      panel.classList.remove('open-active');
      panel.classList.remove('unblur');
    })  
    this.classList.toggle('open');
    this.classList.add('unblur');
  }
}

function toggleActive(e) {
  if (e.propertyName.includes('flex') && e.target.classList.contains('open')) {
    this.classList.add('open-active');
    this.classList.add('unblur');
    if (this.classList.contains('panel3')) {
      document.getElementById('mail').style.display='block';
    }
  } 
}

function clearBlur() {
  this.classList.add('unblur');
}

function addBlur() {
  if(this.classList.contains('open')) return;
  this.classList.remove('unblur');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
panels.forEach(panel => panel.addEventListener('mouseover', clearBlur));
panels.forEach(panel => panel.addEventListener('mouseout', addBlur));