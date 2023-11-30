import React from 'react';
import StudentForm from './StudentForm';

const Students = () => {
    return (
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text-center">Студенты</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <StudentForm />
                </div>
                <div className="col-md-7">
                    <div>Список студентов</div>
                </div>
            </div>
        </>
    );
};

export default Students;
