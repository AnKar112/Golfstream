

// Работа меню "Услуги"

let menuItems = document.querySelectorAll('.services-content_nav-item')
let menuDesc = document.querySelector('.services-content_desc')
let desc = {
    title: [
        'Капитальное строительство',
        'Разработка грунта',
        'Монтажные работы',
        'Отделочные работы',
        'Ремонтно-строительные работы',
        'Реставрационные работы',
        'Фасадные работы',
        'Устройство наруж. и внутр. сетей',
        'Архитектурно-дизайнерские работы',
        'Проектно-сметные работы',
        'Благоустройство территории',
        'Кровельные работы',
        'Транспортные услуги'
    ],
    description: [
    '1 Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.<br><br>Сверхпроводник стохастично излучает взрыв. Возмущение плотности, как можно показать с помощью не совсем тривиальных вычислений, изотропно трансформирует электронный солитон. Солитон, на первый взгляд, синхронизует элементарный атом. Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.</p>',
    '2 Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.<br><br>Сверхпроводник стохастично излучает взрыв. Возмущение плотности, как можно показать с помощью не совсем тривиальных вычислений, изотропно трансформирует электронный солитон. Солитон, на первый взгляд, синхронизует элементарный атом. Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.</p>',
    '3 Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.<br><br>Сверхпроводник стохастично излучает взрыв. Возмущение плотности, как можно показать с помощью не совсем тривиальных вычислений, изотропно трансформирует электронный солитон. Солитон, на первый взгляд, синхронизует элементарный атом. Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.</p>',
    '4 Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.<br><br>Сверхпроводник стохастично излучает взрыв. Возмущение плотности, как можно показать с помощью не совсем тривиальных вычислений, изотропно трансформирует электронный солитон. Солитон, на первый взгляд, синхронизует элементарный атом. Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.</p>',
    '5 Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.<br><br>Сверхпроводник стохастично излучает взрыв. Возмущение плотности, как можно показать с помощью не совсем тривиальных вычислений, изотропно трансформирует электронный солитон. Солитон, на первый взгляд, синхронизует элементарный атом. Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.</p>',
    '6 Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.<br><br>Сверхпроводник стохастично излучает взрыв. Возмущение плотности, как можно показать с помощью не совсем тривиальных вычислений, изотропно трансформирует электронный солитон. Солитон, на первый взгляд, синхронизует элементарный атом. Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.</p>',
    '7 Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.<br><br>Сверхпроводник стохастично излучает взрыв. Возмущение плотности, как можно показать с помощью не совсем тривиальных вычислений, изотропно трансформирует электронный солитон. Солитон, на первый взгляд, синхронизует элементарный атом. Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.</p>',
    '8 Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.<br><br>Сверхпроводник стохастично излучает взрыв. Возмущение плотности, как можно показать с помощью не совсем тривиальных вычислений, изотропно трансформирует электронный солитон. Солитон, на первый взгляд, синхронизует элементарный атом. Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.</p>',
    '9 Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.<br><br>Сверхпроводник стохастично излучает взрыв. Возмущение плотности, как можно показать с помощью не совсем тривиальных вычислений, изотропно трансформирует электронный солитон. Солитон, на первый взгляд, синхронизует элементарный атом. Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.</p>',
    '10 Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.<br><br>Сверхпроводник стохастично излучает взрыв. Возмущение плотности, как можно показать с помощью не совсем тривиальных вычислений, изотропно трансформирует электронный солитон. Солитон, на первый взгляд, синхронизует элементарный атом. Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.</p>',
    '11 Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.<br><br>Сверхпроводник стохастично излучает взрыв. Возмущение плотности, как можно показать с помощью не совсем тривиальных вычислений, изотропно трансформирует электронный солитон. Солитон, на первый взгляд, синхронизует элементарный атом. Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.</p>',
    '12 Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.<br><br>Сверхпроводник стохастично излучает взрыв. Возмущение плотности, как можно показать с помощью не совсем тривиальных вычислений, изотропно трансформирует электронный солитон. Солитон, на первый взгляд, синхронизует элементарный атом. Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.</p>',
    '13 Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.<br><br>Сверхпроводник стохастично излучает взрыв. Возмущение плотности, как можно показать с помощью не совсем тривиальных вычислений, изотропно трансформирует электронный солитон. Солитон, на первый взгляд, синхронизует элементарный атом. Зеркало, как неоднократно наблюдалось при постоянном воздействии ультрафиолетового облучения, сжимает поток. Химическое соединение, несмотря на внешние воздействия, ускоряет субсветовой кристалл.</p>',
    ]
}

menuItems.forEach((item, id) => {

    function to () {
        // menuDesc.children[0].setAttribute('src', './img/services_img' + [id] + '.png')
        menuDesc.children[1].innerHTML = ( desc.title[id] )
        menuDesc.children[2].innerHTML = ( desc.description[id] )
    }

    item.onclick = function(e) {
        if (!e.target.classList.contains('active')) {
            menuDesc.classList.remove('fade-animation')
            void menuDesc.offsetWidth;
            menuDesc.classList.add('fade-animation')
            menuItems.forEach((item) => { item.classList.remove('active') })
            e.target.classList.add('active')
            setTimeout(to, 500)
        }
    }
})

// "Услуги" в 768

let servicesArrowNext = document.querySelector('.services-nav_768_next')
let servicesArrowPrev = document.querySelector('.services-nav_768_prev')
let servicesActivePage = document.querySelector('.services_activepage')
let servicesLenght = 12
let servicesCounter = 0

function to () {
        // menuDesc.children[0].setAttribute('src', './img/services_img' + [servicesCounter] + '.png')
        menuDesc.children[1].innerHTML = ( desc.title[servicesCounter] )
        menuDesc.children[2].innerHTML = ( desc.description[servicesCounter] )
    }

let servicesSlide = function(par) {
        if (par == 'next' && servicesCounter < servicesLenght) {
            servicesCounter++
        } else if (par == 'next') {
            servicesCounter = 0
        }
        if (par == 'prev' && servicesCounter == 0) {
            servicesCounter = servicesLenght    
        } else if (par == 'prev')  {
            servicesCounter--
        }
        menuDesc.classList.remove('fade-animation')
        void menuDesc.offsetWidth;
        menuDesc.classList.add('fade-animation')
        setTimeout(to, 500)
        console.log(servicesCounter)
        if (servicesCounter < 9) {
            servicesActivePage.innerHTML = '0' + (servicesCounter + 1)
        } else { 
            servicesActivePage.innerHTML = servicesCounter + 1
        }
    }

servicesArrowNext.onclick = function(e) {
    servicesSlide.call(this, 'next')
}
servicesArrowPrev.onclick = function(e) {
    servicesSlide.call(this, 'prev')
}


// Слайдер

let arrowTo = document.querySelector('.arrow-to')
let arrowBack = document.querySelector('.arrow-back')
let arrowToLowScreen = document.querySelector('.projects-slider_next')
let arrowBackLowScreen = document.querySelector('.projects-slider_prev')
let sliderItem = document.querySelectorAll('.projects-slider_item')
let activePage = document.querySelector('.slider_activepage')
let sliderLength = 10
let sliderCounter = 1
arrowTo.onclick = function(e) {
    
    if (sliderCounter < sliderLength) {
        arrowBack.style.cssText = 'visibility: visible; opacity: 1'
        if(window.matchMedia('(max-width: 920px)').matches){
            sliderItem.forEach((item) => {item.style.cssText='transform: translateX(-' + 460 * sliderCounter + 'px);'})
        } else if(window.matchMedia('(max-width: 1600px)').matches){
            sliderItem.forEach((item) => {item.style.cssText='transform: translateX(-' + 840 * sliderCounter + 'px);'})
        } else {
            sliderItem.forEach((item) => {item.style.cssText='transform: translateX(-' + 910 * sliderCounter + 'px);'})
        }
        sliderCounter++
        if (sliderCounter !== sliderLength) {
            activePage.innerHTML = '0' + sliderCounter
        } else { 
            activePage.innerHTML = sliderCounter 
        }
    } else {
        arrowBack.style.cssText = 'visibility: hidden; opacity: 0'
        sliderItem.forEach((item) => {item.style.cssText='transform:translateX(0px)'})
        sliderCounter = 1
        activePage.innerHTML = sliderCounter 
    }
}

arrowBack.onclick = function(e) {
    if ( sliderCounter < sliderLength + 1 && sliderCounter > 2 ) {
        if(window.matchMedia('(max-width: 920px)').matches){
            sliderItem.forEach((item) => {item.style.cssText='transform: translateX(-' + 460 * (sliderCounter - 2) + 'px);'})
        } else if(window.matchMedia('(max-width: 1600px)').matches){
            sliderItem.forEach((item) => {item.style.cssText='transform: translateX(-' + 840 * (sliderCounter - 2) + 'px);'})
        } else {
            sliderItem.forEach((item) => {item.style.cssText='transform: translateX(-' + 910 * (sliderCounter - 2) + 'px);'})
        }
        sliderCounter--
        activePage.innerHTML = '0' + sliderCounter
    } else {
        arrowBack.style.cssText = 'visibility: hidden; opacity: 0'
        sliderItem.forEach((item) => {item.style.cssText='transform:translateX(0px)'})
        sliderCounter = 1
        activePage.innerHTML =  '0' + sliderCounter
    }
}

arrowToLowScreen.onclick = function(e) {
    if (sliderCounter < sliderLength) {
        if(window.matchMedia('(max-width: 320px)').matches){
            sliderItem.forEach((item) => {item.style.cssText='transform: translateX(-' + 320 * sliderCounter + 'px);'})
        } else if(window.matchMedia('(max-width: 480px)').matches) {
            sliderItem.forEach((item) => {item.style.cssText='transform: translateX(-' + 480 * sliderCounter + 'px);'})
        }
        sliderCounter++
        if (sliderCounter !== sliderLength) {
            activePage.innerHTML = '0' + sliderCounter
        } else { 
            activePage.innerHTML = sliderCounter 
        }
    } else {
        sliderItem.forEach((item) => {item.style.cssText='transform:translateX(0px)'})
        sliderCounter = 1
        activePage.innerHTML = sliderCounter 
    }
}

arrowBackLowScreen.onclick = function(e) {
    if ( sliderCounter < sliderLength + 1 && sliderCounter > 1 ) {
        if(window.matchMedia('(max-width: 320px)').matches){
            sliderItem.forEach((item) => {item.style.cssText='transform: translateX(-' + 320 * (sliderCounter - 2) + 'px);'})
        } else if(window.matchMedia('(max-width: 480px)').matches) {
            sliderItem.forEach((item) => {item.style.cssText='transform: translateX(-' + 480 * (sliderCounter - 2) + 'px);'})
        }
        sliderCounter--
        activePage.innerHTML = '0' + sliderCounter
    } else {
        if(window.matchMedia('(max-width: 320px)').matches){
            sliderItem.forEach((item) => {item.style.cssText='transform: translateX(-2880px);'})
        } else if(window.matchMedia('(max-width: 480px)').matches) {
            sliderItem.forEach((item) => {item.style.cssText='transform: translateX(-4320px);'})
        }
        sliderCounter = 10
        activePage.innerHTML = sliderCounter 
    }
}


// Счётчик

let aboutCounter = document.querySelectorAll('.about-content_counters-title')

function counter(val, el, timeout, step) {
    let i = 0;
    (function() {
      if (i <= val) {
        setTimeout(arguments.callee, timeout);
            el.innerHTML = i;
            i = i + step;
      } else { 
            el.innerHTML = val;
      }
      if (val > 23) {
        el.innerHTML = el.textContent + '+'
      }
    })();
}

aboutCounter.forEach((item, id) => {
    if (id == 0) {
        counter(23, item, 80, 1);
    } else if (id == 1) {
        counter(55, item, 80, 1);
    } else if (id == 2) {
        counter(30, item, 80, 1);
    }
})


// Прокрутка нав-меню
let nav_link = document.querySelectorAll('.nav_link')
let anchor = document.querySelectorAll('.anchor')

nav_link.forEach((item, id) => {
    item.onclick = function () {
        anchor[id].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
    });
    
}})

let button = document.querySelector('.header-button')

button.onclick = function() {
    anchor[3].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
});
}

// Менюшка-бургер в 320

let burgerIcon = document.querySelector('.header-menu_icon')
let navMenu = document.querySelector('.nav-menu')

burgerIcon.onclick = function(e) {
    if (e.target.classList.contains('open')) {
        e.target.classList.remove('menu-animation', 'open')
        void e.target.offsetWidth;
        e.target.classList.add('menu-animation', 'close')
        e.target.setAttribute('src', './img/svg/menuClose.svg');
        navMenu.style.cssText = 'transform: translateX(calc(-100vw + 45px));'
    } else if (e.target.classList.contains('close')) {
        e.target.classList.remove('menu-animation', 'close')
        void e.target.offsetWidth;
        e.target.classList.add('menu-animation','open')
        e.target.setAttribute('src', './img/svg/menu.svg');
        navMenu.style.cssText = 'transform: translateX(calc(100vw - 45px));'
    }
}

// Работа формы

let submit = document.querySelector('#form_submit')
let data = document.querySelectorAll('.form_input')
let form = document.querySelector('.footer_form')
let dataForm = new Array(5)
	data.forEach((item, id) => { 
        item.onchange = function (e) {
            dataForm[id] = e.target.value
            console.log (dataForm)
        }
    })

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    console.log(dataForm)
    
    let request = new XMLHttpRequest();
    
    request.addEventListener('load', function() {
        console.log(request.response);
        alert('Ваша заявка успешно отправлена!');
        form.reset();
    });
    
    request.open('POST', '/app/mail.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send('name=' + encodeURIComponent(dataForm[0]) + '&email=' + encodeURIComponent(dataForm[3]) + '&phone=' + encodeURIComponent(dataForm[1]) + '&company=' + encodeURIComponent(dataForm[2]) + '&userMessage=' + encodeURIComponent(dataForm[4]));
    });

function fallback(video) {
    let img = video.querySelector('img');
    if (img)
    video.parentNode.replaceChild(img, video);
}
