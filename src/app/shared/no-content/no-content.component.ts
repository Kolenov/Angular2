import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'cr-no-content',
	template: `
    <div>
      <h1>404: page missing</h1>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoContentComponent {

}
