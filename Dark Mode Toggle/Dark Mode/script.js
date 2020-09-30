
const btn = document.querySelector('.btn');

const innerBtn = document.querySelector('.inner-btn');


innerBtn.addEventListener('click', () => {
  if (innerBtn.getAttribute('class').includes('inner-btn-fw')) {
    innerBtn.classList.remove('inner-btn-fw');
    innerBtn.classList.add('inner-btn-bw');

    btn.classList.remove('btn-dark-bg');
    btn.classList.add('btn-light-bg');

    document.body.style.backgroundColor = '#fff';

    document.body.style.color = '#333';
    innerBtn.style.backgroundColor = "#333";

  } else if (innerBtn.getAttribute('class').includes('inner-btn-bw')) {
    innerBtn.classList.remove('inner-btn-bw');
    innerBtn.classList.add('inner-btn-fw');
    
    btn.classList.remove('btn-light-bg');
    btn.classList.add('btn-dark-bg');

    document.body.style.backgroundColor = '#333';

    document.body.style.color = '#fff';
    innerBtn.style.backgroundColor = "#fff";

  } else {
    innerBtn.classList.add('inner-btn-fw');

    btn.classList.add('btn-dark-bg');

    document.body.style.backgroundColor = '#333';

    document.body.style.color = '#fff';
    innerBtn.style.backgroundColor = "#fff";
  }
})