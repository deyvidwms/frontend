export const isAuthenticated = () => {
    try {

        let dadosUsuario = JSON.parse( localStorage.getItem("dadosUsuario") ) || null;
    
        if ( dadosUsuario !== null && 
            ( typeof dadosUsuario.matricula !== "undefined" && dadosUsuario.matricula.length > 0 ) &&
            ( typeof dadosUsuario.vinculo !== "undefined" && dadosUsuario.vinculo.length > 0 )
        ) {
            return true;
        } else {
            return false;
        }
    
    } catch (e) {
        return false;
    }    
};