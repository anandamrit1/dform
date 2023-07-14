import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import QuestionsList from './QuestionList';
import Settings from './Settings';
import Responses from './Responses';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function DashboardTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '50%', margin: 'auto' }}>
                <Tabs centered value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Questions" {...a11yProps(0)} />
                    <Tab label="Responses" {...a11yProps(1)} />
                    <Tab label="Settings" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <div className=" fixed w-[10000px] h-2/3 -top-80 -rotate-6 -left-96 opacity-30 -z-40" 
            style={{ 
                background: `radial-gradient(100% 50% at 50% 50%, ${"red"} 0%, #ffffff 100%)`,
            }} 
            ></div>
            <CustomTabPanel value={value} index={0}>
                <QuestionsList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Responses />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Settings />
            </CustomTabPanel>
        </Box>
    );
}