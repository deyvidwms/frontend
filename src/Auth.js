export const isAuthenticated = () => {
    try {

        let dadosUsuario = JSON.parse( localStorage.getItem("dadosUsuario") ) || null;
    
        if ( dadosUsuario != null && 
            ( typeof dadosUsuario.matricula != null && dadosUsuario.matricula.length > 0 ) &&
            (typeof dadosUsuario.vinculo != null && dadosUsuario.vinculo.length > 0 )
        ) {
            return true;
        } else {
            return false;
        }
    
    } catch (e) {
        return false;
    }    
};