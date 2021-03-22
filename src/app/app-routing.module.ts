import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SettingsComponent } from "./settings/settings.component";
import { CameraComponent } from "./camera/camera.component";
import { HelpComponent } from "./help/help.component";

const routes: Routes = [
  { path: "", redirectTo: "/settings", pathMatch: "full" },
  { path: "settings", component: SettingsComponent },
  { path: "camera", component: CameraComponent },
  { path: "help", component: HelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
