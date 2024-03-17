import pdfplumber

def extract_text_from_pdf(pdf_path, pages=None):
    """
    Extract text from PDF file.
    
    Args:
        pdf_path (str): Path to the PDF file.
        pages (list): List of page numbers to extract text from. If None, extracts from all pages.
        
    Returns:
        str: Extracted text.
    """
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        if pages is None:
            pages = range(len(pdf.pages))
        for page_number in pages:
            page = pdf.pages[page_number]
            text += page.extract_text()
    return text

# Example usage:
# pdf_path = "example.pdf"  # Replace with your PDF file path
# specific_pages = [0, 2, 4]  # Specify the pages you want to extract text from, or None for all pages
# extracted_text = extract_text_from_pdf(pdf_path, pages=specific_pages)
# print(extracted_text)

import pdfplumber

def pdf_to_text(pdf_path, text_path):
    with pdfplumber.open(pdf_path) as pdf:
        with open(text_path, 'w', encoding='utf-8') as text_file:
            for page in pdf.pages:
                text = page.extract_text()
                text_file.write(text)

# Example usage:
# pdf_to_text('1.pdf', 'output.txt')

