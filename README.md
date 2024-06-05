
# Exam Preparation AI

The Exam Preparation AI is an innovative platform designed to assist students in preparing for exams effectively. Leveraging cutting-edge technologies such as FastAPI, Hugging Face, and ReactJS, this project offers a suite of powerful features including text summarization, question-answering chat, and text generation capabilities.

## Features

- **Text Summarization:** Condenses lengthy study materials into concise summaries, allowing students to grasp key concepts quickly and efficiently.
- **Q&A Chat with Given Text:** Enables students to interact with the AI system by asking questions related to a given text. The system comprehends the context of the queries and provides accurate answers, facilitating deeper understanding and retention of the subject matter.
- **Text Generation:** Generates coherent and contextually relevant text based on prompts provided by users, facilitating creative writing tasks and brainstorming sessions.

## Technology Stack

- **Backend:** FastAPI
- **NLP:** Hugging Face
- **Frontend:** ReactJS

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/anand-ragothaman/examAI)/examAI.git

2. Navigate to the project directory:

   ```bash
   cd examAI
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt   # For installing FastAPI and Hugging Face dependencies
   ```

4. Start the backend server:

   ```bash
   uvicorn app:app --reload
   ```
   
5. Navigate to the project UI directory:

   ```bash
   cd examAI/ui
   ```

6. Install npm dependencies:

   ```bash
   npm install   # For installing ReactJS dependencies
   ```

7. Start the frontend development server:

   ```bash
   npm start
   ```

6. Access the application at `http://localhost:3000` in your web browser.

7. Config api url on src/Config.js file


## Usage

1. Summarization:
   - Enter the text you want to summarize and click the "Summarize" button to generate a summary.
  
2. Q&A Chat:
   - Enter a passage of text and ask questions related to it. The AI system will provide accurate answers based on the context.

3. Text Generation:
   - Provide a prompt for the text generation model, and the AI will generate coherent text based on the input.

## Contributing

Contributions are welcome! Please feel free to open issues for feature requests, bug fixes, or any other improvements you'd like to see. Pull requests are also encouraged.

## License

This project is licensed under the [MIT License](LICENSE).

---


