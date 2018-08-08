import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModules} from '../shared/shared.modules';
import {ticketReducer} from './store/ticket.reducers';
import {TicketEffects} from './store/ticket.effects';
import {TicketsComponent} from './tickets.component';
import {TicketEditComponent} from './ticket-edit/ticket-edit.component';
import {TicketsRoutingModule} from './tickets-routing.module';
import { TicketStartComponent } from './ticket-start/ticket-start.component';
import {ReactiveFormsComponent} from './ticket-edit/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    TicketsComponent,
    TicketEditComponent,
    TicketStartComponent,
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule, //Must be here
    ReactiveFormsModule,
    SharedModules,
    TicketsRoutingModule,
    StoreModule.forFeature('tickets', ticketReducer),
    EffectsModule.forRoot([TicketEffects])
  ],
})
export class TicketsModule {}
