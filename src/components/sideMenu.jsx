import {
  LayoutDashboard,
  CreditCard,
  Database,
  Settings,
  Folder,
  SidebarClose,
  SidebarOpen,
  ChevronDown,
  ChevronRight,
  Moon,
  Sun,
  Layout,
  Globe,
  Cpu,
  PanelsTopLeft,
  SendToBack,
  ImageIcon,
  Menu,
} from "lucide-react";
import { useNavigate } from "../hooks/useNavigate";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setToggleDarkMode, setToggleMenuSide } from "../appSlice";
import logo from "../assets/logotransparent.png";
import { GoApp } from "../services/bridge";
import { useEffect } from "react";
import  DarkModeToggle  from "./darkModeToggle";
export default function SideMenu() {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const toggleMenu = useSelector((state) => state.app.toggleMenuSide);
  const actualWindow = useSelector((state) => state.app.actualWindow);
  const actualProject = useSelector((state) => state.app.actualProject);
  const isDarkMode = useSelector((state) => state.app.darkMode);
  const [editorExpanded, setEditorExpanded] = useState(false);
  const [subItems, setSubItems] = useState([
    // {
    //   name: "unified_editor",
    //   icon: <PanelsTopLeft size={18} />,
    //   label: "Global view",
    // },
    {
      name: "db_editor",
      icon: <Database size={18} />,
      label: "DB Editor"
    },
    {
      name: "api_editor",
      icon: <Settings size={18} />,
      label: "API Editor",
    },
    {
      name: "page_editor",
      icon: <LayoutDashboard size={18} />,
      label: "Page Editor",
    },
    // {
    //   name: "controller_editor",
    //   icon: <Cpu size={18} />,
    //   label: "Controller Editor",
    // },
  ])
  // const [project, setProject] = useState(null)
  const [projectMenu, setProjectMenu] = useState([
    { name: "Models", icon: <Database size={18} /> },
    { name: "Web App", icon: <Layout size={18} /> },
    { name: "Static Site", icon: <Globe size={18} /> },
    { name: "Api", icon: <Settings size={18} /> },
    { name: "Files", icon: <Folder size={18} /> },
    { name: "Export", icon: <SendToBack size={18} /> },
  ])

  let menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Project", icon: <Folder size={18} /> },
    // { name: 'Components', icon: <LucidePuzzle size={18} /> },
    { name: "Subscription", icon: <CreditCard size={18} /> },
  ];

  useEffect(() => {
    const loadProject = async () => {
      const res = await GoApp.fetchProjectByName(actualProject);
      if (res) {
        if (res.type == "api") {
          setSubItems([
            {
              name: "db_editor",
              icon: <Database size={18} />,
              label: "DB Editor"
            },
            {
              name: "api_editor",
              icon: <Settings size={18} />,
              label: "API Editor",
            }
          ])
          setProjectMenu([
            { name: "Models", icon: <Database size={18} /> },
            { name: "Api", icon: <Settings size={18} /> },
            { name: "Files", icon: <Folder size={18} /> },
            { name: "Export", icon: <SendToBack size={18} /> },
          ])
        } else if (res.type == "bdd") {
          setSubItems([
            {
              name: "db_editor",
              icon: <Database size={18} />,
              label: "DB Editor"
            }
          ])
          setProjectMenu([
            { name: "Models", icon: <Database size={18} /> },
            { name: "Files", icon: <Folder size={18} /> },
            { name: "Export", icon: <SendToBack size={18} /> },
          ])
        } else if (res.type == "static") {
          if (res.rest_api != null) {
            setSubItems([
              {
                name: "page_editor",
                icon: <LayoutDashboard size={18} />,
                label: "Page Editor",
              },
              // {
              //   name: "db_editor",
              //   icon: <Database size={18} />,
              //   label: "DB Editor"
              // }, {
              //   name: "api_editor",
              //   icon: <Settings size={18} />,
              //   label: "API Editor",
              // }
            ])
            setProjectMenu([
              // { name: "Models", icon: <Database size={18} /> },
              { name: "Static Site", icon: <Globe size={18} /> },
              // { name: "Api", icon: <Settings size={18} /> },
              { name: "Files", icon: <Folder size={18} /> },
              { name: "Export", icon: <SendToBack size={18} /> },
              { name: 'Assets', icon: <ImageIcon size={18} /> },
            ])
          } else {
            setSubItems([
              {
                name: "page_editor",
                icon: <LayoutDashboard size={18} />,
                label: "Page Editor",
              }
            ])
            setProjectMenu([
              { name: "Static Site", icon: <Globe size={18} /> },
              { name: "Files", icon: <Folder size={18} /> },
              { name: "Export", icon: <SendToBack size={18} /> },
              { name: 'Assets', icon: <ImageIcon size={18} /> },
            ])
          }

        }
      }
    };
    loadProject()
  }, [actualProject]);

  // Ajout des liens directs vers les éditeurs si un projet est actif
  if (actualProject) {
    menuItems.splice(2, 0, {
      name: "Workspace",
      icon: <PanelsTopLeft size={18} />,
      label: "Workspace",
      isDropdown: true,
      subItems: subItems,
    });
    menuItems.push(...projectMenu);
  }

  const handleToggleMenu = (e) => {
    e.preventDefault();
    dispatch(setToggleMenuSide());


  };
  return (
    <>
      <DarkModeToggle></DarkModeToggle>
      {
        !toggleMenu && <button
          onClick={handleToggleMenu}
          className="md:hidden p-2.5 rounded-xl bg-couleur1 text-white shadow-md fixed top-3 right-3 z-50 flex items-center justify-center cursor-pointer"
          aria-label="Menu"
        >
          <Menu size={22} />
        </button>
      }
      <aside
        className={`flex flex-col p-2 dark:bg-gray-950 transition-all duration-300 ease-in-out border-r border-couleur1/10 dark:border-white/10 bg-couleur3
    /* Adaptations mobiles (sur petits écrans) */
    fixed inset-y-0 left-0 z-40 md:relative
    ${toggleMenu ? "w-64 md:w-56" : "w-0 md:w-15 overflow-hidden md:overflow-visible"} 
    ${toggleMenu ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
      >
        <div className="flex items-center gap-2 mb-10 overflow-hidden whitespace-nowrap">
          <div className="w-8 h-8 shrink-0">
            {" "}
            <img src={logo} alt="TurboStack" />{" "}
          </div>
          <span
            className={`text-xl font-bold text-couleur1 transition-all duration-300 ${toggleMenu ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none md:hidden"}`}
          >
            TurboStack
          </span>
        </div>
        <button
          onClick={handleToggleMenu}
          className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all hover:bg-opacity-10 hover:bg-couleur1 w-fit hover:text-couleur3 text-couleur1 justify-start mb-1"
        >
          <div className="shrink-0">
            {toggleMenu ? (
              <SidebarClose size={20}></SidebarClose>
            ) : (
              <SidebarOpen size={20}></SidebarOpen>
            )}
          </div>
        </button>
        <nav className="sidemenu flex-1 space-y-2 overflow-y-scroll">
          {/* Theme Toggle */}


          {menuItems.map((item) => {
            const isSubActive = item.subItems?.some(
              (sub) => actualWindow === sub.name,
            );
            // L'onglet est actif s'il correspond exactement au nom, ou si c'est 'Project' et qu'on est dans une vue de création/accueil projet
            const isActive =
              actualWindow === item.name ||
              isSubActive ||
              (item.name === "Project" &&
                ["New Project", "Project Home Page"].includes(actualWindow));

            if (item.isDropdown) {
              return (
                <div
                  key={item.name}
                  className="flex flex-col gap-1"
                  onMouseEnter={() => !toggleMenu && setEditorExpanded(true)}
                  onMouseLeave={() => !toggleMenu && setEditorExpanded(false)}
                >
                  <div
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all overflow-hidden whitespace-nowrap
                                ${isActive
                        ? "bg-couleur1 text-couleur3 border-couleur1 shadow-sm"
                        : "border-couleur7 text-couleur1 hover:bg-opacity-10 hover:bg-couleur1 hover:text-couleur3"
                      }`}
                    onClick={() =>
                      toggleMenu ? setEditorExpanded(!editorExpanded) : null
                    }
                  >
                    <div className="shrink-0">{item.icon}</div>
                    <div
                      className={`flex-1 flex items-center justify-between transition-all duration-300 ${toggleMenu ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none md:hidden"}`}
                    >
                      <span className="font-medium">
                        {item.label || item.name}
                      </span>
                      {editorExpanded || isSubActive ? (
                        <ChevronDown size={14} />
                      ) : (
                        <ChevronRight size={14} />
                      )}
                    </div>
                  </div>

                  {/* Sous-menu quand la barre est ouverte */}
                  {toggleMenu && (editorExpanded || isSubActive) && (
                    <div className="flex flex-col gap-1 ml-6 pl-4 border-l-2 border-couleur1/10 transition-all">
                      {item.subItems.map((sub) => (
                        <div
                          key={sub.name}
                          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer text-sm transition-all
                                            ${actualWindow === sub.name ? "bg-couleur1 text-couleur3" : "text-couleur1/70 hover:bg-couleur1/5 hover:text-couleur1"}`}
                          onClick={() => {
                            navigateTo(sub.name); if (window.innerWidth < 768) {
                              dispatch(setToggleMenuSide());
                            }
                          }}
                        >
                          {sub.icon}
                          <span>{sub.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Mini menu flottant quand la barre est fermée (repliée) sur desktop */}
                  {!toggleMenu && editorExpanded && (
                    <div className="hidden md:flex fixed left-24 bg-white border border-couleur1/10 rounded-xl shadow-2xl p-2 flex-col gap-1 z-50">
                      {item.subItems.map((sub) => (
                        <div
                          key={sub.name}
                          className={`flex items-center gap-3 p-2 px-4 rounded-lg cursor-pointer text-sm whitespace-nowrap transition-all
                                            ${actualWindow === sub.name ? "bg-couleur1 text-white" : "text-couleur1 hover:bg-couleur3"}`}
                          onClick={() => {
                            navigateTo(sub.name);
                            if (window.innerWidth < 768) {
                              dispatch(setToggleMenuSide());
                            }
                          }
                          }
                        >
                          {sub.icon}
                          <span>{sub.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div
                key={item.name}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all overflow-hidden whitespace-nowrap
                        ${isActive
                    ? "bg-couleur1 text-couleur3 border-couleur1 shadow-sm"
                    : "border-couleur7 text-couleur1 hover:bg-opacity-10 hover:bg-couleur1 hover:text-couleur3"
                  }`}
                onClick={() => {
                  navigateTo(item.name)
                  if (window.innerWidth < 768) {
                    dispatch(setToggleMenuSide());
                  }
                }}
              >
                <div className="shrink-0">{item.icon}</div>
                <span
                  className={`font-medium transition-all duration-300 ${toggleMenu ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none md:hidden"}`}
                >
                  {item.label || item.name}
                </span>
              </div>
            );
          })}
        </nav>
        {/* Bouton Hamburger visible uniquement sur mobile */}

      </aside>
    </>
  );
}
