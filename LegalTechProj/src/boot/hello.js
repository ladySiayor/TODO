import hello from 'hellojs'//'../facebookAuth'

export default ({ Vue }) => {
    hello.init({
        facebook: '486794746146222',//'469714168126139'//'333571475346388'
        google: '851791109142-jbbhb2dh2fm9fgl2t3i6njsepmk1b902.apps.googleusercontent.com'
    }, { redirect_uri: 'https://localhost:8081/todo' }//{ redirect_uri: 'https://192.168.11.230:8081/todo/' }
    )
}