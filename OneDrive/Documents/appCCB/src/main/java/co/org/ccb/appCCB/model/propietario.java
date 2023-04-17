package co.org.ccb.appCCB.model;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "propietario")
public class propietario {
    @Id
    @Column(unique = true, nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "tipo_id_id")
    private tipo_id tipo_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "tipo_persona_id")
    private tipo_persona tipo_persona;

    private String nombre;
    private String apellido;
    private String direccion;
    private String email;
    private Date fecha_registro;
    private Integer estado;
    
    /*public propietario() {
    }

    public propietario(Integer id, co.org.ccb.appCCB.model.tipo_id tipo_id,
            co.org.ccb.appCCB.model.tipo_persona tipo_persona, String nombre, String apellido, String direccion,
            String email, Date fecha_registro, Integer estado) {
        this.id = id;
        this.tipo_id = tipo_id;
        this.tipo_persona = tipo_persona;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.email = email;
        this.fecha_registro = fecha_registro;
        this.estado = estado;
    }*/

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public tipo_id getTipo_id() {
        return tipo_id;
    }

    public void setTipo_id(tipo_id tipo_id) {
        this.tipo_id = tipo_id;
    }

    public tipo_persona getTipo_persona() {
        return tipo_persona;
    }

    public void setTipo_persona(tipo_persona tipo_persona) {
        this.tipo_persona = tipo_persona;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getFecha_registro() {
        return fecha_registro;
    }

    public void setFecha_registro(Date fecha_registro) {
        this.fecha_registro = fecha_registro;
    }

    public Integer getEstado() {
        return estado;
    }

    public void setEstado(Integer estado) {
        this.estado = estado;
    }

    

}
