var actualSection = 1;
const liEl1 = document.querySelector('#toS1');
const liEl2 = document.querySelector('#toS2');
const liEl3 = document.querySelector('#toS3');
const sectionEl1 = document.querySelector('#s1');
const sectionEl2 = document.querySelector('#s2');
const sectionEl3 = document.querySelector('#s3');

sectionEl1.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
});

liEl1.onclick = () => {
    sectionEl1.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    setActualSection(1);
}

liEl2.onclick = () => {
    sectionEl2.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    setActualSection(2);
}

liEl3.onclick = () => {
    sectionEl3.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    setActualSection(3);
}


window.addEventListener('wheel', (event) => {
    if(event.deltaY < 0){
        if(actualSection === 3){
            setActualSection(2);
        }else if(actualSection === 2){
            setActualSection(1);
        }
        console.log(actualSection);
    }else if(event.deltaY > 0){
        if(actualSection === 1){
            setActualSection(2);
        }else if(actualSection === 2){
            setActualSection(3);
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

function setActualSection(val){
    if (val === 1){
        actualSection = 1;
        document.querySelector('#indicatorBall').style.top = 0;
    }else if (val === 2){
        actualSection = 2;
        document.querySelector('#indicatorBall').style.top = '50%';
    }else if (val === 3){
        actualSection = 3;
        document.querySelector('#indicatorBall').style.top = '100%';
    }else{
        console.warn('Valor de parametro inválido. O valor deve ser de 1 a 3.')
    }
}