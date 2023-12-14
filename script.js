function shakeMagic8Ball(){
    const question = prompt('Ask the Magic 8 Ball a question')
    if(question === null){
        document.getElementById('response-text').innerText = 'Please ask a question, please and thank you'
        document.getElementById('response-text').classList = 'display text-danger'
        document.getElementById('response-image').src = '#BADIMAGE' //fix this shit later dog//
    }
    if(!question.trim()){
        alert('Buddy, please enter an actual question that can be answered')
        return
    }
}