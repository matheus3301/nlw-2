import React from 'react';


import whatsappIcon from "../../assets/images/icons/whatsapp.svg";


import './styles.css';

interface TeacherItemProps{
    avatar: string,
    name: string,
    subject: string,
    bio: string,
    price: string,
    contact: string
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
    <header>
        <img src={props.avatar} alt={props.name}/>
        <div>
            <strong>{props.name}</strong>
            <span>{props.subject}</span>
        </div>
    </header>
    <p>
        {props.bio}
    </p>

    <footer>
        <p>
            Preço/hora
            <strong>R$ {props.price}</strong>
        </p>

        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em Contato
        </button>
    </footer>

    
</article>
  );
}

export default TeacherItem;