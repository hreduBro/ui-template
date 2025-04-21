import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        Angular Template by
        <a href="https://hredoysen.netlify.app/" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">HreduBro</a>
    </div>`
})
export class AppFooter {}
