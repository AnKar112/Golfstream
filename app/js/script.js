

// Services section menu

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
    'Наша компания предоставляет услуги по капитальному строительству в полном объеме.<br/><br/>Выполняем строительство жилых, общественных, административных, сельскохозяйственных зданий и сооружений. Также ремонтно-строительные работы, полусухую цементно-песчаную машинную стяжку, устройство свай. Большой опыт работы. Имеются все необходимые разрешительные документы. Оформление исходных данных, необходимых документов для начала строительства и сдачи объектов в эксплуатацию. Возможен выезд в другой город.<br/><br/>Весь комплекс строительных услуг. Земляные работы, фундамент, кладка, кровля, отделка. Опыт, прозрачность расчетов. Есть что показать из реализованных объектов.',
    'Среди услуг, предоставляемых компанией «Гольфстрим», фигурирует и разработка грунта экскаватором или рытье котлованов и траншей под фундамент — мероприятие, предшествующие возведению любого строительного объекта.<br/><br/>Компания выполнит работы по разработке котлованов, планировка участков, перемещение грунтовых мас, вскрыша карьеров. Вывоз земли. Выполнит демонтаж - от постройки до заводов с сортировкой и утилизацией мусора. Квалифицированный штат сотрудников организует и выполнит в сжатые сроки работы по разработке грунта с соблюдением всех мер по охране труда. Собственные отвалы. Лицензия, разрешение на выполнение работ особой опасности.',
    'Перепланировка квартиры или помещений — это сложный и ответственный процесс, при котором недопустим непрофессиональный подход. При перепланировке внутреннее пространство, может как частично, так и полностью меняться: убираются не несущие стены и простенки, возводятся новые, вырезаются арки и расширяются дверные проемы, меняется конфигурация потолка.<br/><br/>Мастера фирмы «Гольфстрим» работают исключительно с современными материалами и применяют новейшие методы отделки, что в совокупности с аутентичными решениями в дизайне делают комплексный ремонт квартиры творческим занятием.<br/><br/>Мы всегда готовы к сотрудничеству. Звоните и наш специалист бесплатно подъедет к Вам, проведет необходимые замеры и сообщит примерную стоимость работ.',
    'Наша компания предоставляет полный спектр ремонтно-отделочнх работы, от самого несложного до капитального ремонта с дизайн-проектом и перепланировкой.<br/><br/>Мы с радостью дадим Вам расценки за все работы с учетом материалов, заключим договор. Работу выполняет профессиональная команда с многолетним опытом работы в сфере ремонтных работ.Мы проводим работы согласно правилам и соблюдение технологий проведения каждого этапа работ, поэтому Качество и Красота Всегда Наш Результат!С момента заключения договора вам не о чем беспокоится. Наша команда самостоятельно занимается всеми промежуточными этапами, доставкой материалов, вывозом мусора и т.д.<br/><br/>На все наши работы мы даем гарантию.<br/><br/>Вызывайте на бесплатный замер!',
    'Мы выполняем весь спектр строительных работ частично и в комплексе. Строительство домов, ремонт квартир, офисов, (от "Эконом" до "Люкс" класса). Дизайн интерьера. Электрика. Сантехника. Отопление. Декоративные штукатурки. Плиточные работы. Гипсокартонные работы любой сложности. Ландшафтные работы. Сметная документация. Огромный опыт работы. Выполняем все пожелания заказчика. Подбор материалов. Качество выполненных работ + гарантии. Работаем с современными и классическими стилями. Предлагаем авторское сопровождение от подписания договора до сдачи объекта.<br/><br/>Обратившись к нам вы получаете гарантию качества и качественный сервис на всех этапах работ.',
    'Компания "Гольфсрим" предоставляет полный спектр услуг на все виды ремонтных и строительных работ, включая работы по реставрации.<br/><br/>Процесс реставрации - достаточно трудный процесс, с множеством сложностей, требующих специализированных экспертов с опытом работ в данной сфере, которые имеют многолетний опыт в проведении работ подобного рода и знающие верную последовательность выполнения работ, зная весь технологический процесс от и до. <br/><br/>Наша команда уже не первый год работают на рынке предоставления строительных услуг, поэтому досконально знают все технологические нюансы процесса.<br/><br/>Реставрация требует обширного спектра работ, начиная с отчисти, заканчивая подбором материалов.',
    'Сыреют углы? В комнате гуляет ветер? Холодно зимой? Дует с окна? Течет стена/крыша/балкон? Хотите сэкономить растраты за коммунальные услуги?<br/><br/>Выход есть.<br/><br/>Заказав утепление либо герметизацию швов у Нас на ЛЮБОЙ ВЫСОТЕ Вы вмиг лишите себя этих проблем. Мы выполняем фасадные работы любой сложности. Полный спектр работ по утеплению домов, квартир, балконов и лоджий методом промышленного альпинизма. Утепление пенопластом, минеральной ватой, отделка декоративной штукатуркой короед, барашек и окраска фасада Вашего дома. Для выполнения работ у нас есть команда экспертов, качественное оборудование, лицензированная продукция от производителя. Всегда рады с вами поработать!',
    'Фирма "Гольфстрим" предоставляет полный спектр услуг по установке и устройству внутренних и наружных сетей.<br/><br/>Внутренние сети водоснабжения/водоотведения — это система трубопроводов и механизмов, которые отвечают за подачу и отведение воды или сточных вод в границах внешнего контура объекта/здания и сооружения.<br/><br/>Установка наружных сетей включает в себя: водоотведение, тепло и водоснабжение (прокладка наружных и подземных магистралей), устройство уличного освещения, монтаж коммуникационных систем (телевидение, интернет, видеосвязь).<br/><br/>Все работы выполняются командой экспертов с многолетним опытом в проведение работ подобного формата. Гарантия качества!',
    'Архитектурный дизайн, являясь частью культурной системы, представляет собой проектную деятельность, нацеленную на создание комплексов и отдельно взятых форм предметно-пространственных объектов. Сегодня же, архитектура, дизайн и интерьер максимально «сближаются» специалистами в данной отрасли, чтобы получить возможность решать задачи, связанные с улучшением человеческой жизнедеятельности на более качественном уровне. То есть можно сказать, что миссией, которую мы готовы взять на себя, является «связывание» предметных форм среды человека в гармоничное жизненное пространство.',
    'Наша компания предоставляет услуги  формирования сметной документации на строительные работы и не только.<br/><br/>Формирование сметы является обязательной частью и обязательным условием начала строительных работ на объекте. и основанием установления их себестоимости. Сметы подготавливают с целью проведения торгов (тендеров), для эскизного и рабочего проектов. К составлению смет мы привлекаем опытных и высококлассных экспертов.<br/><br/>Проектная смета формируется с целью определения планируемого бюджета, требующегося для проведения строительных или ремонтных работ на объекте. Правильно составленная смета позволяет грамотно и точно спланировать бюджет.',
    'Наша команда предоставляет профессиональные услуги по благоустройство территории, стараясь найти индивидуальный подход к каждому из наших клиентов. <br/><br/>Ландшафтные дизайнеры в процессе работы учитывают все детали, начиная от продумывания ширины дорожек и площадок, заканчивая разбивкой клуб и расположения водостоков. Проектирование будущего ландшафта с учетом дополнительных конструкций, клумб, дорожек и т.д. Создание графической модели с подетальной разбивкой участка. Работы по благоустройству территории, включающие в себя подготовку и разбивку участка на отдельные зоны. Укладка дорожек и бордюров из гранитных плит, песчаника, сланцев, асфальтирование.',
    'Крыша дома должна быть прочной и надежной и служить в течении долгих лет. Именно поэтому безопасность кровли чрезвычайно важна.<br/><br/>Накопленный в течение многих лет опыт кровельных бригад, с которыми мы сотрудничаем, позволяет выполнять даже самые сложные работы в кратчайшие сроки. Благодаря уже реализованным объектам, нам удалось завоевать доверие наших клиентов, чаще всего трансформируется в повторный заказ услуг нашей компании. Наши консультанты подскажут Вам, какой материал лучше всего выглядит в реальности и лучше выполняет свои функции на практике. Если вы не уверены в своих силах - лучше доверьтесь профессионалам, которые помогут избежать дальнейших проблем с кровлей. ',
    'Каждый в жизни рано или поздно сталкивается с вопросом необходимости перевозки чего-либо. Наша компания предоставляет профессиональную консультацию и помощь в проведении и организации перевозки вещей любой сложности, начиная с мелочей, будь то перевозка шкафа,  до глобальных переездов предприятий. Опытные сотрудники с легкостью справятся с  разборкой, переноском, погрузкой, разгрузкой, сборкой и расстановкой. Выберем удобное для вас время, чтобы у вас было минимум проблем! Доверяя свой груз нам, Вы избавите себя от лишних хлопот, экономя свои время, силы и деньги!<br/><br/>Мы с радостью поможем перевезти Ваш груз надежно и за минимальные сроки. Индивидуальный подход к каждой перевозке.',
    ]
}

menuItems.forEach((item, id) => {

    function to () {
        menuDesc.children[0].setAttribute('src', './img/services_img' + [id] + '.png')
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

// Services section in 768-

let servicesArrowNext = document.querySelector('.services-nav_768_next')
let servicesArrowPrev = document.querySelector('.services-nav_768_prev')
let servicesActivePage = document.querySelector('.services_activepage')
let servicesLenght = 12
let servicesCounter = 0

function to () {
        menuDesc.children[0].setAttribute('src', './img/services_img' + [servicesCounter] + '.png')
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


// Slider in Projects section

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


// Counters in About section

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

function counterStart () {
    aboutCounter.forEach((item, id) => {
        if (id == 0) {
            counter(23, item, 80, 1);
        } else if (id == 1) {
            counter(55, item, 80, 1);
        } else if (id == 2) {
            counter(30, item, 80, 1);
        }
    })
}


// Anchors from header
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

// Menu in header on mobile devices

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

// Form Work

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

//  Turn off video on mobile devices

    if(window.matchMedia('(max-width: 768px)').matches) {
        document.querySelector('.videoBackground').style.cssText = 'display: none'
    }

// Fade effect on scroll and counter start in About section

let isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }

    document.addEventListener("DOMContentLoaded", scrolling, false);
 
    let listItems = document.querySelectorAll(".scroll");

    function scrolling(e) {
        
        for (let i = 0; i < listItems.length; i++) {
          let listItem = listItems[i];
          
          if (isPartiallyVisible(listItem)) {
            listItem.classList.add("active");
          } else {
            listItem.classList.remove("active");
          }

          if (isFullyVisible(listItem)) {
            if (listItem.classList.contains('about-main') && aboutCounter[0].textContent < 1) {
                counterStart ();
            }
          }
        }
      }
   
      function isPartiallyVisible(el) {
        let elementBoundary = el.getBoundingClientRect();
   
        let top = elementBoundary.top;
        let bottom = elementBoundary.bottom;
        let height = elementBoundary.height;
   
        return ((top + height >= 0) && (height + window.innerHeight >= bottom));
      }
   
      function isFullyVisible(el) {
        var elementBoundary = el.getBoundingClientRect();
   
        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;
   
        return ((top >= 0) && (bottom <= window.innerHeight));
      }
