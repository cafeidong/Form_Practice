import React, { useState } from 'react';
import Layout from '@ucloud-fe/react-components/lib/components/Layout';
import Box from '@ucloud-fe/react-components/lib/components/Box'; 
import Button from '@ucloud-fe/react-components/lib/components/Button'; 

import Form from '@ucloud-fe/react-components/lib/components/Form'
import ZForm from '@ucloud-fe/react-components/lib/components/ZForm'
import Input from '@ucloud-fe/react-components/lib/components/Input';
import Radio from '@ucloud-fe/react-components/lib/components/Radio';
import NumberInput from '@ucloud-fe/react-components/lib/components/NumberInput';
import Notice from '@ucloud-fe/react-components/lib/components/Notice';


var RadioGroup = Radio.Group;


import './style.css';

const { Header, Sider, Content, Footer } = Layout;
var { formDecorator, controllerDecorator, formShape } = ZForm;
var { Group,Item } = Form;

let headerStyle={
    backgroundColor:'#ffffff',
    padding:'24px',
    boxShadow: '0px 8px 6px -6px rgba(0,0,0,0.08)',
    zIndex:1000
};

let footerStyle={
    backgroundColor:'#ffffff',
    padding:'24px',
    boxShadow: '0px 8px 6px -6px rgba(0,0,0,0.08)',
    zIndex:1001
}

let contentStyle={
    backgroundColor:'#e8eaf3',
    flex:'1',
    overflowY: 'auto',
    padding:'15px'
}

function Newform(props:any) {
    const { form } = props;
    const Submit = () => {
        form.validateFields((errors:any, values:any) => {
            if(ipMessage){
                errors.ipMessage=ipMessage;
            }
            if(noticeMessage){
                errors.noticeMessage=noticeMessage;
            }
            if(errors){
                console.log(errors);
            }else{
                const Data={...values};
                console.log('Form data:', Data);  
            } 
        });

    }

    const type = ['a', 'b', 'c', '4'];
    const [value, setValue] = useState(type[0]);

    const [port, setPort] = useState(1500);
    const handlePortChange = (value:number) => {
        if (value > 1500) {
            setPort(value);
        }
    };

    const [noticeMessage, setNoticeMessage] = useState<String>('输入不能为空！');//名称错误提示
    const [ipMessage, setipMessage] = useState<String>('ip不能为空！');//ip错误提示

    const handlePasswordChange = (e:any) => {
        let passwordval = e.target.value;
    }

    function judgeIp(ip:string):boolean{
        const ipv4Rule = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
        return ipv4Rule.test(ip);
    }

    return (
        <Layout hasSider={false} style={{ height: '100%' }}>
            <Header style={headerStyle}>
                添加部署
            </Header>
            <Content style={contentStyle}>
                <Form>
                    <Item label='类型' required='true'>
                        <Radio.Group
                            {...form.getFieldProps('type', {
                                initialValue: type[0],
                                rules: [{ required: true}],
                            })}
                            styleType="button"
                            options={type.map((item) => ({ value: item, label: item }))}
                        />
                    </Item>
                    <Item label='名称' required='true' help={noticeMessage}>
                        <Input
                            {...form.getFieldProps('name', {
                                rules: [{ required: true }],
                            })}
                            onChange={(e: any) => {
                                form.getFieldProps('name').onChange(e);
                                if (e.target.value.length < 10 || e.target.value.length > 20) {
                                    setNoticeMessage('名称长度必须在10～20！');
                                }
                                else {
                                    setNoticeMessage('');
                                }
                            }
                            }
                        />
                    </Item>
                    <Item label='资源IP' required='true' help={ipMessage}>
                        <Input
                            {...form.getFieldProps('resourceIp', {
                                rules: [{ required: true }],
                            })}
                            onChange={(e: any) => {
                                form.getFieldProps('resourceIpç').onChange(e);
                                if (!judgeIp(e.target.value)) {
                                    setipMessage('请输入格式正确的ipv4地址');
                                }
                                else {
                                    setipMessage('');
                                }
                            }
                            }

                        />
                    </Item>
                    <Item label='端口' required='true' help='请输入大于1500的整数'>
                        <NumberInput
                            value={port}
                            onNumberChange={handlePortChange}
                            min={1500}
                            precision={0}
                            {...form.getFieldProps('port', {
                                initialValue: port,
                                rules: [{ required: true }],
                            })}
                        />
                    </Item>
                    <Item label='密码'>
                        <Input
                            onChange={handlePasswordChange}
                            placeholder="请输入密码"
                            {...form.getFieldProps('password', {
                                rules: [{ required: true }],
                            })}
                        />
                    </Item>
                    {/* <Item>
                        {noticeStyle && (
                            <Notice styleType={noticeStyle} style={{ width: '50%' }}>
                                {noticeMessage}
                            </Notice>
                        )}
                    </Item> */}
                </Form>
            </Content>
            <Footer style={footerStyle}>
                <Box container={true} direction='row-reverse' spacing={15}>
                    <Button styleType='primary' size='md' onClick={Submit} >
                        确认
                    </Button>
                    <Button styleType='border' size='md' >
                        取消
                    </Button>
                </Box>
            </Footer>
        </Layout>
    )
}

export default formDecorator()(Newform);

