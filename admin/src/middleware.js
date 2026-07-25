import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
    const rotasProtegidas = ['/dashboard', '/lives'];
    const url = new URL(context.request.url);

    const session = context.cookies.get('admin_session');
    
    if (rotasProtegidas.includes(url.pathname)) {
        const session = context.cookies.get('admin_session');
        
        if (!session) {
            return context.redirect('/');
        }
    }
    if (url.pathname === '/') {
        if (session) {
            return context.redirect('/dashboard');
        }
    }
    return next();
});