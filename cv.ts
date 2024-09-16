document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactElement = document.getElementById('contact') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const summaryElement = document.getElementById('summ') as HTMLTextAreaElement;
     const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;



    
    if (nameElement && emailElement && contactElement && addressElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = contactElement.value;
        const address = addressElement.value;
        const summary= summaryElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        

        const resumeOutpt = `
        <div class="box">
            <h2>${name}</h2>
            <p><strong>Name:</strong> <span id="edit-name" class="editable"></span>${name}</p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable"></span>${email}</p>
            <p><strong>Contact:</strong><span id="edit-phone" class="editable"></span> ${phone}</p>
            <p><strong>Address:</strong><span id=edit-phone" class="editable"></span> ${address}</p>
        
            <h3>Education</h3>
            <p id="edit-education" class="editable">${education}</p>
            <h4>Experience</h4>
            <p id="edit-experience" class="editable">${experience}</p>
            <h5>Skills</h5>
            <p id="edit-skills" class="editable">${skills}</p>
            </div>
        `;
        
        const resumeOutptElement = document.getElementById('resumeOutput');
        if (resumeOutptElement) {
            resumeOutptElement.innerHTML = resumeOutpt;
            makeEditable();
        } else {
            console.error('One or more form elements are missing');
        
    } 
    }
});
function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            if(currentElement.tagName === "P" || currentElement.tagName === "SPAN"){
                const input= document.createElement('input')
                input.type='text'
                input.value=currentValue
                input.classList.add('editing-input')

                input.addEventListener('blur',function(){
                    currentElement.textContent= input.value;
                    currentElement.style.display='inline'
                    input.remove()
                })

                currentElement.style.display='none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
}