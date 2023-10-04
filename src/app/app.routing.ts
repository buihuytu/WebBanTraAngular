  import { Routes } from "@angular/router";
  export const AppRoutes: Routes = [
    {
      path: "admin",
      children: [
        {
          path: "",
          loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule),
        },
      ],
    },
    {
      path: "",
      redirectTo: "/home",
      pathMatch: "full",
    },
    
  ];
  