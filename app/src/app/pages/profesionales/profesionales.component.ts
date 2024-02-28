import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { last } from 'rxjs';
import { Professional } from 'src/app/models/professional';
import { Respuesta } from 'src/app/models/respuesta';
import { ProfesionalesService } from 'src/app/shared/profesionales.service';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit {

  public profesionales: Professional[]

  constructor ( public profesionalesService: ProfesionalesService,
                private toastr:ToastrService){}

ngOnInit(): void {
  this.getProfesionales()
}

getProfesionales(){
  this.profesionalesService.getProfesionales().subscribe((res:Respuesta) => {
    if(!res.error){
      this.profesionales = res.data
    }

  })
}

getProfesional(name:string, lastName:string){
  
    if(name && lastName){
      this.profesionalesService.getProfesional(name, lastName).subscribe((res: Respuesta)=>{
        if(!res.error){
        this.profesionales = res.data
        this.toastr.success( res.mensaje, '¡Éxito!')
        } else {
          this.toastr.error(res.mensaje,'¡OH NO!')
        }
      })
    } else 
      this.getProfesionales()
      this.toastr.error('Se necesitan Nombre y Apellido','¡OH NO!')
  }

postProfesional(name:string, lastName:string, age:number, nationality:string, profession:string,
                oscarNumber:number, photo:string, height:number, weight:number){
  let profesional = new Professional(name, lastName, age,nationality, profession, oscarNumber, photo, height, weight)

  if(profesional){
    this.profesionalesService.postProfesional(profesional).subscribe((res:Respuesta) => {
      if(!res.error){
        this.toastr.success(res.mensaje, '¡Éxito!')
         this.getProfesionales()
        
      } else  {
        this.toastr.error(res.mensaje, '¡OH NO!')
      }
      
    })
  } 

  }

putProfesional(nameSearch: string, lastNameSearch:string, name:string, lastName:string, age:number, nationality:string, profession:string,
      oscarNumber:number, photo:string, height:number, weight:number){
    
    let profesional = new Professional(name, lastName, +age,nationality, profession, +oscarNumber, photo, +height, +weight) 
    profesional.nameSearch = nameSearch,
    profesional.lastNameSearch = lastNameSearch

    if(nameSearch && lastNameSearch){
        this.profesionalesService.putProfesional(profesional).subscribe((res:Respuesta) => {
        if(!res.error){
          this.getProfesionales()
          this.toastr.success(res.mensaje, '¡Éxito!')
      
        } else  {
          this.toastr.error(res.mensaje,'¡OH NO!')
        }
      })

    } else {
      this.toastr.error('Se necesitan Nombre y Apellido','¡OH NO!')
    }
  }

deleteProfesional(name:string, lastName:string){

  if(name && lastName){
    this.profesionalesService.deleteProfesional(name, lastName).subscribe((res:Respuesta)=>{

      if(!res.error){
          this.toastr.error(res.mensaje, '¡Éxito!')
          this.getProfesionales()
          
      } else {
        this.toastr.error(res.mensaje,'¡OH NO!')
      }
    })

  } else {
    this.toastr.error('Se necesitan Nombre y Apellido','¡OH NO!')
  }}
}
