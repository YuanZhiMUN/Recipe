import { Component, EventEmitter, Output } from "@angular/core";


@Component( {
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() featureSelect = new EventEmitter<string>();

    SelectFeature(feature: string){
        this.featureSelect.emit(feature);
    }
}