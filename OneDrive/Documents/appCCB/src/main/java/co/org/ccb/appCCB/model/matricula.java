package co.org.ccb.appCCB.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "matricula")
public class matricula {
    @Id
    @Column(unique = true, nullable = false)
    private Integer id;

    private Date fecha_matricula;
    private Double valor;
    private Integer estado;
    
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public Date getFecha_matricula() {
        return fecha_matricula;
    }
    public void setFecha_matricula(Date fecha_matricula) {
        this.fecha_matricula = fecha_matricula;
    }
    public Double getValor() {
        return valor;
    }
    public void setValor(Double valor) {
        this.valor = valor;
    }
    public Integer getEstado() {
        return estado;
    }
    public void setEstado(Integer estado) {
        this.estado = estado;
    }

    
}
