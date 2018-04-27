'use strict';
const AuthForm = ({onAuth}) => {
    let nameField,
    emailField,
    passwordField;

    function authorizeUser(e) {
        e.preventDefault();
        if (onAuth && typeof onAuth === 'function') {
            const user = {
                name: nameField.value,
                email: emailField.value,
                password: passwordField.value
            };
        
        onAuth(user);
        }
    }

    const validateEmail = (e) => {
        e.currentTarget.value = e.currentTarget.value.replace(/[^\w@.-]/gi, '');
    }

    const validatePassword = (e) => {
        e.currentTarget.value = e.currentTarget.value.replace(/\W/gi, '');
    }

    const name = (
        <div className="Input">
                <input ref={element => nameField = element} required type="text" placeholder="Имя"/>
                <label></label>
        </div>
    );

    const email = (
        <div className="Input">
                <input ref={element => emailField = element} type="email" onChange={validateEmail} placeholder="Электронная почта"/>
                <label></label>
        </div>
    );

    const password = (
        <div className="Input">
                <input ref={element => passwordField = element} required type="password" onChange={validatePassword} placeholder="Пароль"/>
                <label></label>
        </div>
    );

    return (
        <form className="ModalForm" onSubmit={authorizeUser} action="/404/auth/" method="POST">
            {name}
            {email}
            {password}
            <button type="submit">
                <span>Войти</span>
                <i className="fa fa-fw fa-chevron-right"></i>
            </button>
        </form>
    );
}