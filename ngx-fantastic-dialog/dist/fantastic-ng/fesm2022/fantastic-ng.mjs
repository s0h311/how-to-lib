import * as i0 from '@angular/core';
import { Injectable, Component, Input } from '@angular/core';

class FantasticNgService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: FantasticNgService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: FantasticNgService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: FantasticNgService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class FantasticNgComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: FantasticNgComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0", type: FantasticNgComponent, isStandalone: true, selector: "lib-fantastic-ng", inputs: { title: "title", primaryCtaText: "primaryCtaText", secondaryCtaText: "secondaryCtaText" }, ngImport: i0, template: "<dialog>\n  <h3>{{ title }}</h3>\n\n  <ng-content></ng-content>\n\n  <div class=\"ctaRow\">\n    <button>{{ secondaryCtaText }}</button>\n    <button>{{ primaryCtaText }}</button>\n  </div>\n</dialog>\n", styles: ["dialog{display:grid;padding:16px;border-radius:10px;gap:20px}.ctaRow{display:flex;justify-content:space-between}.ctaRow button{width:100%}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: FantasticNgComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-fantastic-ng', standalone: true, imports: [], template: "<dialog>\n  <h3>{{ title }}</h3>\n\n  <ng-content></ng-content>\n\n  <div class=\"ctaRow\">\n    <button>{{ secondaryCtaText }}</button>\n    <button>{{ primaryCtaText }}</button>\n  </div>\n</dialog>\n", styles: ["dialog{display:grid;padding:16px;border-radius:10px;gap:20px}.ctaRow{display:flex;justify-content:space-between}.ctaRow button{width:100%}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], primaryCtaText: [{
                type: Input
            }], secondaryCtaText: [{
                type: Input
            }] } });

/*
 * Public API Surface of fantastic-ng
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FantasticNgComponent, FantasticNgService };
//# sourceMappingURL=fantastic-ng.mjs.map
