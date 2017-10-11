# Add basic component

1. Write a new component, ExampleComponent, from scratch:

```
import { Component } from '@angular/core';

@Component ({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css']
})

export class ExampleComponent {
  constructor() {}
  
}
```

2. Add ExampleComponent to AppModule
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// Import ExampleComponent here (Don't add '.ts' to the filepath!)
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent // Add ExampleComponent to AppModule's declarations 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
```
