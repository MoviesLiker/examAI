from transformers import pipeline
question_answerer = pipeline("question-answering", model='distilbert-base-cased-distilled-squad')

# context = r"""

# One day Akbar and Birbal were taking a stroll in the royal gardens when Akbar happened to see a group of crows on the tree.


# """

# result = question_answerer(question="who looks at who with amazement", context=context)
# print(result)
