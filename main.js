// Импорты
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import person from '/public/assets/media/img/person.png'
//

// Слайдер
const members = [
    {
        fullName: 'Сандомирская Ольга Владимировна',
        position: 'гинеколог-эндокринолог',
        photo: person,
    },
    {
        fullName: 'Сандомирская Ольга Владимировна',
        position: 'гинеколог-эндокринолог',
        photo: person,
    },
    {
        fullName: 'Сандомирская Ольга Владимировна',
        position: 'гинеколог-эндокринолог',
        photo: person,
    },
    {
        fullName: 'Сандомирская Ольга Владимировна',
        position: 'гинеколог-эндокринолог',
        photo: person,
    },
    {
        fullName: 'Сандомирская Ольга Владимировна',
        position: 'гинеколог-эндокринолог',
        photo: person,
    },
    {
        fullName: 'Сандомирская Ольга Владимировна',
        position: 'гинеколог-эндокринолог',
        photo: person,
    },
    {
        fullName: 'Сандомирская Ольга Владимировна',
        position: 'гинеколог-эндокринолог',
        photo: person,
    },
]
const splideHTML = `
  <div class="splide" role="group" aria-label="Splide Basic HTML Example">
    <div class="splide__arrows">
      <button class="splide__arrow splide__arrow--prev">
          Prev
      </button>
      <button class="splide__arrow splide__arrow--next">
          Next
      </button>
    </div>
    <div class="splide__track">
    <ul class="splide__list">
    ${members.map(item => `
      <li class="splide__slide">
      <div class="splide__slide_img">
        <img src="${item.photo}" alt="фото">
      </div>
        <div class="member-info">
          <div class="full-name">${item.fullName.split(' ').slice(0, 1).join(' ')}<br>${item.fullName.split(' ').slice(1).join(' ')}</div>
          <div class="position">${item.position}</div>
        </div>
      </li>
    `).join('')}
  </ul>
    </div>
  </div>
`;

document.querySelector('.slider').innerHTML = splideHTML;

let splide = new Splide('.splide', {
    perPage: 4,
    focus: 0,
    pagination: false,
    gap: '100px',
    width: '1168px',
    omitEnd: true,
    breakpoints: {
        1360: {
            gap: '0px',
            perPage: 4,
            width: '1000px',
        },
        1104: {
            gap: '0px',
            perPage: 3,
            width: '750px',
        },
        880: {
            perPage: 3,
            width: '700px',
        },
        808: {
            perPage: 1,
            pagination: true,
            arrows: false,
        },
    }
  });
  
  splide.mount();
//

// Promotion
const promotion = [
    {
        linkText: 'ГАРАНТИРОВАННЫЙ ПОДАРОК',
        link: '#',
        header: 'ВСЕМ УЧАСТНИКАМ ВЕБИНАРА',
        sale: '-15%',
        text: 'на все услуги Центра репродукции до конца 2020 года',
    },
    {
        linkText: 'ГЛАВНЫЙ ПРИЗ',
        link: '#',
        header: 'ОДНОМУ ПОБЕДИТЕЛЮ',
        sale: '-100%',
        text: 'на стандартную программу ЭКО в Центре Репродукции Клиники Екатерининская до конца 2020 года',
    },
]
const promotionHTML = `
${promotion.map(item => `
<div class="section2_promotion2_text">
<h2><a href="${item.link}" class="link">${item.linkText}</a>${item.header}</h2>
<h3>${item.sale}</h3>
<p>${item.text}</p>
</div>
    `).join('')}
`
document.querySelector('.section2_promotion2').innerHTML = promotionHTML;
//

// Программа
const program = [
    "Начало вебинара в 14:00\nАктивную ссылку зарегистрированные\nучастники получат за час до начала\nтрансляция по e-mail и в sms",
    "Знакомство с центром\nрепродукции",
    "Развеиваем мифы об эко",
    "Погружение в этапы эко со всеми\nспециалистами центра",
    "Отвечаем онлайн на вопросы зрителей",
    "Розыгрыш <a href='#' class='link'>стандартной программы</a> эко\nцентра репродукции и генетики клиники\nекатерининская"
  ];

const programHTML = `
${program.map(item => `
      <li>${item}</li>
    `).join('')}
`
document.querySelector('.section6_program').innerHTML = programHTML;
//