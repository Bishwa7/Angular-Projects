import { Component, viewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-lazy-child-two',
  standalone:true,
  imports: [],
  templateUrl: './lazy-child-two.html',
  styleUrl: './lazy-child-two.css',
})
export class LazyChildTwo {

  container = viewChild("container",{read: ViewContainerRef} )

  async loadUserDetails() {
    const containerRef = this.container();

    if(!containerRef){
      return;
    }

    containerRef.clear();

    const { DynamicLoadPage } = await import('../dynamic-load-page/dynamic-load-page')

    containerRef.createComponent(DynamicLoadPage)
  }
}
