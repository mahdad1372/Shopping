import React, { Component } from 'react'
import '../App.css';

export default class Timer extends Component {
    state = {
        hour : 3 ,
        minutes: 35,
        seconds: 5,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes , hour } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            // if (seconds === 0) {
            //     if (minutes === 0 && hour === 0) {
            //         clearInterval(this.myInterval)
            //     } else {
            //         this.setState(({ minutes }) => ({
            //             minutes: minutes - 1,
            //             seconds: 59
            //         }))
            //     }
            // } 
                if (seconds === 0) {
                if (minutes === 0 && hour === 0) {
                    clearInterval(this.myInterval)
                } else {
                    if( minutes === 0){
                    this.setState(({ hour }) => ({
                        hour: hour - 1,
                        minutes : 59 ,
                        seconds: 59
                    }))
                    }else{
                        this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                    }
                   
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds , hour } = this.state
        return (
            <div>
                { minutes === 0 && seconds === 0 && hour === 0
                    ? <h2>Busted!</h2>
                :  <div class="d-flex justify-content-center mb-3">
                <div class="p-2 time mr-3"><h2>{hour}</h2>
                <h3>Hour</h3></div>
                <div class="p-2 time mr-3"><h2>{minutes}</h2>
                <h3>Minutes</h3></div>
                <div class="p-2 time mr-3"><h2>{seconds}</h2>
                <h3>seconds</h3></div>
              </div>
                    // : <h2>{hour} : {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
                }
            </div>
        )
    }
}


