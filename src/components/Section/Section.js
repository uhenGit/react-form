import { useEffect, useState } from "react";
import TextInput from "../TextInput/TextInput";
import CheckInput from "../CheckInput/CheckInput";
import { checkoutEmail } from "../hooks/useCheckoutEmail";
import "./section.css"

export default function Section() {
    const initStr = '';
    const initBool = false;
    const [formData, setFormData] = useState({
        userEmail: initStr,
        pass: initStr,
        confirmPass: initStr,
        terms: initBool,
        conf: initBool
    })
    const [isError, setIsError] = useState(true)
    useEffect(() => {
        if (checkoutEmail(formData.userEmail) && 
        formData.pass === formData.confirmPass &&
        formData.pass.length > 0 &&
        formData.terms &&
        formData.conf) {
            setIsError(false)
        } else {
            setIsError(true)
        }
    }, [formData])
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    const handleCheckInput = (e) => {
        const { name, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked
        }))
    }
    const submitForm = (e) => {
        e.preventDefault();
        localStorage.setItem('regData', JSON.stringify({email: formData.userEmail, password: formData.pass}))
        setFormData((prevData) => ({
            ...prevData,
            userEmail: initStr,
            pass: initStr,
            confirmPass: initStr,
            terms: initBool,
            conf: initBool
        }))
    }
    return (
        <section>
            <h1>Регистрация личного кабинета</h1>
            <form onSubmit={submitForm} className="flex f-column f-center">
                    <TextInput
                        header={'E-mail'} 
                        inputName={'userEmail'} 
                        inputVal={formData.userEmail} 
                        inputFunc={handleInput}
                    />
                    <TextInput
                        header={'Придумайте пароль'} 
                        inputName={'pass'} 
                        inputVal={formData.pass} 
                        inputFunc={handleInput}
                    />
                    <TextInput 
                        header={'Подтвердите пароль'} 
                        inputName={'confirmPass'} 
                        inputVal={formData.confirmPass} 
                        inputFunc={handleInput} 
                    />
                    <div className="check-block">
                        <CheckInput
                            header={'Я ознакомлен с '}
                            link={'Условиями, положениями и рисками'}
                            inputName={'terms'}
                            inputChecked={formData.terms}
                            inputFunc={handleCheckInput}/>
                        <CheckInput
                            header={'Я ознакомлен с '}
                            link={'Политикой конфиденциальности'}
                            inputName={'conf'}
                            inputChecked={formData.conf}
                            inputFunc={handleCheckInput}/>
                    </div>
                <div className="flex btn-block">
                    <button type="submit" disabled={isError} className={!isError ? 'active' : ''}>Регистрация</button>
                </div>
            </form>
        </section>
    )
}