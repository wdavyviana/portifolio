var app = document.getElementById('app');

        var typewriter = new Typewriter(app, { loop: true
});

        typewriter.typeString('Olá, Me chamo Wendel Davy')
        .pauseFor(2000)
        .deleteAll()
        .typeString('Sou programadora e gostaria de apresentar meu trabalho para você através deste portfólio.')
        .pauseFor(2500)
        .start();