import React, { useState, useRef } from 'react';

function InputSample() {

    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();

    const { name, nickname } = inputs; // 비구조화 할당을 통해 value 추출


    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = (e) => {
        setInputs({
            name: '',
            nickname: '',
        })
        nameInput.current.focus();
    };
    
    return (
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name}
                ref={nameInput}
            />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname}
            />
            <button onClick={onReset}>Initialize</button>
            <div>
                <b>Value:</b>
                이름 (닉네임)
            </div>
        </div>
    )
}

export default InputSample;