import React, { useState } from 'react';
import {
    Input,
    Card,
    Row,
    Button,
    Checkbox
} from 'antd';



const Content = () => {
    const [value, setValue] = useState('');
    const [manyToDos, setToDos] = useState([]);
    const [showinput, changeShow] = useState(false);

    return (
        <div>
            <Input
                placeholder="Enter todo"
                value={value}
                onChange={text => setValue(text.target.value)}
                onPressEnter={() => {
                    setToDos([value, ...manyToDos]);
                    setValue('');
                }}
            />
            {
                manyToDos.map((element, index) =>
                    <Card size="small" style={{ width: 'auto', margin: '10px' }}>
                        <Row type='flex' justify='space-between' gutter='xs' align='top'>
                            <Row type='flex' justify='space-between' gutter='xs' align='top'>
                                <Checkbox style={{ marginRight: 10 }} id={'check' + index} onChange={() => document.getElementById('text' + index).style.textDecoration = document.getElementById('check' + index).checked ? 'line-through' : 'none'} />
                                <p id={'text' + index} style = {{display: 'block'}}>{element}</p>
                                <Input 
                                value = {element} 
                                style = {{display: 'none'}} 
                                id = {'input'+index} 
                                onChange = {(text)=>setToDos(manyToDos.map((val, i)=>index===i?text.target.value:val))}
                                onPressEnter = {() => {
                                    document.getElementById('text'+index).style.display = 'block';
                                    document.getElementById('input'+index).style.display = 'none';
                                }}
                                />
                            </Row>
                            <div>
                                <Button style={{ marginRight: '10px' }} onClick = {() => {
                                    document.getElementById('text'+index).style.display = 'none';
                                    document.getElementById('input'+index).style.display = 'block';
                                }}>Edit</Button>
                                <Button onClick={() => {
                                    setToDos(manyToDos.filter((val, i) => i === index ? false : true));
                                }}>Delete</Button>
                            </div>
                        </Row>
                    </Card>)
            }
        </div>
    );
}
export default Content;