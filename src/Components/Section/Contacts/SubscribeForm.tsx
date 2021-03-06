import React, {useRef} from 'react';

/* eslint-disable */
const emailRE = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+).([a-zA-Z]{2,5})$/;

export const SubscribeForm: React.FC = () => {
    
    const ref = useRef<HTMLInputElement>(null);
    

    const PressHandler = (event: { preventDefault: () => void; }) => {
            event.preventDefault(); 
            if (!emailRE.test(ref.current!.value)) {
                alert("Please enter a valid email address");
                console.log('Error');
                ref.current!.value = '';
            }
            else{
                console.log(ref.current!.value);
                ref.current!.value = '';
            }
    }
    return(
 
        <div className="container mr-5">
            <div className="form-group mr-5">
                <label htmlFor="inputEmail" className="">Скидка 10% <br /><span className="text-info">ДОПОЛНИТЕЛЬНО</span> <br />За подписку на наши новости. </label>
                <input 
                    ref={ref}
                    type="text" 
                    className="form-control" 
                    id="inputEmail" 
                    aria-describedby="emailHelp" 
                    placeholder="Введите свой e-mail"
                    />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <button onClick={PressHandler} type="submit" className="btn btn-primary">Follow</button>
        </div>

    )
}

