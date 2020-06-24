import { Component, ViewChild, ElementRef } from "@angular/core";
declare var tableau: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  viz: any;
  @ViewChild("vizContainer") containerDiv: ElementRef;

  ngAfterViewInit() {
    this.initTableau();
  }

  initTableau() {
    // const containerDiv = document.getElementById("vizContainer");
    const vizUrl =
      "https://public.tableau.com/views/Livro1_15929716086620/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

    
    const options = {
      hideTabs: true,
      onFirstInteractive: () => {
        console.log("onFirstInteractive");
      },
      onFirstVizSizeKnown: () => {
        console.log("onFirstVizSizeKnown");
      }
    };
    this.viz = new tableau.Viz(
      this.containerDiv.nativeElement,
      vizUrl,
      options
    );



  }
}
