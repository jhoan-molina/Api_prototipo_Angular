package co.org.ccb.appCCB.model;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "establecimiento")
public class establecimiento {
    @Id
    @Column(unique = true, nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "id_actividad_economica")
    private actividad_economica actividad_economica;

    private String nombre;
    private String direccion;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "id_activos")
    private activos activos;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "id_matricula")
    private matricula matricula;

    private Date fecha_matricula;
    private Integer estado;
    
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public actividad_economica getActividad_economica() {
        return actividad_economica;
    }
    public void setActividad_economica(actividad_economica actividad_economica) {
        this.actividad_economica = actividad_economica;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getDireccion() {
        return direccion;
    }
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
    public activos getActivos() {
        return activos;
    }
    public void setActivos(activos activos) {
        this.activos = activos;
    }
    public matricula getMatricula() {
        return matricula;
    }
    public void setMatricula(matricula matricula) {
        this.matricula = matricula;
    }
    public Date getFecha_matricula() {
        return fecha_matricula;
    }
    public void setFecha_matricula(Date fecha_matricula) {
        this.fecha_matricula = fecha_matricula;
    }
    public Integer getEstado() {
        return estado;
    }
    public void setEstado(Integer estado) {
        this.estado = estado;
    }

    

    
    
}
