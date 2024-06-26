import './MainEnter.css'

export default function MainAllCources(){
    return (  
    <div id="enter_block">
        <div id="enter_block_content_wrapper">
            <h1>
                Вход
            </h1>
            
            <div id="name_wrapper" class="inp_wrapper error_input">
                    <input id="name_input" type="email" class="enter_input" placeholder="Почта"/>
            </div>

            <div id="email_wrapper" class="inp_wrapper">
                <input id="email_input" type="password" class="enter_input" placeholder="Пароль"/>
            </div>

            <button class="enter_btn" id="solve_btn">
                Войти
            </button>

        </div>
    </div>

    )
}