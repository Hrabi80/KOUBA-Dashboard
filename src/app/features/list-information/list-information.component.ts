import { Component } from '@angular/core';
import { information } from 'src/app/models/information';

@Component({
  selector: 'app-list-information',
  templateUrl: './list-information.component.html',
  styleUrls: ['./list-information.component.scss']
})
export class ListInformationComponent {
    data:information[]=[
      {
      textInFrensh:"lorem epsilom...",
      textInArabic:"loreme...",
      user:"Ahmed",
      startDate:"15-05-2021",
      endDate:"20/03/2021",
      status:true
    },
    {
      textInFrensh:"lorem epsilom...",
      textInArabic:"loreme...",
      user:"Ahmed",
      startDate:"15-05-2021",
      endDate:"20/03/2021",
      status:false
    },
    {
      textInFrensh:"lorem epsilom...",
      textInArabic:"loreme...",
      user:"Ahmed",
      startDate:"15-05-2021",
      endDate:"20/03/2021",
      status:true
    },
    {
      textInFrensh:"lorem epsilom...",
      textInArabic:"loreme...",
      user:"Ahmed",
      startDate:"15-05-2021",
      endDate:"20/03/2021",
      status:true
    },
    {
      textInFrensh:"lorem epsilom...",
      textInArabic:"loreme...",
      user:"Ahmed",
      startDate:"15-05-2021",
      endDate:"20/03/2021",
      status:false
    },
    {
      textInFrensh:"lorem epsilom...",
      textInArabic:"loreme...",
      user:"Ahmed",
      startDate:"15-05-2021",
      endDate:"20/03/2021",
      status:true
    },
  ];
}
