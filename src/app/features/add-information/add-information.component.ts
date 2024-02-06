import { Component,Inject, OnInit ,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { information } from 'src/app/models/information';
import { InformationService } from 'src/app/services/information.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-add-information',
  templateUrl: './add-information.component.html',
  styleUrls: ['./add-information.component.scss']
})
export class AddInformationComponent {
  constructor(private fb: FormBuilder,
              private service: InformationService){}
  form!: FormGroup;
    ngOnInit(): void {
      this.createForm();
      }
    ngOnDestroy(): void {
      // here we are supposed to unsibscribe all subscribtion methods.
    }

    // a showcase how to call methode from service
    submit(){
      // if there is a working API 
      /*
     this.service.addService(this.form.value).subscribe((res:information)=>{
        setTimeout(() => {
          swal.fire(
            `Ajoutée !`,
            'La base des données des informations est mis à jour !',
            'success'
          );
        }, 300);
        this.form.reset();
     },(error)=>{ console.log(error.error)});
     */

        setTimeout(() => {
          swal.fire(
            `Ajoutée !`,
            'La base des données des informations est mis à jour !',
            'success'
          );
        }, 300);

    }

    createForm() {
      this.form = this.fb.group({
        textInFrensh: ['', [Validators.required,Validators.maxLength(200)]],
        textInArabic: ['', [Validators.required,Validators.maxLength(200)]],
        startDate: ['', Validators.required],
        endDate: [''],
      });
    }
    //method to count words 
    countWords(inputFieldName: string, helpTextId: string) {
      const inputControl = this.form.get(inputFieldName);
      const wordCount = inputControl!.value.split(' ').length;
      const helpText = `${wordCount}/200 mots`; // 
      const inputElement = document.getElementById(inputFieldName);
    
      // Add/remove red-border class based on the word count
      if (wordCount > 200) {
        inputElement!.classList.add('red-border');
      } else {
        inputElement!.classList.remove('red-border');
      }
    
      // Update the displayed word count
      document.getElementById(helpTextId)!.textContent = helpText;
    }
    
}
