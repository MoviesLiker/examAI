from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

# ARTICLE = """

# One day Akbar and Birbal were taking a stroll in the royal gardens when Akbar happened to see a group of crows on the tree.



# """
# print(summarizer(ARTICLE, max_length=500, min_length=30, do_sample=True))
