import { Component } from '@angular/core';
import { Accordian } from '../../Shared/accordian/accordian';

@Component({
  selector: 'app-faq',
  imports: [Accordian],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  faqData = [
    {
      question: 'What warranty do you offer on ATV Quad Bikes?',
      answer:
        'Subhan Enterprises provides a limited 10-day checking warranty on ATV Quad Bikes, applicable to engine and gearbox components only. This warranty is for inspection and testing purposes at the time of delivery.',
    },
    {
      question: 'Where is your main outlet located?',
      answer:
        'Our main outlet and workshop are located in Lahore, where vehicle inspection, mechanical support, and warranty-related checks are carried out.',
    },
    {
      question: 'Do you deliver ATV Quad Bikes all over Pakistan?',
      answer:
        'Yes, we offer nationwide delivery of ATV Quad Bikes and spare parts across Pakistan. Orders are dispatched securely to ensure safe delivery to your location.',
    },
    {
      question: 'Do you sell ATVs in bulk for dealers?',
      answer:
        'Yes, we supply ATV Quad Bikes in bulk for dealers and resellers across Pakistan. Bulk orders are fulfilled from ready stock with proper documentation and invoicing.',
    },
    {
      question: 'Do you provide after-sales mechanical support?',
      answer:
        'Yes, we provide after-sales mechanical support through our designated workshop. Customers are requested to bring their ATV to our workshop for inspection and repair if required.',
    },
    {
      question: 'Are spare parts available for your ATVs?',
      answer:
        'We maintain stock of genuine ATV spare parts to support maintenance and mechanical repairs for the models we supply.',
    },
    {
      question: 'Are ATVs delivered fully assembled?',
      answer:
        'ATV Quad Bikes are delivered in assembled condition. Each unit is checked before delivery to ensure proper engine and gearbox performance.',
    },
    {
      question: 'Can customers request home service or on-site repairs?',
      answer:
        'We do not offer home service. For proper diagnosis and repair, customers are requested to bring the ATV to our workshop where tools and spare parts are available.',
    },
    {
      question: 'Do you provide proper invoices and documentation?',
      answer:
        'Yes, every ATV Quad Bike sale is completed with a proper purchase invoice and necessary documentation for customer record and warranty reference.',
    },
    {
      question: 'Can I leave feedback or a review after purchase?',
      answer:
        'Yes, after successful delivery, customers may share feedback or reviews about their experience. Feedback is optional and helps us improve our services.',
    },
  ];
}
