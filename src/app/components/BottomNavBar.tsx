import { Home, Chat, Mail } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export default function BottomNavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (pathname === '/events/home') {
      setValue(0);
    } else if (pathname === '/chats/group/chat-list') {
      setValue(1);
    } else if (pathname === '/chats/penpal/chat-list') {
      setValue(2);
    }
  }, [pathname]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: 'white',
        fontFamily: nunito.style.fontFamily,
        '& .MuiBottomNavigationAction-label': {
          fontFamily: nunito.style.fontFamily,
        },
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<Home />}
        onClick={() => router.push('/events/home')}
        sx={{
          color: pathname === '/events/home' ? 'blue' : 'inherit',
          '&.Mui-selected': {
            color: 'blue',
          },
          '& .MuiBottomNavigationAction-label': {
            fontFamily: nunito.style.fontFamily,
          },
        }}
      />
      <BottomNavigationAction
        label="Groups"
        icon={<Chat />}
        onClick={() => router.push('/chats/group/chat-list')}
        sx={{
          color: pathname === '/chats/group/chat-list' ? 'blue' : 'inherit',
          '&.Mui-selected': {
            color: 'blue',
          },
          '& .MuiBottomNavigationAction-label': {
            fontFamily: nunito.style.fontFamily,
          },
        }}
      />
      <BottomNavigationAction
        label="Messages"
        icon={<Mail />}
        onClick={() => router.push('/chats/penpal/chat-list')}
        sx={{
          color: pathname === '/chats/penpal/chat-list' ? 'blue' : 'inherit',
          '&.Mui-selected': {
            color: 'blue',
          },
          '& .MuiBottomNavigationAction-label': {
            fontFamily: nunito.style.fontFamily,
          },
        }}
      />
    </BottomNavigation>
  );
}