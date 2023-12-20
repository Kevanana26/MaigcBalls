function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8 Ball a question')
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question, please and thank you'
        document.getElementById('response-text').classList = 'display text-danger'
        document.getElementById('response-image').src = '#BADIMAGE' //fix this shit later//
        return
    }
    if (!question.trim()) {
        alert('Buddy, please enter an actual question that can be answered')
        return
    }
    const randomNumber = Math.floor(Math.random() * 8)
    let answer, Image, color;
    switch (randomNumber) {
        case 0:
            answer = "Yes"
            Image = "imgs/mario.gif"
            color = "text-success"
            break
        case 1:
            answer = "No"
            Image = "imgs/No.jpg"
            color = "text-danger"
            break
        case 2:
            answer = "Looks uncertain"
            Image = "imgs/uncertain.gif"
            color = "text-primary"
            break
        case 3:
            answer = "Probably Not"
            Image = "imgs/Kermit.jpg"
            color = "text-info"
            break
        case 4:
            answer = "Maybe, Maybe Not, Who knows"
            Image = "imgs/idk.gif"
            color = "text-success"
            break
        case 5:
            answer = "Yeah...You're SOL"
            Image = "imgs/SOL.gif"
            color = "text-danger"
            break
        case 6:
            answer = "Most Likely"
            Image = "imgs/Most Likely.gif"
            color = "text-info"
            break
        case 7:
            answer = "Couldn't tell ya"
            Image = "couldn't-image.jpg"
            color = "text-warning"
            break
    }

    const responseText = document.getElementById('response-text');
    responseText.innerText = answer;
    responseText.classList = `display-4 ${color}`;
    document.getElementById('reponse-image').src = Image

}