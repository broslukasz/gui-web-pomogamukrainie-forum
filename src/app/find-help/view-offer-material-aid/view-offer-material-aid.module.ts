import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReplyOfferModule } from '../reply-offer/reply-offer.module';
import { ViewOfferMaterialAidComponent } from './view-offer-material-aid.component';
import { ViewOfferMaterialAidRoutingModule } from './view-offer-material-aid.routing.module';

@NgModule({
  declarations: [ViewOfferMaterialAidComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    TranslateModule,
    MatIconModule,
    ReplyOfferModule,
    ViewOfferMaterialAidRoutingModule,
  ],
  exports: [ViewOfferMaterialAidComponent],
})
export class ViewOfferMaterialAidModule {}
