import React, { useState, useEffect } from 'react';

const StudentForm = () => {
    const initialFieldValues = {
        lastName: '',
        firstName: '',
        groupName: '',
        yearOfBirth: '',
        avarageScore: '',
    };
    const [formData, setFormData] = useState(initialFieldValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <form autoComplete="off">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">
                        Фамилия и Имя
                    </span>
                </div>
                <input className="form-control" placeholder="Иванов" name="lastName" value={formData.lastName} />
                <input className="form-control" placeholder="Иван" name="firstName" value={formData.firstName} />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" name="groupName">
                        Группа
                    </label>
                </div>
                <select className="custom-select" id="groupName" name="groupName" value={formData.groupName} onChange={handleInputChange}>
                    <option value="">Выбор группы</option>
                    <option value="АВб-21-2">АВб-21-2</option>
                    <option value="АВб-21-11">АВб-21-11</option>
                    <option value="АВб-21-12">АВб-21-12</option>
                    <option value="АВб-22-1">АВб-22-1</option>
                    <option value="АВб-22-2">АВб-22-2</option>
                    <option value="АВб-22-3">АВб-22-3</option>
                    <option value="АВб-23-1">АВб-23-1</option>
                    <option value="АВб-23-2">АВб-23-2</option>
                    <option value="АВб-23-3">АВб-23-3</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <input type="number" min="3" step="0.15" max="5" value={formData.avarageScore} onChange={handleInputChange} name="avarageScore" />
            </div>
        </form>
    );
};

export default StudentForm;
