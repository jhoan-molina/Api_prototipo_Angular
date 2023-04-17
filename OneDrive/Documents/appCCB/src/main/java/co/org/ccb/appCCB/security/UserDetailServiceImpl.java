package co.org.ccb.appCCB.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import co.org.ccb.appCCB.model.usuario;
import co.org.ccb.appCCB.repository.usuarioRepo;

@Service
public class UserDetailServiceImpl implements UserDetailsService{

    @Autowired
    private usuarioRepo usuarioRepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        usuario usuario = usuarioRepo.findOneByEmail(email)
        .orElseThrow(() -> new UsernameNotFoundException("El usuario con el correo "+email+" no existe."));
        return new UserDetailsImpl(usuario);
    }
    
}
