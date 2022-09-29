import { onNavigate } from '../src/main.js'

const mockTemplateLogin = () => {
    const loginContainer = document.createElement('div');
    loginContainer.innerHTML = '<h1>Mock Template Login 1</h1>'
    return loginContainer
}

const mockTemplateRegister = () => {
    const registerContainer = document.createElement('div');
    registerContainer.innerHTML = '<h1>Mock Template register 1 </h1>'
    return registerContainer
}

const mockRoutes = {
    '/login': mockTemplateLogin(),
    '/register': mockTemplateRegister(),
}

describe('onNavigate', ()=>{
    it('test de onNavigate', ()=>{
        document.body.innerHTML = '<section id="root"></section>'
        onNavigate('/login', mockRoutes)
        console.log('contenido: ', document.getElementById('root').textContent);
        expect(document.getElementById('root').textContent).toEqual('Mock Template Login 1')
    })
    it('test de onNavigate', ()=>{
        document.body.innerHTML = '<section id="root"></section>'
        onNavigate('/register', mockRoutes)
        console.log('contenido: ', document.getElementById('root').textContent);
        expect(document.getElementById('root').textContent.trim()).toEqual('Mock Template register 1')
    })
})
