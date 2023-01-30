exports.middlewares = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.render('404')
    }

    next();
};

// CSRF é um dos ataques mais conhecidos, existe desde a “fundação” da Web. Ele ocorre quando uma requisição HTTP é feita entre sites na tentativa de se passar por um usuário legítimo. Quem se utiliza desse tipo de ataque normalmente foca em fazê-lo esperando que usuário alvo esteja autenticado no site onde a requisição fraudulenta será realizada, a fim de se ter mais privilégios e acessos à operações. E a razão de todo o problema está em como os navegadores lidam com os Cookies.

// esse pacote impossibilita esse tipo de ataque por que ele cria um novo token na hora que é logado

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login.');
        req.session.save(() => res.redirect('/'));
        return;
    }

    next()
}