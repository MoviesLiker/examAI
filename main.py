from text_reader import read_text_file
from text_extract import extract_text_from_pdf

from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

question_answerer = pipeline("question-answering", model='distilbert-base-cased-distilled-squad')

def run():
    pdf_path = 'input.pdf'#input('Enter pdf file path: ')
    
    text = extract_text_from_pdf(pdf_path, pages=[1])
    type = int(input('Choose one:-\n 1 = summarization \n 2 = qna\n: '))

    if type == 1:
        max = int(input('Enter Maximum length: '))
        min = int(input('Enter minimum length: '))
        result = summarizer(text, max_length=max, min_length=min, do_sample=True)
        return result
    
    if type == 2:
        question = input('Aks you question:\n ')
        result = question_answerer(question=question, context=text)
        return result
    
print(run())