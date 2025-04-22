import React, { useState } from 'react';
import Layout from '@ucloud-fe/react-components/lib/components/Layout';
import Box from '@ucloud-fe/react-components/lib/components/Box'; 
import Button from '@ucloud-fe/react-components/lib/components/Button'; 
import Drawer from '@ucloud-fe/react-components/lib/components/Drawer';
import Formpage from './drawform';
import './style.css';

const { Header, Sider, Content, Footer } = Layout;

interface CardProps {
    ClickButton: () => void;
}

function Siderup(){
    return(
        <div className='box'>
            <h4>1</h4>
        </div>
    );
}

//主内容
function Card({ClickButton}:CardProps){
    return(
        <Box container={true} direction="column" spacing={10} 
        className='mainbox'>
            <Box container={true} direction="row" 
            style={{ justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                <Button styleType='primary'
                 size='lg' 
                 onClick={ClickButton} 
                 type='button'>
                    添加部署
                </Button>
                <Box 
                style={{ flex: 1, backgroundColor: '#ffffff', padding: '10px', textAlign: 'center' }}>
                    
                </Box>
            </Box>

        </Box>
    );
}

export default function MainPage() {

    const [drawervisible,setvisible]=useState(false);

    const Click=()=>{
        setvisible(!drawervisible);
    }
    
    return (
        <Layout hasSider={true}>
            <Sider width={200} className='sider-with-border'>
                <Siderup />
            </Sider>
            <Layout hasSider={false}>
                <Header className='simpleheader'>
                    头部导航
                </Header>
                <Content style={{ flex:'1', padding: '12px', backgroundColor: '#f0f1f5' }}>
                    <Card ClickButton={Click}/>
                </Content>
            </Layout>

            <Drawer width="70%" visible={drawervisible} onClose={() => setvisible(false)}
            keyboard maskClosable>
                <Formpage />
            </Drawer>

        </Layout>

    );
}