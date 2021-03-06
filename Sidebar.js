import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
import { AllInbox, Chat, Delete, ImportantDevices, Schedule } from '@material-ui/icons';

function Sidebar() {

    //action for compose button
    const dispatch = useDispatch();

    return (
        <div className = "sidebar">
            <Button
                startIcon = {<AddIcon fontSize = "Large"  className="plus"/>}
                className = "sidebar__compose"
                onClick = {() => dispatch(openSendMessage())}
            >
                Compose
            </Button>

            <SidebarOption Icon = {InboxIcon} title = "Inbox" number = {55} selected = {true} />
            <SidebarOption Icon = {StarIcon} title = "Starred" number = {10} />
            <SidebarOption Icon = {AccessTimeIcon} title = "Snoozed" />
            <SidebarOption Icon = {LabelImportantIcon} title = "Important" />
            <SidebarOption Icon = {NearMeIcon} title = "Sent" />
            <SidebarOption Icon = {NoteIcon} title = "Drafts" />
            <SidebarOption Icon = {ExpandMoreIcon} title = "More" />
            <SidebarOption Icon = {ImportantDevices} title = "Important" />
            <SidebarOption Icon = {Chat} title = "Chats" />
            <SidebarOption Icon = {AllInbox} title = "All Mail" />
            <SidebarOption Icon = {Delete} title = "Bin" />
            
            


            <div className = "sidebar__footer">
                <div className = "sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
