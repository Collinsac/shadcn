import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { NavLink, useNavigate } from "react-router-dom";

const AppSideBar = () => {
  const navigate = useNavigate();
  const Data = [
    {
      title: "Documentation",
      sub: [
        {
          title: "Charte Utilisateurs",
          route: "/home/utilisateurs",
        },
        {
          title: "Charte Administrateurs",
          route: "/home/administrateurs",
        },
        {
          title: "Code Ethique",
          route: "/home/ethique",
        },
        {
          title: "Notes de Services",
          route: "/home/notes de services",
        },
      ],
    },
    {
      title: "Notifications",
      route: "/home/notifications",
    },
    {
      title: "Quizz",
      route: "/home/quizz",
    },
    {
      title: "Declaration",
      route: "/home/declaration",
    },
    {
      title: "FAQ",
      route: "/home/faq",
    },
  ];

  const TypeOne = (props) => {
    return (
      <NavLink
        to={props.route}
        className={({ isActive }) => `${isActive ? "text-red-600" : ""}`}
      >
        <SidebarMenuItem>
          <SidebarMenuButton className="p-5 font-bold rounded-none">
            {props.title}
          </SidebarMenuButton>
        </SidebarMenuItem>
      </NavLink>
    );
  };

  const TypeTwo = (props) => {
    return (
      <Collapsible defaultOpen className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className="p-5 font-bold rounded-none">
              <p>{props.title}</p>
            </SidebarMenuButton>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <SidebarMenuSub className="border-none px-0 mr-0 gap-[1px]">
              {props.sub.map((item) => (
                <SidebarMenuSubItem key={item.title}>
                  <SidebarMenuSubButton
                    className="p-5 font-bold rounded-none bg-white"
                    onClick={() => navigate(item.route)}
                  >
                    {item.title}
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    );
  };
  return (
    <Sidebar>
      <SidebarContent className="pt-[45px] overflow-hidden">
        <SidebarGroup className="px-0">
          <SidebarMenu>
            {Data.map((item) => {
              if (item.sub) {
                return <TypeTwo key={item.title} {...item} />;
              } else {
                return <TypeOne key={item.title} {...item} />;
              }
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSideBar;
