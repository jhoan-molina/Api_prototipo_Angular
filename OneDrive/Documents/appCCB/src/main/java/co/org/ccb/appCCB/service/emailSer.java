package co.org.ccb.appCCB.service;


import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class emailSer {
    @Autowired
    JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String email;

    public void sendListEmail(String emailTo, String subject){
        MimeMessage message = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setFrom(email);
            helper.setTo(emailTo);
            helper.setSubject(subject);
            helper.setText("Información para unirse a una reunión\nEnlace a la videollamada: https://meet.google.com/bau-vzmw-pmw \n Este mensaje ha sido enviado desde el backend de la aplicacion.");
            javaMailSender.send(message);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
