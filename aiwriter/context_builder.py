import os
import requests
import subprocess
from bs4 import BeautifulSoup

CONTEXT_FILE = os.getenv("AIWRITER_CONTEXT_FILE", "context.txt")
CONTEXT_DIR = os.getenv("AIWRITER_CONTEXT_DIR", "context")


def parse_url(url) -> str:
    """This function takes a URL and returns the contents of the page in Markdown.

    Dependencies: `requests`, `BeautifulSoup`, `pandoc`
    """

    response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
    soup = BeautifulSoup(response.content, "html.parser")
    html = str(soup.prettify())
    md = pandoc_html2md(html)
    save_to_file(url, md)
    return md

def pandoc_html2md(html: str) -> str:
    """This function takes HTML content and converts it to Markdown using pandoc."""
    cmd = ['pandoc', '-s', '-f', 'html', '-t', 'markdown', '--wrap=none']
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    md, err = proc.communicate(input=html.encode())
    md = md.decode()
    if err:
        raise Exception(f"Error converting HTML to Markdown: {err.decode()}")
    return md


def save_to_file(url, md):
    """This function saves the content to a file in the context directory
    if AIWRITER_CONTEXT_DIR env var is not set to empty."""
    if not CONTEXT_DIR:
        return
    filename = f"{url.split('/')[-1] or url.split('/')[-2]}.md"
    os.makedirs(CONTEXT_DIR, exist_ok=True)
    filepath = os.path.join(CONTEXT_DIR, filename)
    open(filepath, "w").write(md)


def context_builder(prompt):
    """This function takes a prompt, reads a "context" file containing URLs
    and builds the full context for the AI writer."""
    SEPARATOR = "\n\n------------\n------------\n\n"

    with open(CONTEXT_FILE, "r") as f:
        urls = f.readlines()
    urls = [url.strip() for url in urls if url.strip()]

    context = []
    for url in urls:
        try:
            context.append(parse_url(url))
        except Exception as e:
            print(f"Error parsing URL {url}: {e}")

    context = f"{SEPARATOR}".join(context)

    return context + SEPARATOR + prompt

def cli():
    """If this script is run via CLI, it will read the context file,
    build the context with prompt passed as argument and print it."""
    import sys

    if len(sys.argv) < 2:
        print("Usage: python context_builder.py <prompt>")
        sys.exit(1)

    prompt = sys.argv[1]
    context = context_builder(prompt)
    print(context)

if __name__ == "__main__":
    cli()
    