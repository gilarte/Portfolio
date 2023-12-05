/**
 * EN DESARROLLO
 */

// Obtén una referencia al botón de alternancia y al contenido que deseas traducir
const languageToggleButton = document.getElementById("toggleLanguage");
const h2Element = document.querySelector(".inicio h2"); // Obtén la referencia al elemento h2.
const h2Sobremi = document.querySelector(".sobremi h2");
const spansobremi = document.querySelector(".sobremi p span");
const textosobremi = document.querySelector(".sobremi p");
const h3Sobremi = document.querySelector(".sobremi h3");
const h3Educacion = document.querySelector(".curriculum h3#educacion");
const h4Educacion1 = document.querySelector(".curriculum h4#tituloEd1");
const h4Educacion2 = document.querySelector(".curriculum h4#tituloEd2");
const textEd1 = document.querySelector(".curriculum p#textEd1");
const textEd2 = document.querySelector(".curriculum p#textEd2");






// Define las traducciones
const translations = {
    espanol: {
        buttonText: "Español",
        h2Text: "Desarrollador de software | Java, C#, Entity framework, Springboot, API REST, .NET",
        h2Sobremi: "Sobre mí",
        spansobremi: "Hola, soy Rafael Ángel Gilarte Núñez.",
        textosobremi: "Soy un desarrollador de software de 21 años con una pasión por la informática desde siempre. Disfruto trabajando en equipo y soy sociable por naturaleza. Mi enfoque se centra en el desarrollo de software de calidad, buscando constantemente mejorar mis habilidades y mantenerme actualizado en las últimas tendencias del campo. Estoy emocionado por contribuir con mis conocimientos al equipo de desarrollo de software de su empresa y aportar soluciones innovadoras en un entorno estimulante.",
        h3Sobremi: "Datos personales",
        h3Educacion: "Educación",
        h4Educacion1: "Desarrollador de aplicaciones multiplataforma",
        textEd1: "Durante mi formación académica como desarrollador de software, he aprendido varios lenguajes de porgramacion y frameworks:",
        h4Educacion2: "Técnico en sistemas microinformáticos y de redes",
        textEd2: "Durante mi formación académica como técnico en sistemas microinformáticos y de redes, he aprendido:",




    },
    english: {
        buttonText: "English",
        h2Text: "Software Developer | Java, C#, Entity framework, Springboot, REST API, .NET",
        h2Sobremi: "About me",
        spansobremi: "Hi, I´m Rafael Ángel Gilarte Núñez.",
        textosobremi: "I am a 21-year-old software developer with a lifelong passion for computing. I enjoy working in a team and I am sociable by nature. My focus is on quality software development, constantly seeking to improve my skills and stay up to date on the latest trends in the field. I am excited to contribute my knowledge to your company's software development team and provide innovative solutions in a stimulating environment.",
        h3Sobremi: "personal information",
        h3Educacion: "Education",
        h4Educacion1: "Software Development Multiplatform", 
        textEd1: "During my academic training as a software developer, I have learned several programming languages ​​and frameworks:",
        h4Educacion2: "Technician in microcomputer and network systems",
        textEd2: "During my academic training as a technician in microcomputer and network systems, I have learned:",



    },
};

let isEnglish = false; // Establece el idioma predeterminado como español

// Función para cambiar el idioma
function toggleLanguage() {
    isEnglish = !isEnglish; // Invierte el estado del idioma

    // Actualiza el contenido de la página con la traducción correspondiente
    
    h2Element.innerHTML =`<h2>${isEnglish ? translations.english.h2Text : translations.espanol.h2Text}</h2>`;
    h2Sobremi.innerHTML =`<h2>${isEnglish ? translations.english.h2Sobremi : translations.espanol.h2Sobremi}</h2>`;
    spansobremi.innerHTML =`<span>${isEnglish ? translations.english.spansobremi : translations.espanol.spansobremi}</span>`;
    textosobremi.innerHTML =`${isEnglish ? translations.english.textosobremi : translations.espanol.textosobremi}`;
    h3Sobremi.innerHTML =`<h3>${isEnglish ? translations.english.h3Sobremi : translations.espanol.h3Sobremi}</h3>`;
    h3Educacion.innerHTML =`<h3>${isEnglish ? translations.english.h3Educacion : translations.espanol.h3Educacion}</h3>`;
    h4Educacion1.innerHTML =`<h4>${isEnglish ? translations.english.h4Educacion1 : translations.espanol.h4Educacion1}</h4>`;
    h4Educacion2.innerHTML =`<h4>${isEnglish ? translations.english.h4Educacion2 : translations.espanol.h4Educacion2}</h4>`;
    textEd1.innerHTML =`${isEnglish ? translations.english.textEd1 : translations.espanol.textEd1}`;
    textEd2.innerHTML =`${isEnglish ? translations.english.textEd2 : translations.espanol.textEd2}`;



    // Cambia el texto del botón
    languageToggleButton.textContent = isEnglish ? translations.english.buttonText : translations.espanol.buttonText;
}

// Asigna la función toggleLanguage al evento click del botón
languageToggleButton.addEventListener("click", toggleLanguage);
