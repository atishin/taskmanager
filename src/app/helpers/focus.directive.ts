import { Directive, ElementRef, Output, EventEmitter, OnInit, OnDestroy, Input, Renderer} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Directive({
    selector: '[vcFocus]'
})
export class FocusDirective implements OnInit, OnDestroy {

    @Input() private vcFocus: EventEmitter<void>;
    private subscription: Subscription;

    constructor(private elementRef: ElementRef, private renderer: Renderer) {}

    public ngOnInit() {
        this.subscription = this.vcFocus.subscribe(() => {
            setTimeout(() => {
                this.focused();
            });
        });
    }
    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private focused() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
    }
}
