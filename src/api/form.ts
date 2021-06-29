export const User = {
    login: 'steve.jobs@example.com',
    password: 'password'
}

export const createCookie = (login:string, password:string) => {
    document.cookie = 'login=' + login +'; expires=Sun, 16 Jul 3567 06:23:41 GMT'
    document.cookie = 'password=' + password +'; expires=Sun, 16 Jul 3567 06:23:41 GMT'
}


export const removeCookie = () => {
    document.cookie = 'login=; expires=Sun, 16 Jul 2010 06:23:41 GMT'
    document.cookie = 'password=; expires=Sun, 16 Jul 2010 06:23:41 GMT'
}

export const cookieLogin = document.cookie.split(';')[0].split('=')[1]
