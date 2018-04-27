'use strict';

const FeedbackForm = props => {
    
    const {data, onSubmit} = props;
    
    let salutationField,
        nameField, 
        emailField, 
        subjectField, 
        messageField, 
        snacksField;
        
    const salutation = (
        <div 
        ref={element => salutationField = element}
        className="contact-form__input-group">
            <input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" defaultChecked={data.salutation} value="Мистер"/>
            <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
            <input className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" defaultChecked={data.salutation} value="Мисис"/>
            <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
            <input className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" defaultChecked={data.salutation} value="Мис"/>
            <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
        </div>
    );

    const name = (
        <div className="contact-form__input-group">
            <label className="contact-form__label" htmlFor="name">Имя</label>
            <input
                ref={element => nameField = element}
                className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={data.name}/>
        </div>
    );

    const email = (
        <div className="contact-form__input-group">
            <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
            <input
            ref={element => emailField = element}
            className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={data.email}/>
        </div>
    );

    const subject = (
        <div className="contact-form__input-group">
            <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
            <select 
            ref={element => subjectField = element}
            className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={data.subject}>
                <option>У меня проблема</option>
                <option>У меня важный вопрос</option>
            </select>
        </div>
    );

    const message = (
        <div className="contact-form__input-group">
            <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
            <textarea 
            ref={element => messageField = element}
            className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={data.message}></textarea>
        </div>
    );
    
    const snacks = (
        <div ref={element => snacksField = element}
        className="contact-form__input-group">
            <p className="contact-form__label--checkbox-group">Хочу получить:</p>
            <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" defaultChecked={data.snacks.indexOf('пицца') !== -1} value="пицца"/>
            <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
            <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" defaultChecked={data.snacks.indexOf('пирог') !== -1} value="пирог"/>
            <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
        </div>
    );
    
    const submitData = (e) => {
        e.preventDefault();
        const form = {
            salutation: salutationField.querySelector('input[type=radio]:checked').value,
            name: nameField.value,
            email: emailField.value,
            subject: subjectField.value,
            message: messageField.value,
            snacks: Array
                .from(snacksField.querySelectorAll('input[type=checkbox]:checked'))
                .map(el => el.value)
        }

//        console.log(form);
        onSubmit(JSON.stringify(form));
    }

    
    return (
        <form className="content__form contact-form">
            <div className="testing">
                <p>Чем мы можем помочь?</p>
            </div>
            {salutation}
            {name}
            {email}
            {subject}
            {message}
            {snacks}
            <button className="contact-form__button" type="submit" onClick={submitData}>Отправить сообщение!</button>
            <output id="result" />
        </form>   
    );
}
