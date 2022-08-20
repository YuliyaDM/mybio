const window_innerWidth = window.innerWidth;
const window_innerHeight = window.innerHeight;

//main blocks

//header

const header = document.querySelector('header');
const header_height = parseInt(window.getComputedStyle(header).getPropertyValue('height'));

//main

const avatar = document.querySelector('div.avatar');
const learning = document.querySelector('.wr-main');
const learning_height = parseInt(window.getComputedStyle(learning).getPropertyValue('height'));

const skills = document.querySelector('.skills');
const skills_height = parseInt(window.getComputedStyle(skills).getPropertyValue('height'));

// works block
const works = document.querySelector('.works');
const works_atroposes = document.querySelectorAll('.atropos');

// languages block
const languages = document.querySelector('.languages');

// progress technics block
const progress_technics = document.querySelector('.list-progress');
const progress_technics_height = parseInt(window.getComputedStyle(progress_technics).getPropertyValue('height'));
const levels = document.querySelectorAll('.level');

// measures block
const measures = document.querySelectorAll('.measure');


function showProgress(){
    for (let i = 0; i < measures.length; i++){
        const percents = 100 - measures[i].parentElement.parentElement.children[0].children[1].innerText.replace(/%/, '');
        measures[i].style.width = `${percents}%`;
    }
}

function closeProgress(){
    for (let i = 0; i < measures.length; i++){
        const percents = 100 - measures[i].parentElement.parentElement.children[0].children[1].innerText.replace(/%/, '');
        measures[i].style.width = `100%`;
    }
}

//footer

const footer = document.querySelector('footer');

// buttons link

const works_link = document.querySelector('.works-link');
const about_link = document.querySelector('.about-link');
const hire_me_link = document.querySelector('.hireme-link');
const skills_link = document.querySelector('.skills-link');

//scrolling shit

const scroll_line = document.querySelector('.show-scrolling');
const scrollToStory = document.querySelector('.fa-solid');
const topscroll = document.querySelector('.top-scroll');

function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

window.addEventListener('scroll', () => {
    const scrolling = window.pageYOffset;
    const progress = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    avatar.style.backgroundPositionY = `${scrolling * .0025}px`;

    scroll_line.style.width = `${progress}%`;

    if ((window_innerHeight + scrolling >= progress_technics.offsetTop) && !(scrolling >= progress_technics.offsetTop + progress_technics_height)){
        showProgress();
    }
    else{
        closeProgress();
    }

    if (scrolling > header_height){
        topscroll.style.visibility = 'visible';
    }
    else{
        topscroll.style.visibility = 'hidden';
    }
})

scrollToStory.addEventListener('click', () => {
    scrollTo(learning);
})

works_link.onclick = () => {
    scrollTo(works);
}

about_link.onclick = () => {
    scrollTo(learning);
}

skills_link.onclick = () => {
    scrollTo(skills);
}

hire_me_link.onclick = () => {
    scrollTo(header);
}

topscroll.onclick = () => {
    console.log("you clicked on the 'topscroll'!")
    scrollTo(header)
}