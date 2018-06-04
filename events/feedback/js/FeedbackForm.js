'use strict';

const FeedbackForm = ({data, onSubmit}) => {
    
    const submitData = (e) => {
        e.preventDefault();
        const formFields = e.currentTarget;

        const form = {
            salutation: formFields.salutation.value,
            name: formFields.name.value,
            email: formFields.email.value,
            subject: formFields.subject.value,
            message: formFields.message.value,
            snacks: Array
                .from(formFields.snacks)
                .filter(el => el.checked)
                .map(el => el.value)
        }

        onSubmit(JSON.stringify(form));
    }

    
    return (
        <form className="content__form contact-form" onSubmit={submitData}>
            <div className="testing">
                <p>Чем мы можем помочь?</p>
            </div>
            <div> 
                <input 
                    className="contact-form__input contact-form__input--radio" 
                    id="salutation-mr" 
                    name="salutation" 
                    type="radio" 
                    defaultChecked={data.salutation === 'Мистер'} 
                    value="Мистер"
                />
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
                <input 
                    className="contact-form__input contact-form__input--radio" 
                    id="salutation-mrs" 
                    name="salutation" 
                    type="radio" 
                    defaultChecked={data.salutation === 'Мисис'} 
                    value="Мисис"
                />
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
                <input 
                    className="contact-form__input contact-form__input--radio" 
                    id="salutation-ms" 
                    name="salutation" 
                    type="radio" 
                    defaultChecked={data.salutation === 'Мис'} 
                    value="Мис"
                />
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="name">Имя</label>
                <input
                    className="contact-form__input contact-form__input--text" 
                    id="name" 
                    name="name" 
                    type="text" 
                    defaultValue={data.name}
                />
            </div>
                <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
                <input
                    className="contact-form__input contact-form__input--email" 
                    id="email" 
                    name="email" 
                    type="email" 
                    defaultValue={data.email}
                />
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
                <select 
                    className="contact-form__input contact-form__input--select" 
                    id="subject" 
                    name="subject" 
                    defaultValue={data.subject}>
                    <option>У меня проблема</option>
                    <option>У меня важный вопрос</option>
                </select>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
                <textarea 
                    className="contact-form__input contact-form__input--textarea" 
                    id="message" 
                    name="message" 
                    rows="6" 
                    cols="65" 
                    defaultValue={data.message}>
                </textarea>
                </div>
                <div
                    className="contact-form__input-group">
                    <p className="contact-form__label--checkbox-group">Хочу получить:</p>
                    <input 
                        className="contact-form__input contact-form__input--checkbox" 
                        id="snacks-pizza" 
                        name="snacks" 
                        type="checkbox" 
                        defaultChecked={data.snacks.includes('пицца')} 
                        value="пицца"
                    />
                    <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
                    <input 
                        className="contact-form__input contact-form__input--checkbox" 
                        id="snacks-cake" 
                        name="snacks" 
                        type="checkbox" 
                        defaultChecked={data.snacks.includes('пирог')} 
                        value="пирог"
                    />
                    <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
                </div>
            <button className="contact-form__button" type="submit">Отправить сообщение!</button>
            <output id="result" />
        </form>   
    );
}
