import {
  Sidebar as SidebarPro,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

export default function Sidebar() {
  return (
    <SidebarPro>
      <Menu>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </SidebarPro>
  );
}
