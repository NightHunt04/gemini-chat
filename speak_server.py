from flask import Flask, request, send_file
from gtts import gTTS
import io, os

app = Flask(__name__)

@app.route('/speak', methods=['POST'])
def text_to_speech():
    data = request.get_json()
    text = data['text']

    if text == 'okdok':
        os.system('killall mpg123')

    else:
        tts = gTTS(text=text, lang='en', tld='us')
        tts.save("output.mp3")
        os.system("mpg123 output.mp3 > /dev/null 2>&1")
        os.remove("output.mp3")
        return 'success'

if __name__ == '__main__':
    app.run(debug=True)
