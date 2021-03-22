import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { CameraComponent } from "./camera/camera.component";
import { SettingsComponent } from "./settings/settings.component";
import { HelpComponent } from "./help/help.component";
import { DatabaseService } from "./database.service";

//import library for camera
import { WebcamModule } from "ngx-webcam";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, WebcamModule],
  declarations: [
    AppComponent,
    CameraComponent,
    SettingsComponent,
    HelpComponent
  ],
  bootstrap: [AppComponent],
  providers: [DatabaseService]
})
export class AppModule {}
