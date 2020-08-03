import React from 'react';


import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

const TeacherList: React.FC = () => {
    return (
        <div className="container" id="page-teacher-list">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>
            <main>
                <TeacherItem 
                    name="Matheus Rocha" 
                    subject="Algoritmos em Grafos"
                    price="100.00" 
                    avatar="https://avatars1.githubusercontent.com/u/47263002?s=400&u=b023cb850aece85c91b28786cb6608cbded86065&v=4"
                    bio="Muito doido sdfasdfasfasdfasdfa"
                    contact="85 991704909"
                />
                <TeacherItem
                    name="Diego Fernandes" 
                    subject="Desenvolvimento Web"
                    price="89.00" 
                    avatar="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
                    bio="CTO at @Rocketseat. Passionate about education and changing people's lives through programming."
                    contact="85 991704909"
                />
                <TeacherItem
                    name="Mayk Brito" 
                    subject="Design UI/UX"
                    price="50.00" 
                    avatar="https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4"
                    bio="An instructor focused on helping people start programming for web"
                    contact="85 991704909"
                />


            </main>
        </div>
    );
}

export default TeacherList;