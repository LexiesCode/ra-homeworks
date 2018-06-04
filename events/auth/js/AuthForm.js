'use strict';
const AuthForm = ({onAuth}) => {
    
    const authorizeUser = (e) => {
        e.preventDefault();
        if (onAuth && typeof onAuth === 'function') {
            const formFields = e.currentTarget.elements;
            const user = {
                name: formFields.name.value,
                email: formFields.email.value,
                password: formFields.password.value
            }
        onAuth(user);
        }
    }

    const validateEmail = (e) => {
        e.currentTarget.value = e.currentTarget.value.replace(/[^\w@.-]/gi, '');
    }

    const validatePassword = (e) => {
        e.currentTarget.value = e.currentTarget.value.replace(/\W/gi, '');
    }

   
    return (
        <form className="ModalForm" onSubmit={authorizeUser} action="/404/auth/" method="POST">
            <div className="Input">
                <input 
                    required 
                    type="text" 
                    placeholder="Имя"
                />
                <label></label>
            </div>
            <div className="Input">
                <input 
                    type="email" 
                    onChange={validateEmail} 
                    placeholder="Электронная почта"
                />
                <label></label>
        </div>
        <div className="Input">
                <input 
                    required 
                    type="password" 
                    onChange={validatePassword} 
                    placeholder="Пароль"
                />
                <label></label>
        </div>
            <button type="submit">
                <span>Войти</span>
                <i className="fa fa-fw fa-chevron-right"></i>
            </button>
        </form>
    );
}