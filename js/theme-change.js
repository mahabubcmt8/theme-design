// Convert Theme one >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
document.getElementById("theme1").onclick = function themeOne() {
    // --------------------------------------
    var header = document.querySelectorAll('.header-lg-txt, .header h6, .type');
    header.forEach(header => {
        header.style.color = "var(--warning-color)";
    });

    // ---------------------------------------
    var welcomeBtn = document.querySelector('.welcome-btn');
    welcomeBtn.setAttribute(
        "style",
        "background: var(--warning-color); border: 0px ;color:var(--white-color);box-shadow: none;"
    );

    // --------------------------------------
    var sectionTitle = document.querySelectorAll('.section-title');
    sectionTitle.forEach(abc => {
        abc.setAttribute(
            "style",
            "background: var(--first-theme);-webkit-background-clip:text;-webkit-text-fill-color: transparent;"
        );
    });

    // --------------------------------------
    const elements1 = document.querySelectorAll(
        '.features-icon, .active-service, .active-service .service-icon, .team-card'
    );

    elements1.forEach(element => {
        element.style.background = "var(--first-theme)";
    });

    // --------------------------------------
    var element = ['#header', '.navbar', '.contact-form', 'footer', '.contact-info', '.features_icon'];

    for (i = 0; i < element.length; i++) {
        document.querySelector(element[i]).style.background = "var(--first-theme)";
    }
}
// Convert Theme two >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
document.getElementById("theme2").onclick = function themeTwo() {
    // --------------------------------------
    var header = document.querySelectorAll('.header-lg-txt, .header h6, .type');
    header.forEach(header => {
        header.style.color = "var(--danger-color)";
    });

    // ---------------------------------------
    var welcomeBtn = document.querySelector('.welcome-btn');
    welcomeBtn.setAttribute(
        "style",
        "background: var(--danger-color); border: 0px ;color:var(--white-color);box-shadow: none;"
    );

    // --------------------------------------
    var sectionTitle = document.querySelectorAll('.section-title');
    sectionTitle.forEach(abc => {
        abc.setAttribute(
            "style",
            "background: var(--second-theme);-webkit-background-clip:text;-webkit-text-fill-color: transparent;"
        );
    });

    // --------------------------------------
    const elements1 = document.querySelectorAll(
        '.features-icon, .active-service, .active-service .service-icon, .team-card'
    );

    elements1.forEach(element => {
        element.style.background = "var(--second-theme)";
    });

    // --------------------------------------
    var element = ['#header', '.navbar', '.contact-form', 'footer', '.contact-info', '.features_icon'];

    for (i = 0; i < element.length; i++) {
        document.querySelector(element[i]).style.background = "var(--second-theme)";
    }
}

// Convert Theme Three >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
document.getElementById("theme3").onclick = function themeTwo() {
    // --------------------------------------
    var header = document.querySelectorAll('.header-lg-txt, .header h6, .type');
    header.forEach(header => {
        header.style.color = "var(--dark-color)";
    });

    // ---------------------------------------
    var welcomeBtn = document.querySelector('.welcome-btn');
    welcomeBtn.setAttribute(
        "style",
        "background: var(--dark-color); border: 0px ;color:var(--white-color);box-shadow: none;"
    );

    // --------------------------------------
    var sectionTitle = document.querySelectorAll('.section-title');
    sectionTitle.forEach(abc => {
        abc.setAttribute(
            "style",
            "background: var(--thirt-theme);-webkit-background-clip:text;-webkit-text-fill-color: transparent;"
        );
    });

    // --------------------------------------
    const elements1 = document.querySelectorAll(
        '.features-icon, .active-service, .active-service .service-icon, .team-card'
    );

    elements1.forEach(element => {
        element.style.background = "var(--thirt-theme)";
    });

    // --------------------------------------
    var element = ['#header', '.navbar', '.contact-form', 'footer', '.contact-info', '.features_icon'];

    for (i = 0; i < element.length; i++) {
        document.querySelector(element[i]).style.background = "var(--thirt-theme)";
    }
}