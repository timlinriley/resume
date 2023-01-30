let navTabs ={
    contact: `Riley P. Timlin 
    123 Main St NY, NY 10001
    646-123-456 - riley@gmail.com`,
    summary: 'I have a background at Ecommerce and B2B companies as a supply chain operations leader. Despite having a successful career in that field, I recently finished a software engineering program and look forward to applying my business experience to helping product teams build exceptional tools for internal',
    experience: ' Supply Chain',
    education: 'SUNY Plattsburgh',
    skills: 'Excel, HTML, CSS, Javascript',
}


const uploadInfo = (tabName) => {
    if (tabName === 'contact'){
    let contactBox = document.querySelector('.contact')
    contactBox.innerHTML = navTabs.contact

    let titleBox = document.querySelector('.currentTitle')
    titleBox.innerHTML = "Contact"
}

else if (tabName === 'summary'){
    let summaryBox = document.querySelector('.summary')

    summaryBox.innerHTML = navTabs.summary


    let titleBox = document.querySelector('.currentTitle1')
    titleBox.innerHTML = "Summary"

}


else if (tabName === 'experience'){
    let contactBox = document.querySelector('.experience')

    contactBox.innerHTML = navTabs.experience

    let title = document.querySelector('.currentTitle2')
    title.innerHTML = "Experience"

}

else if (tabName === 'education'){
    let educationBox = document.querySelector('.education')

    educationBox.innerHTML = navTabs.education

    let titleBox = document.querySelector('.currentTitle3')
    titleBox.innerHTML = "Education"

}


else if (tabName === 'skills'){
    let skillsBox = document.querySelector('.skills')

    skillsBox.innerHTML = navTabs.skills

    let titleBox = document.querySelector('.currentTitle4')
    titleBox.innerHTML = "Skills"

}
}
