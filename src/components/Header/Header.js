import "./header.css";

export default function Header() {
    return (
        <header>
            <div className="wrap flex">
                <div className="logo">
                    <p>ТЕСТ</p>
                </div>
                <div className="navigation">
                    <nav>
                        <ul className="flex">
                            <li>
                                <a href="#">Клуб</a>
                            </li>
                            <li>
                                <a href="#">База Знаний</a>
                            </li>
                            <li>
                                <a href="#">Инструменты</a>
                            </li>
                            <li className="login">                            
                                <a href="#">
                                    <i className="fas fa-user-circle">
                                    </i>Вход
                                </a>
                            </li>
                            <li>
                                <a href="#" className="current">Регистрация</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="lang">RU</div>
            </div>
        </header>
    )
}