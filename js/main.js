var actualSection = 1;
const liEl1 = document.querySelector('#toS1');
const liEl2 = document.querySelector('#toS2');
const liEl3 = document.querySelector('#toS3');
const sectionEl1 = document.querySelector('#s1');
const sectionEl2 = document.querySelector('#s2');
const sectionEl3 = document.querySelector('#s3');

liEl1.onclick = () => {
    sectionEl1.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    actualSection = 1;
}

liEl2.onclick = () => {
    sectionEl2.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    actualSection = 2;
}

liEl3.onclick = () => {
    sectionEl3.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    actualSection = 3;
}


window.addEventListener('wheel', (event) => {
    if(event.deltaY < 0){
        if(actualSection === 3){
            actualSection = 2;
        }else if(actualSection === 2){
            actualSection = 1;
        }
        console.log(actualSection);
    }else if(event.deltaY > 0){
        if(actualSection === 1){
            actualSection = 2;
        }else if(actualSection === 2){
            actualSection = 3;
        }
        console.log(actualSection);
    }

    if(actualSection === 1){
        sectionEl1.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }else if(actualSection === 2){
        sectionEl2.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }else if(actualSection === 3){
        sectionEl3.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});