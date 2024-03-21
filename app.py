# from text_reader import read_text_file
# from text_extract import extract_text_from_pdf

from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

question_answerer = pipeline("question-answering", model='distilbert-base-cased-distilled-squad')


from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SummarizerItems(BaseModel):
    text: str
    maximum: int
    minimum: int

class QnaItems(BaseModel):
    text: str
    question: str

@app.post("/summarizer")
def summary(item: SummarizerItems):
    text = item.text
    result = summarizer(text, max_length=item.maximum, min_length=item.minimum, do_sample=True)
    return result

@app.post("/qna")
def qns(item: QnaItems):
    result = question_answerer(question=item.question, context=item.text)
    return result