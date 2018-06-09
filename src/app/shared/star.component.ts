import { Component, OnChanges, SimpleChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-stars',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    @Input() id: number;
    starWidth: number;

    ngOnChanges(changes: SimpleChanges): void {
        var fullStars = Math.floor(this.rating); 
        var halfStars = this.rating % 1;
        if(halfStars >= 0.5)
            fullStars += 0.5;
        this.starWidth = fullStars * 86 / 5;
    }

    @Output() entryClicked: EventEmitter<number> = new EventEmitter<number>();

    onClick() : void {
        this.entryClicked.emit(this.id);
    }

}