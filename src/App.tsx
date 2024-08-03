import './App.css'
import {useState} from "react";
import {Button} from "./Button";
import {Tablo} from "./Tablo";


function App() {
    const [cifra, setcifra] = useState(0)
    const [maxi, setMax] = useState(10)
    const [start_value, setStart] = useState(0)
    const [dis, setDisabled] = useState(false)



    const Increment = () => {
        setcifra(cifra + 1)
    }
    const Reset = () => {
        setcifra(0)
        setStart(0)
        setDisabled(false)
        localStorage.clear()
    }

    const OnStartHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) < 0) {
            setDisabled(true)
        }
        if (Number(e.currentTarget.value) >= maxi) {
            setDisabled(true)
        }
        if (Number(e.currentTarget.value) >= 0 && Number(e.currentTarget.value) < maxi) {
            setDisabled(false)
        }

        setStart(Number(e.currentTarget.value))

    }

    const OnMaxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) <= start_value) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
        setMax(Number(e.currentTarget.value))

    }


    const SetStartValueHandler = () => {
        setcifra(start_value)
        localStorage.setItem('maxi', JSON.stringify(maxi))
        localStorage.setItem('start_value', JSON.stringify(start_value))
        setDisabled(true)
    }


    return (
        <div className={'total'}>
            <div className={'counter'}>

                <div className={'settings'}>
                    <div className={'input_data'}>
                        <div>Max Value</div>
                        <div>
                            <input
                                className={start_value < 0 || start_value >= maxi ? 'input_data_error' : ''}
                                type="number"
                                value={maxi}
                                onChange={OnMaxHandler}/>
                        </div>
                    </div>
                    <div className={'input_data'}>
                        <div>Start Value</div>
                        <div>
                            <input
                                className={start_value < 0 || start_value >= maxi ? 'input_data_error' : ''}
                                type="number"
                                value={start_value}
                                onChange={OnStartHandler}/>

                        </div>
                    </div>
                </div>

                <div className={'footer'}>
                    <Button disabled={dis} name={'Set'} onClick={SetStartValueHandler}/>
                </div>
            </div>
            <div className={'counter'}>

                <div className={'cifra'}>
                    <Tablo cifra={cifra} max={maxi} start_value={start_value} disabled={dis}/>
                </div>

                <div className={'footer'}>
                    <Button disabled={cifra === maxi} name={'Inc'} onClick={Increment}/>
                    <Button disabled={cifra === 0} name={'Reset'} onClick={Reset}/>
                </div>
            </div>
        </div>
    )
}

export default App
