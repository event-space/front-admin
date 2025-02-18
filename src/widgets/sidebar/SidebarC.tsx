import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/SchoolOutlined';
import GroupIcon from '@mui/icons-material/Group';
import { LogoutOutlined, PaymentOutlined } from '@mui/icons-material';
import { useSidebar } from '../../app/store/useSidebar';
import { useUserStore } from '../../app/store/useUserStore';
import { useLocation } from 'react-router-dom';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const SidebarC = () => {
  const { isSidebarOpen } = useSidebar();
  const { logout } = useUserStore();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: <HomeIcon />, path: '/' },
    { name: 'Users', icon: <GroupIcon />, path: '/users' },
    { name: 'Spaces', icon: <LocationCityIcon />, path: '/spaces' },
    { name: 'Calendar', icon: <CalendarMonthIcon />, path: '/calendar' },
    { name: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  ];

  return (
    <Sidebar collapsed={!isSidebarOpen}>
      <Menu>
        <MenuItem icon={<SchoolIcon />}>Event Space</MenuItem>
        {menuItems.map(item => (
          <MenuItem
            key={item.name}
            icon={item.icon}
            active={location.pathname === item.path}
            href={item.path}
            style={{
              color: location.pathname === item.path ? '#1976d2' : 'grey',
            }}
          >
            {item.name}
          </MenuItem>
        ))}
        <MenuItem
          icon={<LogoutOutlined />}
          onClick={logout}
          style={{
            color: 'grey',
          }}
        >
          Leave
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarC;
