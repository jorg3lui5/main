import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'assessment',
    templateUrl: './assessment.component.html',
    styles:[`
      :host
        width:100%
    `]
})
export class AssessmentComponent {
    show = false
    showAssessment = false

    step = 'assessment'

    stepScoring = ''

    card=true

    constructor(private route:Router){

    }


    clickShow(): void {
        this.show = !this.show
      }
    clickContinue(): void {
        this.showAssessment= true
      }
    clickAssessment(): void {
        this.step= 'assessment'
      }
    clickScoring(): void {
        this.step= 'scoring'
      }
   clickScoringCard(): void {
        this.step= 'scoring-card'
      }
    clickInformation(): void {
        this.step= 'information'
      }
    clickData(): void {
        this.step= 'data'
      }
    clickSignature(): void {
        this.step= 'signature'
      }
    clickPrint(): void {
        this.step= 'print'
      }
    clickInsurance(): void {
        this.step= 'insurance'
      }
    clickChangecard1(): void {
        this.card=  true
      }
   clickChangecard2(): void {
        this.card=  false
      }
    scroll(id:HTMLElement): void {
      id.scrollIntoView({behavior: 'smooth'});
      }

    }
