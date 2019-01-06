
import { NgModule } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';


@NgModule({
    imports: [
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatExpansionModule,

    ],
    exports: [
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatExpansionModule,

    ],
})

export class MaterialModule {

}
