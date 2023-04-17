package co.org.ccb.appCCB.model;

import javax.persistence.*;

@Entity
@Table(name = "activos")
public class activos {
    
    @Id
    @Column(unique = true, nullable = false)
    private Integer id;

    @Column(nullable = true)
    private Double activo_uvt;

    @Column(nullable = true)
    private Double activo_pesos;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getActivo_uvt() {
        return activo_uvt;
    }

    public void setActivo_uvt(Double activo_uvt) {
        this.activo_uvt = activo_uvt;
    }

    public Double getActivo_pesos() {
        return activo_pesos;
    }

    public void setActivo_pesos(Double activo_pesos) {
        this.activo_pesos = activo_pesos;
    }
}
