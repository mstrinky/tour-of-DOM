const sections = document.querySelectorAll('section');
// console.log(sections);
for(section of sections){
    // console.log(section);
    section.style.border = '3px solid green';
    section.style.marginBottom = '5px';
    section.style.width = '300px';
}