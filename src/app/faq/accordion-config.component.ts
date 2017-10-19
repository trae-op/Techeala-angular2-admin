

import {Component, Input} from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { FaqData } from './faqData';

@Component({
  selector: 'ngbd-accordion-config',
  templateUrl: './accordion-config.component.html',
  providers: [NgbAccordionConfig] // add the NgbAccordionConfig to the component providers
})
export class NgbdAccordionConfig {
  @Input() faqData: FaqData;
  constructor(config: NgbAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
    config.type = 'info';
  }
}