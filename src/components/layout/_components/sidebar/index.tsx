// materials
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Tooltip from '@mui/material/Tooltip'
//
import MENUS from './_constants/menus'

export default function Sidebar() {
    return (
        <Drawer
            sx={({ additional }) => ({
                width: additional.components.sidebar.width,
                '& .MuiDrawer-paper': {
                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    backgroundColor: additional.background.secondary,
                    border: 'none',
                    width: additional.components.sidebar.width,
                },
            })}
            variant="permanent">
            <List
                sx={{
                    flexGrow: 1,
                }}>
                {MENUS.map((menu, i) => (
                    <ListItem key={i} disablePadding sx={{ my: 2.75 }}>
                        <Tooltip title={menu.text} placement="right" arrow>
                            <ListItemButton
                                disableRipple
                                sx={theme => ({
                                    p: 0,
                                    justifyContent: 'center',
                                    color: theme.palette.text.secondary,
                                    '&:hover': {
                                        color: theme.palette.text.primary,
                                        backgroundColor: 'unset',
                                    },
                                })}
                                href={menu.href}>
                                <ListItemIcon
                                    sx={{
                                        minWidth: 'unset',
                                        maxWidth: 'unset',
                                        color: 'unset',
                                    }}>
                                    <menu.Icon
                                        sx={{
                                            fontSize: '1.75em',
                                        }}
                                    />
                                </ListItemIcon>
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>

            {/* <List
                sx={{
                    mb: 4,
                }}>
                <ListItem disablePadding sx={{ display: 'block', my: 1 }}>
                    <Tooltip
                        title={
                            (showBackground ? 'Disable' : 'Enable') +
                            ' Background'
                        }
                        placement="right">
                        <ListItemButton
                            disableRipple
                            sx={theme => ({
                                justifyContent: 'center',
                                fontSize: '2rem',
                                color: showBackground
                                    ? theme.palette.info.main
                                    : theme.palette.text.secondary,
                                '&:hover': {
                                    color: showBackground
                                        ? theme.palette.info.dark
                                        : theme.palette.text.primary,
                                    backgroundColor: 'unset',
                                },
                            })}
                            onClick={() => {
                                setShowBackground(prev => !prev)
                            }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 'unset',
                                    justifyContent: 'center',
                                    color: 'unset',
                                }}>
                                <WallpaperIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </Tooltip>
                </ListItem>
            </List> */}
        </Drawer>
    )
}
