var liEl1 = document.querySelector('#toS1');
var liEl2 = document.querySelector('#toS2');
var liEl3 = document.querySelector('#toS3');

var sectionEl1 = document.querySelector('#s1');
var sectionEl2 = document.querySelector('#s2');
var sectionEl3 = document.querySelector('#s3');

liEl1.onclick = () => {
    sectionEl1.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

liEl2.onclick = () => {
    sectionEl2.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

liEl3.onclick = () => {
    sectionEl3.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}