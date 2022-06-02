// template_urqkxb2
// service_r91uljg
// RLjPqFCmWaC3BCRIn

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_r91uljg',
            'template_urqkxb2',
            event.target,
            'RLjPqFCmWaC3BCRIn'
    ).then(() =>{
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly on wncoding@gmail.com"
        )
    })
}

function toggleModal() {
    
}