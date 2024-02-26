import { Component, OnInit } from '@angular/core';
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

  constructor ( public profesionalesService: ProfesionalesService){}

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
      this.profesionales = res.data
    })
  } else 
    this.getProfesionales()
}

postProfesional(name:string, lastName:string, age:number, nationality:string, profession:string,
                oscarNumber:number, photo:string, height:number, weight:number){
  let profesional = new Professional(name, lastName, age,nationality, profession, oscarNumber, photo, height, weight)

  if(profesional){
    this.profesionalesService.postProfesional(profesional).subscribe((res:Respuesta) => {
      if(!res.error){
     this.getProfesionales()
        
      } else  console.log(res.mensaje);
      
    })
  }

  }

putProfesional(name:string, lastName:string, age:number, nationality:string, profession:string,
      oscarNumber:number, photo:string, height:number, weight:number){
    let profesional = new Professional(name, lastName, age,nationality, profession, oscarNumber, photo, height, weight)
    
    if(profesional){
    this.profesionalesService.putProfesional(profesional).subscribe((res:Respuesta) => {
    if(!res.error){
    this.getProfesionales()
    
    } else  console.log(res.mensaje);
    
    })
    }

  }

deleteProfesional(name:string, lastName:string){
  if(name && lastName){
    this.profesionalesService.deleteProfesional(name, lastName).subscribe((res:Respuesta)=>{
      this.getProfesionales()
      console.log(res.mensaje);
      
    })
  }
}

}
