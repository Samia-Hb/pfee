from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

chat_history = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/messages', methods=['GET', 'POST'])
def messages():
    if request.method == 'POST':
        message = request.json.get('message')
        if message:
            chat_history.append(message)
            return jsonify({'status': 'success'})
        else:
            return jsonify({'status': 'error', 'message': 'Message not provided'})
    elif request.method == 'GET':
        return jsonify(chat_history)

if __name__ == '__main__':
    app.run(debug=True)
